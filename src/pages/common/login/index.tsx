import React,{useCallback,useRef, useState} from 'react'
import { message, Button } from 'antd';
import {useDispatch,useSelector} from 'react-redux'
import {requestLogin} from '../../../store/models/roots';
import './style.scss'


const IsLogin :React.FC<{}>=function IsLogin(){
    const loginRef = useRef<HTMLDivElement>(null!);
    const boxRef = useRef<HTMLInputElement>(null!);
    const userRef = useRef<HTMLInputElement>(null!);
    const passRef = useRef<HTMLInputElement>(null!);

    let state = useSelector(state=>(state as any).getIn(['root']))

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const dispatch = useDispatch();
    
    

    const handleChange = useCallback(()=>{
        loginRef.current.classList.toggle('open');
    },[])
    // 账号同步
    const usernameChange = useCallback((ev)=>{
        setusername(ev.target.value)
    },[username])
    // 密码同步
    const passwordChange = useCallback((ev)=>{
        setpassword(ev.target.value)
        console.log(password);
    },[password])


    // 点击登录
    const login = useCallback(()=>{
        // 判断是否勾选协议
        if(!boxRef.current.checked){
            message.info('请同意我们的协议');
            return
        }
        // 判断账户或密码不能为空
        if(!username && !password){
            message.info('账户或密码不能为空');
            return
        }
        // 请求服务器
        dispatch(requestLogin(username,password))

        

        setTimeout(()=>{
            console.log(state.toJS());
        },2000)


    },[username,password])



    
    return(
        <div className="login-wrapper" ref={loginRef}>
            <div className="login-left">
                <img src="http://res.cloudinary.com/dzqowkhxu/image/upload/v1513679279/bg-login_bxxfkf.png"/>
                <div className="h1" onClick = {handleChange}>Enter the Nebula</div>
            </div>

            <div className="login-right">
                <div className="h2">login</div>

                <div className="form-group">
                    <input type="text" id="full-name" placeholder="Username" onChange={usernameChange} value={username}  ref={userRef}/>
                    <label>Username</label>    
                </div>

                <div className="form-group">
                    <input type="password" id="Password" placeholder="Password" onChange={passwordChange} value={password} ref={passRef}/>
                    <label>Password</label>    
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" ref={boxRef}  />
                    <div className="text-checkbox">I agree with the terms of service</div>
                </div> 

                <div className="button-area">
                    <button className="btn btn-secondary" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default IsLogin