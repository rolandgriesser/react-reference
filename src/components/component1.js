import React, {Component} from 'react'
import { connect } from "react-redux";
import { action1 } from '../actions/component1';

// https://medium.com/netscape/component-state-vs-redux-store-1eb0c929277
// Only extend component if it actually has logic, otherwise just use a class
class Component1View extends Component {



    render() {
        let {todos} = this.props;

        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {todos.map(i => <li>{i}</li>)}
                </ul>
                <button onClick={() => this.props.onButtonClick('lololol')}>Test Component 1</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.component1.array1,
        name: state.component1.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (name) => {
            dispatch(action1(name))
        }
    };
};  

// if we don't need the state, and only the dispatcher, then we can call connect() without params
export const Component1 = connect(mapStateToProps, mapDispatchToProps)(Component1View);