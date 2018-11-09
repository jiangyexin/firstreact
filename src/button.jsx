import React from 'react';

class Button extends React.Component{
    constructor(){
        super();
        this.state = {
            text: 'button',
            color: 'blue'
        }
    }

    add() {
        this.props.onAdd();
    }

    render() {
        const { color, text } = this.state;
        return (
            <button className={'btn btn-${color}'} onClick={this.add.bind(this)}>
                <em>{text}</em>
            </button>
        )
    }
}

export default Button;