import React from 'react';


// import React from 'react';
// import ReactDOM from 'react-dom';
// import React from './kreact/kreact.js'
import ReactDom from './kreact/kreact-dom.js';
import Component from './kreact/kreact.js';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class ClassComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

function FunctionComponent(props) {
    return <div>
        <span>{props.name}</span>
    </div>
}

function Fragement() {
    return (
        <>
            <li>1</li>
            <li>2</li>
        </>
    )
}

let jsx = (
    <div className="odiv">
        odiv
        <span>123</span>
        <a href="#"></a>
        <ClassComponent name="我是class组件"></ClassComponent>
        <FunctionComponent name="我是function组件"></FunctionComponent>
        <ul>
            <Fragement></Fragement>
        </ul>
    </div>

)


console.log(jsx)
ReactDom.render(jsx, document.getElementById('root'));


