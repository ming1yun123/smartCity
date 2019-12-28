import React ,{useCallback,useMemo} from 'react'
import {useHistory} from 'react-router'
import { Layout, Menu, Icon } from 'antd';
import {adminSiderConfig} from '../../config/sider.config'
import useRouteInfo from '../../utils/useRouteInfo'
import './style.scss'
const { SubMenu } = Menu;
const { Sider } = Layout;
 

const AppSlider:React.FC<{role:string}> = function AppSlider(role){

  // console.log( useRouteInfo());
  const {ids} = useRouteInfo();
  const history = useHistory();
  // console.log(role);
  
  const SiderConfig = useMemo(()=>{
    if((role.role)==="admin"){
      return  adminSiderConfig;
    }else{
      return adminSiderConfig ;
    }
  },[adminSiderConfig,role]);

  const itemClickAciton = useCallback((path:string)=>{
    history.push(path);
  },[history])
    // console.log([ids[0]],[ids[1]]);
    
    return(
      <Sider width={200} style={{ background: '#fff',fontSize:'16px!important'  }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[ids[1]]}
        defaultOpenKeys={[ids[0]]}
        style={{ height: '100%',boxShadow:'0 0 10px #ddd'}}
      >
        {
          SiderConfig.map(configItem=>(
            <SubMenu
              key={configItem.id}
              style={{ borderBottom:'1px solid #ddd' }}
              title={
                <span>
                  <Icon type={configItem.icon} />
                  {configItem.root}
                </span>
              }
            >
              {
                configItem.children.map(item=>(
                  <Menu.Item
                  style={{ borderTop:'1px solid #eee' ,margin:0}}
                   key={item.id} onClick={()=>{
                    itemClickAciton(item.path);
                }}>{item.title}</Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
      </Menu>
    </Sider>
    )
}

export default AppSlider;