import React from 'react';

import Button from './button.jsx';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    onAdd() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log(this.props.children.length);
        console.log(React.Children.count(this.props.children));
        return (
            <div>
                {
                    React.Children.map(this.props.children,(child) => {
                        return child;
                    })
                }
                <p>{this.state.count}</p>
                <Button onAdd={this.onAdd.bind(this)}>{this.props.buttonText}</Button>
            </div>
        )
    }
}

export default Counter;