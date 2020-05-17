import React from "react";
import {
  List,
  Avatar,
  Space,
  Button,
  message,
  Comment,
  Form,
  Input,
  Rate,
} from "antd";
import "../../../config/config";
import moment from "moment";

const { TextArea } = Input;

const IconText = ({ icon, text }) => <div>{text}</div>;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        发表评论
      </Button>
    </Form.Item>
  </div>
);

export default class Mytask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      comments: [],
      submitting: false,
      value: "",
    };
  }

  delete = (flag) => {
    global.draft = global.draft.filter((item) => item.title != flag);
    this.setState({
      status: !this.state.status,
    });
    message.success("标题为" + `${flag}` + "草稿删除成功哦");
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    let username = JSON.parse(localStorage.user);

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: username[0].username,
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={global.draft}
          footer={
            <div>
              <b>草稿列表</b> footer part
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText text="156" key="list-vertical-star-o" />,
                <IconText text="156" key="list-vertical-like-o" />,
                <IconText text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
              <div style={{ marginLeft: 600, marginTop: 40 }}>
                <Button
                  type="primary"
                  onClick={this.delete.bind(this, item.title)}
                >
                  删除此条草稿
                </Button>
              </div>
              <div>
                <Rate />
              </div>
            </List.Item>
          )}
        />
        ,
      </div>
    );
  }
}
