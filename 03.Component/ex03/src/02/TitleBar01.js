import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler() {
        console.log('TitleBar01: click!');
    }

    render() {
        return (
            <div>
                {/* 클릭했을 때 부를 함수를 셋팅하는 과정(not 호출) -> 호출은 DOM의 역할  */}
                <h4 onClick={this.onClickHandler()}>
                    Function Handler in Class Component(click here!)
                </h4>
            </div>
        );
    }
}