import React from 'react';
import {PropTypes} from 'prop-types';

function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}) {
    // 이 위에서 아래처럼 조건문 사용하기보다 return()구문 안에서 처리하기 
    // if(props01 === '') {}
    return (
        <div>
            <h2>Property Validation</h2>
            {/* props 값이 없는 경우, default value '' 출력  */}
            <span>props01: {typeof(props01) !== 'undefined' ? props01 : '---not set---'}</span>
            <br/>
            {/* props 값이 있는 경우  */}
            {/* <span>props02: {props02}</span>  */}
            <span>props02: {typeof(props02) !== 'undefined' ? props02 : '---not set---'}</span>
            <span>props02: {typeof(props02) !== 'undefined' ? props02 : '---not set---'}</span>
            <br/>
            <span>props03: {typeof(props03) !== 'undefined' ? `${props03}` : '---not set---'}</span>
            <br/>
            <span>props04: {typeof(props04) !== 'undefined' ? props04.name : '---not set---'}</span>
            <br/>
            <span>props05: {typeof(props05) !== 'undefined' ? props05.map((e, i) => <b key={i}>{e}</b>) : '---not set---'}</span>
            <br/>
            <span>props06: {typeof(props06) !== 'undefined' ? props06() : '---not set---'}</span>
            <br/>
            <span>props07: {typeof(props07) !== 'undefined' ? props07 : '---not set---'}</span>
            <br/>
            <span>props08: {typeof(props08) !== 'undefined' ? props08.map((e, i) => <b key={i}>{`${e}`}</b>) : '---not set---'}</span>
            <br/>
            <span>
                {'props09:'}{
                    typeof(props09) !== 'undefined' ? 
                    <div>
                        <h5>{props09.no}</h5>
                        <h5>{props09.name}</h5>
                        <h5>{props09.email}</h5>
                    </div> 
                    : 
                    <strong>
                        {'---not set---'}
                    </strong>
               }
            </span>
            <br/>
        </div>
    );
}

//App.js에 명시된 값 타입과 동일한 값이 들어가도록 타입 정의 
MyComponent.prototype = {
    /*  JavaScript에서 지원해주는 Data Type(String, Number, Boolean, Object, Array, Function, Symbol) */
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    /* Combination */ 
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

// Default Prototype 
MyComponent.defaultProps = {
    props2: 0,
    props03: false,
    props04: {no: 0, name: ''},
    props05: [],
    props06: () => {},
    props07: '',
}

export default MyComponent;