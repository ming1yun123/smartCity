import React,{useCallback,useState} from 'react'
import './style.scss'
import Logo from '../../assets/logo.png'
import { Layout, Menu, Avatar,Modal } from 'antd';
import {useHistory} from 'react-router'
const { Header } = Layout;

const AppHeader:React.FC<{}> = function AppHeader(){
    let history = useHistory();
    const [visible, setvisible] = useState(false);
    const ToUserCenterAction = useCallback(()=>{
      history.push('/backstate/personal');
    },[])

    const showModal =  useCallback(() => {
      
      setvisible(true)
    },[])

    
    const handleOk = useCallback((e)=>{
      history.push('/')
      setvisible(false)
    },[]);

    const handleCancel = useCallback((e)=>{
      console.log(e);
      setvisible(false)
    },[]);

    return(
        <Header className="app-header">
        <div className="logo">
          <img src={Logo} alt=""/>
          <p>智慧报社后台管理系统</p>
        </div>
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Avatar className="userImg" style={{ backgroundColor: '#87d068' ,paddingLeft:'9px',marginRight:'10px'}} icon="user" />
            <span className="title">管理员</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={ToUserCenterAction}>个人中心</Menu.Item>
          <Menu.Item key="3" onClick={showModal}>退出</Menu.Item>
        </Menu>


        <Modal
          centered={true}
          title="退出登录"
          visible={visible}
          bodyStyle={{textAlign: 'center',fontSize:'16px'}}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="确认"
          cancelText="取消"
          
        >
          <p>确认要退出登陆吗</p>
        </Modal>
      </Header>
    )
}

export default AppHeader;