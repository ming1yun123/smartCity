
import immutable from 'immutable'
import ajax from '../../ajax'
import API from '../../ajax/api'
import { Dispatch } from 'redux';

enum LoginType{
    load = 'login_load',
    success = 'login_success',
    fail = 'login_fail'
}

const loginAction = (type:LoginType,value?:any)=>({
    type,
    value 
})

type Action = ReturnType<typeof loginAction>

// 发送登录的事件
export const requestLogin = (username:string,password:string)=>(dispatch:Dispatch)=>{
    dispatch(loginAction(LoginType.load))
    console.log('1');
    
    ajax.post(API.LOGIN_API,{
        username:username,
        password:password
    })
    .then(result=>{
        console.log(loginAction(LoginType.success,result.data.data));
        
        dispatch(loginAction(LoginType.success,result.data.data));
    })
    .catch(error=>{
        dispatch(loginAction(LoginType.fail));
    })
}


const initialState = {
    locale:'zhCN',
    isLogin:false,
    status:'waiting',
    userInfo:{}
}

export default (state = immutable.fromJS(initialState), action:Action)=>{
    switch (action.type) {
        case LoginType.load:
            return state.setIn(['status'],'loading')
        case LoginType.success:
            console.log(action.value);
            const  newState =  state.setIn(['status'],'success')
            return newState.setIn(['userInfo'],immutable.fromJS(action.value))
        case LoginType.fail:
            return state.setIn(['status'],'fail')
        default:
            return state;
    }
}