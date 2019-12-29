
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
    ajax.post(API.LOGIN_API,{
        username:username,
        password:password
    })
    .then(result=>{
        console.log(1);
        dispatch(loginAction(LoginType.success,result.data.data));
    })
    .catch(error=>{
        console.log(error);
        dispatch(loginAction(LoginType.fail));
    })
}


const initialState = {
    locale:'zhCN',
    isLogin:true,
    status:'waiting',
    userInfo:{
        password:'',
        power:[],
        role:'admin',
        username:''
    }
}

export default (state = immutable.fromJS(initialState), action:Action)=>{
    switch (action.type) {
        case LoginType.load:
            return state.setIn(['status'],'loading')
        case LoginType.success:
            const  newState = state.setIn(['isLogin'],true).setIn(['status'],'success')
            return newState.setIn(['userInfo'],immutable.fromJS(action.value))
        case LoginType.fail:
            return state.setIn(['status'],'fail')
        default:
            return state;
    }
}