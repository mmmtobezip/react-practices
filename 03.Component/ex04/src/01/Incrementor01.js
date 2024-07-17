import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.begin,
            value2: 20,
            value3: 30
        }
        // this.value = this.props.begin;
        // this.step = this.props.step; 
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    //Anti-Pattern
                    //this.value += this.step;
                    //console.log(this.value);
                    //this.render();

                    this.setState({
                        val: this.state.value + this.props.step
                    });
                    this.render();
                }}>
                    <strong>
                        {'+'}
                    </strong>
                </button>
                {' '}
                <span>
                    {/* {this.value} */}
                    {this.state.value}
                </span>
            </div>
        );
    }
}
