import React,{useCallback} from 'react'
import './style.scss'
import {useParams}  from 'react-router'
import {List} from 'immutable'
import {useDispatch} from 'react-redux'
import {setPermission} from '../../../store/models/permission'

const permissionList :{
    [propName:string]:{
        id:string,
        value:string,
    }[]
} = {
    '旅行报社': [
        {id: '/backstate/home', value: '后台首页'},
        {id: '/backstate/personal', value: '个人中心'}
    ],
    '新闻': [
        {id: '/news/edit', value: '文章编辑'},
        {id: '/news/check', value: '文章审核'},
        {id: '/news/list', value: '文章列表'},
        {id: '/news/draft', value: '草稿箱'}
    ],
    '广告': [
        {id: '/ads/edit', value: '广告发布'},
        {id: '/ads/check', value: '广告审核'},
        {id: '/ads/list', value: '广告列表'},
        {id: '/ads/effect', value: '广告效果数据'}
    ],
    '评论': [
        {id: '/comments/list', value: '评论列表'},
        {id: '/comments/check', value: '评论审核'},
        {id: '/comments/effect', value: '评论分析'},
    ],
    '权限管理': [
        {id: '/rightsManager/addRole', value: '角色添加'},
        {id: '/rightsManager/addRights', value: '权限添加'},
        {id: '/rightsManager/edit/addRights', value: '选择权限'},
    ],
}

const rightsManagerAddRolePage :React.FC<{}>=function AnalysisTravel(){
    const dispatch = useDispatch();
    const demoAction= useCallback(()=>{
        dispatch(setPermission(List(['/ads/edit','/backstate/home','/news/edit'])));
    },[])
    
    return(
        <div>
            <h1 onClick={demoAction}>rightsManagerAdadRolePageasssssssssddddddddddd</h1>
        </div>
    )
}
export default rightsManagerAddRolePage