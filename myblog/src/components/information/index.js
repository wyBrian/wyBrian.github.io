import React from "react"

import { Avatar, Card, Col, Tabs } from 'antd'

const { TabPane } = Tabs

const tabs = [
  "Language",
  "User Interface",
  "Web Framework",
  "Database",
  "Middleware",
  "Algorithms",
  "Data Analysis"
]

const InformationPage = () => 
  <div style={{padding: '5vh 20vw', minHeight: '100%', fontFamily: 'Comic Sans MS', textAlign: 'center' }}> 
    <Card 
      title={
        <div style={{ minHeight: '10vh', minWidth: '30vw' }} >
          <div style={{fontSize: 40}}>Brian, Wang Yu</div>
          <p style={{paddingTop: 15, fontSize: 16}}>I am a Full Stack Software Development Engineer</p>
        </div>}
      bordered={false}
      hoverable={true}
      style={{ backgroundColor: '#f0f2f5', minHeight: '70vh' }} 
      bodyStyle={{ width:'100%', height:'100%'}}> 
      <Col span={8}>
        <div style={{fontSize: 20}}>About Me</div>
      </Col>
      <Col span={8}>
        <Avatar size={250} src="https://i.pinimg.com/originals/ad/30/d5/ad30d57f9cf19ff3f5515165fa355994.png" />
      </Col>
      <Col span={8}>
        <div style={{fontSize: 20}}>Details</div>
      </Col>
    </Card> 
    <Tabs>
      {tabs.map((tab, index)=>
        <TabPane tab={tab} key={index}>
          {tab}
        </TabPane>)}
    </Tabs>
  </div>

export default InformationPage


   
    
      // 
//  <div style={{padding: '30% 25% 15% 25%', width: '100%', height: '30%'}}></div> 