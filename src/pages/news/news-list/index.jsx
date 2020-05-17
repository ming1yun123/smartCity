import React from "react";
import { Collapse, Card, Calendar, Badge, Carousel,List, Avatar, Button, Skeleton } from "antd";
import axios from 'axios'

// import reqwest from 'reqwest';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;


export default class Mytask extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.data.results,
        list: res.data.results,
      });
    });
  }

  getData = callback => {
    // reqwest({
    //   url: fakeDataUrl,
    //   type: 'json',
    //   method: 'get',
    //   contentType: 'application/json',
    //   success: res => {
    //     callback(res);
    //   },
    // });

    axios.get(fakeDataUrl,{
        type: 'json',
        method: 'get',
        contentType: 'application/json',
    }).then(function (res) {
        console.log('res',res);
        
        callback(res);
    }).catch(function (error) {
        console.log(error);
    })
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.data.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={{background:'green',height:300}}>1</h3>
          </div>
          <div>
            <h3 style={{background:'red',height:300}}>2</h3>
          </div>
          <div>
            <h3 style={{background:'black',height:300}}>3</h3>
          </div>
          <div>
            <h3 style={{background:'yellow',height:300}}>4</h3>
          </div>
        </Carousel>

        <div style={{marginTop:80}}>
        <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name.first}</a>}
                description="新闻列表的详细信息"
              />
              <div>新闻标题</div>
            </Skeleton>
          </List.Item>
        )}
      />
        </div>
      </div>
    );
  }
}
