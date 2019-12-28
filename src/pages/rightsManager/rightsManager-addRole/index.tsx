import React,{useCallback,useEffect,useState,useMemo} from 'react'
import { Select,Button,Table, Divider, Tag,Modal,message} from 'antd';   
import {requestRoleData} from '../reducer'
import {useDispatch,useSelector} from 'react-redux'
import './style.scss'
import API from '../../../ajax/api'
import ajax from '../../../ajax' 
const { confirm } = Modal;
const { Option  } = Select;

type  dataT  = {
  key: number;
  id: number;
  nickName: string;
  desc: string;
  status: string[];
}[]

const rightsManagerAddRole :React.FC<{}>=function AnalysisTravel(){
    const [selectrole, setselectrole] = useState('writer');
    const [pageSize, setpageSize] = useState(5);
    const [visible, setvisible] = useState(false);
    const [confirmLoading, setconfirmLoading] = useState(false);
    const [modalTiele, setmodalTiele] = useState('');
    const [nickname, setnickname] = useState('');
    const [desc, setdesc] = useState('');
    const [role, setrole] = useState('writer');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [oktype, setoktype] = useState('add');
    const [editID, seteditID] = useState('');
    let loading = useSelector(state=>(state as any).getIn(['rightsManager','loadingStatues']))
    let dataFromRedux = useSelector(state=>(state as any).getIn(['rightsManager','roleList']))
    
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '昵称',
        dataIndex: 'nickName',
        key: 'nickName',
      },
      {
        title: '角色描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '角色名称',
        key: 'status',
        dataIndex: 'status',
        render:( tags:string[]) => (
          <span>
            {tags.map(tag => {
              let color ='green';
              if (tag === '已过期') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text:any, record:any) => {
          return (
            <span>
              <a onClick={()=>editRole(record.key)}>编辑 {record.name}</a>
                <Divider type="vertical" />
              <a onClick={()=>deleteRole(record.key)}>删除</a>
            </span>
          )
        },
      },
    ];

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(requestRoleData())
    }, []);
    //role data
    const add = useMemo<dataT[]|undefined>(()=>{
        switch (loading) {
          case 'success':
              return  dataFromRedux.toJS().map((item:any,index:number)=>{
                return {
                      key: item._id,
                      id: index,
                      nickName: item.Nickname,
                      desc: item.des,
                      status: [item.role==='writer'?'记者':item.role==='admin'?'管理员':'审核员'],
                  }
              })
          default:
            return undefined
        }
    },[loading])
    
    //新增  方法
    const showModal = useCallback(()=>{
      setoktype('add')
      setmodalTiele('新增角色')
      setvisible(true); 
    },[])
    //编辑方法

    //add role action   
    const handleOk  = useCallback(()=>{

      if(!nickname){
        message.error('请输入用户名');
        return;
      }
      if(!username){
        message.error('请输入手机号');
        return;
      }
      if(!password){
        message.error('请输入密码');
        return;
      }
      if(!desc){
        message.error('请输入必要描述');
        return;
      }
      setconfirmLoading(true);
      const info = {
        Nickname:nickname,
        username,
        password,
        role,
        des:desc,
        power:[]
        }
        console.log(info);
        
        if(oktype==='edit'){
          console.log({id:editID,...info});
          
          ajax.post(API.USER_EDIT_ROLE,{id:editID,...info})
          .then((res)=>{
            console.log(res);
            
            setnickname('')
            setdesc('')
            setrole('')
            setusername('')
            setpassword('')
            setvisible(false);
            setconfirmLoading(false);
            dispatch(requestRoleData());
          })
          .catch((err)=>{
            console.log(err);
          }) 
        }else{

          ajax.post(API.USER_ADDUSER,info)
          .then((res)=>{
            setnickname('')
            setdesc('')
            setrole('')
            setusername('')
            setpassword('')
            setvisible(false);
            setconfirmLoading(false);
            dispatch(requestRoleData());
          })
          .catch((err)=>{
            console.log(err);
          })  
        }
  
    },[nickname,desc,password,username,role])
      //取消添加
    const handleCancel  = useCallback(()=>{
      setvisible(false);
    },[])
    //编辑信息///////////////////////////////////////////////////////

    const editRole = useCallback((key:string)=>{
      seteditID(key)
      setoktype('edit');
      let editRoleData = dataFromRedux.toJS().filter((item:any)=>{
        return item._id === key
      })
      setmodalTiele('编辑角色')
      setvisible(true); 
      setnickname(editRoleData[0].Nickname)
      setdesc(editRoleData[0].des)
      setrole(editRoleData[0].role)
      setusername(editRoleData[0].username)
      setpassword(editRoleData[0].password)
      
    },[dataFromRedux])

    const deleteRole = useCallback((key:string)=>{
      seteditID(key)
      let editRoleData = dataFromRedux.toJS().filter((item:any)=>{
        return item._id === key
      })
      console.log(editRoleData);
      return confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });

    },[dataFromRedux])

    ///page size
    const onShowSizeChange = useCallback((current, pageSize)=>{
        console.log(current, pageSize);
        setpageSize(pageSize);
    },[])

    
    //筛选框role action
    const handleSelectRoleChange = useCallback((value)=>{
      console.log(`selected ${value}`);
      setselectrole(value);
    },[]);
    //role acction
    const handleRoleChange = useCallback((value)=>{
        console.log(`selected ${value}`);
        setrole(value);
    },[]);

    //nickname action
    const nickNameAction= useCallback((ev)=>{
      setnickname(ev.target.value)
    },[nickname])

    //desc action
    const descAction= useCallback((ev)=>{
      setdesc(ev.target.value)
    },[desc])
    //username action
    const usernameAction= useCallback((ev)=>{
      setusername(ev.target.value)
    },[desc])
    
    //password acttion
    const passwordAction= useCallback((ev)=>{
      setpassword(ev.target.value)
    },[desc])


    return(
        <div className="rightsManagerAddRole">
            <div className="selectBox">
                <div>
                    <span>角色名称：</span> 
                    <Select defaultValue="记者" style={{ width: 120 }} onChange={handleSelectRoleChange}>
                        <Option value="writer">记者</Option>
                        <Option value="checker">审核员</Option>
                        <Option value="admin">管理员</Option>
                    </Select>
                    <span className="whiteSpace2"></span>       
                    <Button type="primary">查询</Button>
                </div>
                <div>
                    <Button type="primary" onClick={showModal}>新增</Button>
                    <span className="whiteSpace2"></span>
                    <Button type="primary">导出</Button>
                    <span className="whiteSpace2"></span>
                    <span className="whiteSpace2"></span>

                </div>
            </div>

            <div className="whiteSpace3"></div>

            <Table columns={columns} dataSource={add} bordered={true} loading={ loading==='success'?false:true} pagination={{
                                                   pageSize: pageSize,
                                                   total:add?add.length:1,
                                                   pageSizeOptions:['5','10','15'],
                                                   showSizeChanger:true,
                                                   onShowSizeChange:onShowSizeChange,
                                                    }}/>
            <div className="whiteSpace3"></div>


            <Modal
              title={modalTiele}    
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              centered={true}
              width={330}
              // bodyStyle={{textAlign:'center'}}
            >
                <div className="modal">
                  <div className="modal-role">
                    <span className="title">昵称：</span>  <input type="text" value={nickname} onChange={nickNameAction}/>
                  </div>
                  <div className="modal-role">
                    <span className="title">手机号：</span>  <input type="text" value={username} onChange={usernameAction}/>
                  </div>
                  <div className="modal-role">
                    <span className="title">密码：</span>  <input type="text" value={password} onChange={passwordAction}/>
                  </div>
                  <div className="modal-role">
                    <span>角色名称:</span>  
                    <Select defaultValue="记者" style={{ width: 200 }} onChange={handleRoleChange}>
                        <Option value="writer">记者</Option>
                        <Option value="checker">审核员</Option>
                        <Option value="admin">管理员</Option>
                    </Select>
                    
                  </div>                                    
                  <div className="modal-desc">
                    <span className="title">角色描述：</span> <textarea value={desc} onChange={descAction} cols={30} rows={10}></textarea>
                  </div>
                </div>
            </Modal>
        </div>
    )
}
export default rightsManagerAddRole


