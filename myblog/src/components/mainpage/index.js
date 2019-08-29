import React from "react"
import { Col, Card, Button, Icon } from 'antd'

// backgroundColor:'#dfe0e4'
const MainPage = () => 
    <div style={{height: '100%', width: '100%', backgroundImage:'https://www.keuringvooru.nl/wp-content/uploads/2016/08/grey-background-facebook-3-md.png', fontFamily: 'Comic Sans MS'}}> 
      <Col span={12}>
        <Card
          hoverable
          bordered={false}
          style={{ margin: '10%', width:'84%' }}
        >
          <Card.Meta 
            style={{textAlign: 'center'}}
            title={<p style={{fontWeight: 'bold', fontSize: 28 }}>Brian, Wang Yu</p>}
            description={<p style={{fontStyle: 'italic'}}>Yet Another Software Development Engineer</p>} 
          />
        </Card>
        <Card style={{ marginLeft: '20%', width:'40%'}}></Card>
        <br/>
        <Card style={{ marginLeft: '40%', width:'40%'}}></Card>
        <br/>
        <Card style={{ marginLeft: '20%', width:'40%'}}></Card>
        <br/>
        <Card style={{ marginLeft: '40%', width:'40%'}}></Card>
        <Card title="Connect With Me"  style={{margin: '5% 15%', width:'70%', textAlign: 'center'}}>
          <Col span={8}>
            <Button type="normal"> <Icon type="github" /> Github </Button>
          </Col>
          <Col span={8}>
            <Button type="normal"> <Icon type="linkedin" /> Linkedin </Button>
          </Col>
          <Col span={8}>
            <Button type="normal"> <Icon type="medium" /> Medium </Button>
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