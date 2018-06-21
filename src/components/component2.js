import React, {Component} from 'react'
import PropTypes from "prop-types";



// https://medium.com/netscape/component-state-vs-redux-store-1eb0c929277
// Only extend component if it actually has logic, otherwise just use a class
export class Component2 extends Component {

    //first parameter = props
    //constructor(props)
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        // binding the function, otherwise 'this' could have the wrong context
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() {
        const { buttonLabel } = this.props;

        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.buttonClick}>{buttonLabel}</button>
            </div>
        );
    }
}

Component2.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}