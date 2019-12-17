import React,{Suspense} from  'react';
import { Layout } from 'antd';
import {BrowserRouter} from 'react-router-dom'
import renderRoutes from './routes/renderRoutes'
import {useSelector} from 'react-redux'
import routes from './routes'
import Login from './pages/common/login'
import Loding from './pages/common/loading'
import Header from './layout/header';
import Sider from './layout/slider';
import Breadcrumb from './layout/breadcrumb';
import { Switch, Route, Redirect } from "react-router";

const {  Content } = Layout;

const App: React.FC<{}> = function App(){
  const isLogin = useSelector(state=>(state as any).get('root').get('isLogin'));
  const role = useSelector(state=>(state as any).get('root').get('userInfo').get('role'));
    
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route render={()=>{
              if(!isLogin){
                return <Redirect to='/login'/>
              }else{
                  return <AppLayout/>;
              }
            }}/> 
        </Switch>
    </BrowserRouter>
  )
}


const AppLayout:React.FC<{}> = function AppLayout(){
  const role = useSelector(state=>(state as any).get('root').get('userInfo').get('role'));
  const permission = useSelector(state=>(state as any).getIn(['permission','data']))
  return (
<Layout>
      <Header />
      <Layout>
        <Sider role={role}/>
        
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 560,
            }}
          >
            <Suspense fallback={<Loding/>}>
              {renderRoutes(routes,role,permission)}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )

}

export default App;



