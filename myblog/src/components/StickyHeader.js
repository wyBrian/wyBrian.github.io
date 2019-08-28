import React from "react"
import { Layout, Menu, Avatar } from 'antd'
import { Link } from "react-router-dom";
import { menuItems } from '../defs'
import history from '../history'


const StickyHeader = () => {
  return (
    <Layout.Header style={
      { 
        textAlign: 'left', 
        position: 'fixed',
        zIndex: '100',
        width: '100%',
        height: '64px',
        top: 0 ,
        background: 'white'
      }}>
      <Avatar src="https://i.pinimg.com/originals/ad/30/d5/ad30d57f9cf19ff3f5515165fa355994.png" 
        style={{margin:'2vh', float:'left'}}
        onClick={()=>history.push('/')}/>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px', float:'right' }}
      >
        {menuItems.map(tag =>
            <Menu.Item key={tag.key}>
              {tag.key}
              <Link to={tag.domain} />
            </Menu.Item>)}
      </Menu>
    </Layout.Header>
  )
}

  

export default StickyHeader

