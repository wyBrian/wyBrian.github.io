import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import history from '../history'
import '../resources/css/App.css'
import StickyHeader from './StickyHeader'
import InformationPage from './information'
import MainPage from './mainpage'
import ContactPage from './contactme'
import ExperiencePage from './experience'
import InterestPage from './interests'
import BlogPage from './blogs'


const PrivateRoutes = () => 
  <Layout  
    style={{ 
      height: '100%',
      paddingTop: '80px',
      paddingBottom: '40px',
    }}>
    <StickyHeader />
    <Layout.Content>
      <Route exact path='/info' component={InformationPage}/>
      <Route exact path='/contactme' component={ContactPage}/>
      <Route exact path='/experience' component={ExperiencePage}/>
      <Route exact path='/interest' component={InterestPage}/>
      <Route exact path='/blog' component={BlogPage}/>
    </Layout.Content>
  </Layout>

const App = () =>
  <Router history={history}>
      <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/me' component={PrivateRoutes}/>
      </Switch>
  </Router>

export default App
