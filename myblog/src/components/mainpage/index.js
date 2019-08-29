import React from 'react'
import { Col, Card, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import mainStyle from "../../resources/css/MainPage.module.css"

const MainPage = () => 
    <div className={mainStyle.mainDiv}> 
      <Col span={12}>
        <Card hoverable bordered={false} style={{ margin: '5%', width:'84%' }}>
          <Card.Meta 
            style={{textAlign: 'center'}}
            title={<p style={{fontWeight: 'bold', fontSize: 28 }}>Brian, Wang Yu</p>}
            description={<p style={{fontStyle: 'italic'}}>Yet Another Software Development Engineer</p>} 
          />
        </Card>
        <div style={{ textAlign:'center' }}>
          <Card style={{ marginLeft: '20%', width:'40%' }}> <Link to='/home/info'> About Me </Link> </Card> 
          <br/>
          <Card style={{ marginLeft: '40%', width:'40%' }}> <Link to='/home/experience'> Experience </Link> </Card>
          <br/>
          <Card style={{ marginLeft: '20%', width:'40%' }}> <Link to='/home/interest'> Interests </Link> </Card>
          <br/>
          <Card style={{ marginLeft: '40%', width:'40%' }}> <Link to='/home/blog'> Blogs </Link> </Card>
        </div>
        <Card title="Connect With Me"  style={{margin: '5% 15%', width:'70%', textAlign: 'center'}}>
          <Col span={8}>
            <Button type="normal" onClick={()=>window.open('https://github.com/wyBrian')}> <Icon type="github" /> Github </Button>
          </Col>
          <Col span={8}>
            <Button type="normal" onClick={()=>window.open('https://www.linkedin.com/in/wang-yu-2155bba4/')}> 
              <Icon type="linkedin" /> Linkedin 
            </Button>
          </Col>
          <Col span={8}>
            <Button type="normal" onClick={()=>window.open('https://medium.com/@wangyu121x')}> 
              <Icon type="medium" /> Medium 
            </Button>
          </Col>
        </Card>
      </Col>
      <Col span={12}>
        <Card
          hoverable
          bordered={false}
          style={{margin: '10%', height:'80%', width:'80%'}}
          cover={<img alt="rh_bear" src='https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/10/2016_RadioheadLogo_Press_191016-1011x1024.png' />}
        >
          <Card.Meta 
            style={{textAlign: 'center', fontStyle: 'italic'}}
            description="Hier bin ich Mensch, hier darf ich's sein." 
          />
        </Card>
      </Col>
    </div>

export default MainPage