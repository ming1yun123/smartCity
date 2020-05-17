import React from "react";
import {
  Collapse,
  Card,
  Calendar,
  Badge,
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
  message,
} from "antd";

import "./style.scss";


const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 16,
  },
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      revisible: false,
      username: "",
      password: "",
      user:[],
    };
  }

  //   对话框的回调

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    if (!this.state.username || !this.state.username) {
      message.info("账户或密码不能为空哦");
      return;
    }

    let user = JSON.parse(localStorage.user)
    console.log('user',user);

    // 判断用户登陆的账户和密码是否正确
    console.log('答应',user[0].username);
    console.log('输入的账号',this.state.username);
    console.log(!user[0].username == this.state.username);
    
    if(user[0].username != this.state.username || user[0].password != this.state.password ){
        console.log('账号密码错误');
        
        message.info("账号或者密码错误哦");
        return
    }
    
    this.setState({
      visible: false,
    });

    this.props.history.push('/backstate/home')
  };

  rehandleOk = (e) => {
    if (!this.state.username || !this.state.username) {
      message.info("账户或密码不能为空哦");
      return;
    }

    let user = [];
    user.push({ username: this.state.username, password: this.state.password })
    localStorage.setItem('user', JSON.stringify(user));



    
    this.setState({
      revisible: false,
      visible: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
      revisible: true,
      password:'',
      username:''
    });
  };

  rehandleCancel = (e) => {
    this.setState({
      visible: true,
      revisible: false,
      password:'',
      username:''
    });
  };

  username = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  password = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div className="page">
        <Modal
          title="登陆"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={800}
          okText={"登陆"}
          cancelText={"注册"}
          maskClosable={false}
        >
          <div>
            <Form
              {...layout}
              name="basic"
              initialvalues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input onChange={this.username} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password onChange={this.password} />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuepropname="checked"
              >
                <Checkbox>记住我</Checkbox>
              </Form.Item>
            </Form>
          </div>
        </Modal>

        <Modal
          title="注册"
          visible={this.state.revisible}    
          onOk={this.rehandleOk}
          onCancel={this.rehandleCancel}
          okText={"注册"}
          cancelText={"登陆"}
          maskClosable={false}
        >
          <div>
            <Form
              {...layout}
              name="basic"
              initialvalues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input onChange={this.username} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password onChange={this.password} />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuepropname="checked"
              >
                <Checkbox>记住我</Checkbox>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
