import React from "react";
import {
  Collapse,
  Card,
  Calendar,
  Badge,
  Statistic,
  Row,
  Col,
  Typography,
  Divider,
  Timeline,
} from "antd";

// import { ClockCircleOutlined } from "@ant-design/icons";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const { Title, Paragraph, Text } = Typography;

export default class Mytask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Countdown
              title="个人工作时长倒计时"
              value={deadline}
              format="HH:mm:ss:SSS"
            />
          </Col>
        </Row>
        <Typography>
          <Title>Introduction</Title>
          <Paragraph>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph>
            After massive project practice and summaries, Ant Design, a design
            language for background applications, is refined by Ant UED Team,
            which aims to
            <Text strong>
              uniform the user interface specs for internal background projects,
              lower the unnecessary cost of design differences and
              implementation and liberate the resources of design and front-end
              development
            </Text>
            .
          </Paragraph>
          <Title level={2}>Guidelines and Resources</Title>
          <Paragraph>
            We supply a series of design principles, practical patterns and high
            quality design resources (<Text code>Sketch</Text> and{" "}
            <Text code>Axure</Text>), to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <a href="/docs/spec/proximity">Principles</a>
              </li>
              <li>
                <a href="/docs/pattern/navigation">Patterns</a>
              </li>
              <li>
                <a href="/docs/resource/download">Resource Download</a>
              </li>
            </ul>
          </Paragraph>

          <Divider />

          <Title>介绍</Title>
          <Paragraph>
            蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
          </Paragraph>
          <Paragraph>
            随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
            Ant Design。基于<Text mark>『确定』和『自然』</Text>
            的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
            <Text strong>更好的用户体验</Text>。
          </Paragraph>
          <Title level={2}>设计资源</Title>
          <Paragraph>
            我们提供完善的设计原则、最佳实践和设计资源文件（
            <Text code>Sketch</Text> 和<Text code>Axure</Text>
            ），来帮助业务快速设计出高质量的产品原型。
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <a href="/docs/spec/proximity">设计原则</a>
              </li>
              <li>
                <a href="/docs/pattern/navigation">设计模式</a>
              </li>
              <li>
                <a href="/docs/resource/download">设计资源</a>
              </li>
            </ul>
          </Paragraph>
        </Typography>
        <div>
            <h2 style={{marginLeft:300,marginBottom:100}}>个人的工作历程</h2>
          <Timeline mode="alternate">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Timeline.Item>
            <Timeline.Item color="red">
              Network problems being solved 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Timeline.Item>
            <Timeline.Item color="red">
              Network problems being solved 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          </Timeline>
          ,
        </div>
      </div>
    );
  }
}
