import React from 'react';
import ReactDOM from 'react-dom';

//import Button from './button.jsx';
import Counter from './counter.jsx';

//我是一个注释

const li = '我是一个Li';
const title = '';

const List = () => {
    return (
        <div>
            {/*注释*/}
            <h1>我是一个列表 </h1>
            <ul className='List ulA'>
                <li title={ title === '' ? '我真是一个li的title' : title }>{ li }  List Item</li>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item4</li>
            </ul>
            <div>
                <label htmlFor='myRadio'>我是一个单选框</label>
                <input type='radio' id='MyRadio'/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Counter buttonText='点击我加一'>
        <p>我是文本</p>
    </Counter>,
    document.getElementById("root")
)
