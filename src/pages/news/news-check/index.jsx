import React from "react";
import {
  Collapse,
  Card,
  Calendar,
  Badge,
  Form,
  Input,
  InputNumber,
  Button,
  message
} from "antd";
import "../../../config/config";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default class Mytask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      href: "http://ant.design",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      title: "",
      name: "",
      smallTitle: "",
      content: "",
    };
  }

  onFinish = (values) => {
    console.log(values);
  };

  handleSubmit = (e) => {
      console.log(this.state);
      
      if(this.state.title == '' || this.state.name =='' || this.state.smallTitle == '' || this.state.content == '') {
          message.info('请输入完整的新闻发布信息哦')
          return
      }
    global.listData.push(this.state)
    message.success('新闻发布成功哦！请到新闻列表中查看哦')
    this.props.history.push('/news/edit')
  };

  handleDraft = (e) => {
    console.log(this.state);
    
    if(this.state.title == '' || this.state.name =='' || this.state.smallTitle == '' || this.state.content == '') {
        message.info('请输入完整的新闻发布信息哦')
        return
    }
  global.draft.push(this.state)
  message.success('成功加入草稿箱哦！请到草稿列表中查看哦')
  this.props.history.push('/news/draft')
};

  

  //   触发回调
  name = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  title = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  smallTitle = (e) => {
    this.setState({
        smallTitle: e.target.value,
    });
  };

  content = (e) => {
    this.setState({
        content: e.target.value,
    });
  };

  

  render() {
    return (
      <div>
        <Form {...layout} name="nest-messages">
          <Form.Item
            name={["user", "name"]}
            label="用户名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={this.name} />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="原标题"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input onChange={this.title} />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="新闻团队人数"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="文章副标题">
            <Input onChange={this.smallTitle} />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="文章内容">
            <Input.TextArea onChange={this.content} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleSubmit}
            >
              发布文章
            </Button>
            {'   '}
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleDraft}
            >
              加入草稿箱
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
