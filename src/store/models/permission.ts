import immutable ,{List} from 'immutable'

enum SetPermission{
    set= 'set_permission'
}

export const setPermission = (value:List<string>)=>({
    type:SetPermission.set,
    value,
})

export type Action = ReturnType<typeof setPermission>;

const inintialState ={
    data:['/backstate/home','/news/edit']
}

export default (state = immutable.fromJS(inintialState),action:Action)=>{
    switch (action.type){
        case SetPermission.set:
            return state.set('data',action.value);
        default:
            return state;
    }
}