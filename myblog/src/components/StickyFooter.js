import React from "react"
import { Layout } from 'antd';

const { Footer } = Layout;


const StickyFooter = () => 
  <Footer style={{ 
      textAlign: 'center', 
      width: '100%',
      backgroundColor: 'rgba(200,200,220,1)',
      color: 'rgba(0,0,0,.9)',
      zIndex: '100',
      position: 'fixed',
      bottom: 0 
    }}>
    Iyengar Yoga Studio ©2019 All Rights Reserved
  </Footer>

export default StickyFooter