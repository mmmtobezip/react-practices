import React, {Component} from 'react';

export default class LifeCircle extends Component {
    constructor(props) {
        super(props);
        
        this.h3Ref = null;
        this.state = {
            color: null 
        }

        console.log('[MOUNT01]: constructor()');
    }

    /**
     *
     *  props로 받아온 값을 state에 동기화 한다.[react v16.3]
     * 
     * 다음에 셋팅될 props, 이전 상태 값을 파라미터로 넘겨준다. -> react에서 호출하는 
     * 즉, 두 값이 다르면 새롭게 셋팅
     * 지금 상태에 props를 셋팅하는 경우 override 시작 = 컴포넌트에 컬러값이 들어온 경우 이를 상태값으로 저장할 때
     * 프로퍼티로 받은 걸 상태로 저장해 사용하는 예제는 이게 처음
     * newtProps값과 현재 prevState랑 비교한 후 값이 다르면 새롭게 setting
     * = {color: nextProps.color} 들어온 컬러에 대한 객체를 리턴해줌으로써 상태에 새로운 컬러가 셋팅됨. 
     * 직접 셋팅보다 props값 기반으로 값을 셋팅할 때 사용함. (function엔 없음)
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`[MOUNT02][UPDATE01]: getDerivedStateFromProps(nextProps=${nextProps.color}, prevState=${prevState.color})`);
        return nextProps.color !== prevState.color ? {color: nextProps.color} : null;
    }

    /**
     *
     *  props state을 변경 했을 때, re-rendering 여부(반환값 true: 한다. false: 안한다)를 결정한다.
     *  현재 데이터: this.props, this.state
     *  변경 데이터: nextProps, nextState
     *  로 접근 가능하다.
     *
     *  컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
     * 
     * nextState == nextProps 모두 파란색이라면 랜더링할 필요없으니 false return, 다르면 true return 후 render() 호출 
     * 랜더링을 최소화 시키는게 좋음.
     * 즉, 이 두 값(파라미터)를 통해 랜더링 호출 여부를 판단=> 성능 최적화를 위한 메서드 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[UPDATE02]: shouldComponentUpdate(nextProps=${nextProps.color}, nextState=${nextState.color})`)
        return true;
    }

    render() {
        console.log('[MOUNT03][UPDATE03]: render()');
        return <h3 style={{backgroundColor: this.state.color, width: 100, height: 50}} ref={ref => this.h3Ref = ref}/>
    }

    /**
     *
     *  render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
     *  반환 값은 다음 메소드 componentDidUpdate()의 세번째 파라미터(snapshot)로 전달.
     *  변경 전의 props, state 접근이 가능하다.
     *  주로 업데이트 직전의 값을 참고해야 할 일이 있을 때 오버라이딩 한다.
     * 
     * 변경된 값을 캐시할 필요가 있을 때, 랜더링한다고 바로 화면에 가는게 아니라 해당 메서드로 호출 후 백업을 시키고 
     * 업데이트 직전 참고가 필요할 때 오버라이딩하는 메서드
     * => 디테일한 작업이 필요할 땐 아래 메서드 호출이 필요함. 
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[UPDATE04]: getSnapshotBeforeUpdate(prevProps=${prevProps.color}, prevState=${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
    }

    /**
     *
     *  DOM 업데이트가 끝난 직후 호출 DOM 작업이 가능하다.
     *  변경 전의 state 값과 props값에 접근 가능
     * 
     * render호출 후 업데이트 된 다음(화면이 나오고, dom내 컬러도 바뀌고) 호출되는 메서드
     * 화면이 변경된 후 할일이 생긴다면 해당 메서드에서 처리해주면 된다. 
     * 
     * 예전에 있는 상태값 출력할 때 rgb 기반으로? 
     * 
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(`[UPDATE05]: componentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color}, snapshot=${snapshot})`);

        const hexColor = snapshot.replace(/[^\d,]/g, '').split(',').map(e => parseInt(e)).reduce((s, e) => s + ('0' + e.toString(16)).slice(-2), "#");
        //   "10, 20, 30" -> [10, 20, 30] -> reduce( '#' -> '#0a' -> '#0af5' -> '#0xf5ee')

        console.log(`[UPDATE05]: componentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color}, snapshot=${hexColor})`);
    }

    /**
     * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후!
     * 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는
     * 1. 이벤트 등록
     * 2. 타이머 설정
     * 3. 네트워크 통신
     * 등을 할 수 있다.
     * 
     * dom element를 쓸 경우 1번 과정은 제외.
     * -> timer설정 (네트워크 통신을 해당 과정에서 진행해야함) -> 화면에 컴포넌트가 리턴한 걸 뿌려야함. 
     */
    componentDidMount() {
        console.log('[MOUNT04]: componentDidMount()');
    }

    /**
     *  컴포넌트를 DOM에서 제거 할 때
     *  componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리멘트등을 제거(Clean-Up)
     *  작업을 한다.
     */
    componentWillUnmount() {
        console.log('[UNMOUNT]: componentWillUnmount()');
    }
}