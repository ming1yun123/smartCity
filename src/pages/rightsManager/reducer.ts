import immutable from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax'
import {Dispatch } from 'redux'
//////reducer 实例 /。////////////  每个闭环一个reducer 已被引入store 合并
enum roleDataType {
    load = 'set_userr_data_load',
    success = 'set_user_data_success',
    fail = 'set_user_data_fail',
}
const loadRoleData = (type:roleDataType,obj?:Object)=>({
    type,
    obj
});
type Action =  ReturnType<typeof loadRoleData>
export const requestRoleData = (value?:number)=>(dispatch:Dispatch)=>{
    dispatch(loadRoleData(roleDataType.load))
    ajax.get(API.USER_FINDUSER)
    .then(({data})=>{
        console.log(data.data);
        dispatch(loadRoleData(roleDataType.success,data.data))
    })
    .catch(error=>{
        dispatch(loadRoleData(roleDataType.fail))
        console.log(error)
    })
}
const initialState={
    'loadingStatues':'wait',
    'roleList':Array
}
const immutableState = immutable.fromJS(initialState)
export default (state = immutableState,action:Action)=>{
    switch (action.type) {
        case roleDataType.load:
            return state.setIn(['loadingStatues'],'loading')
        case roleDataType.success:
            const newState = state.setIn(['loadingStatues'],'success')
            console.log(newState);
            
            return newState.setIn(['roleList'],immutable.fromJS(action.obj))
        case roleDataType.fail:
            return state.setIn(['loadingStatues'],'fail')
          
            default:
           return state;
    }
}
