import React from "react"
import { Col, Card } from 'antd'

const MainPage = () => 
  <div> 
    <Col span={12}>
      <Card
        hoverable
        bordered={false}
        style={{marginLeft: '12%', height:'80%', width:'80%'}}
      >
        <Card.Meta 
          style={{textAlign: 'center'}}
          title="Yet Another Software Development Engineer" 
          description="Engineer Entrepreneur" 
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card
        hoverable
        bordered={false}
        style={{marginLeft: '8%', height:'80%', width:'80%'}}
        cover={<img alt="rh_bear" src='https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/10/2016_RadioheadLogo_Press_191016-1011x1024.png' />}
      >
        <Card.Meta 
          style={{textAlign: 'center'}}
          title="Yet Another Software Development Engineer" 
          description="Engineer Entrepreneur" 
        />
      </Card>
    </Col>
  </div>

export default MainPage