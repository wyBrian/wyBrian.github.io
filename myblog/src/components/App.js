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

const App = () =>
  <Router history={history}>
    <Layout  style={
      { 
        height: '100%',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}>
        <StickyHeader />
        <Layout.Content>
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/info' component={InformationPage}/>
            <Route path='/contactme' component={ContactPage}/>
            <Route path='/experience' component={ExperiencePage}/>
            <Route path='/interest' component={InterestPage}/>
            <Route path='/blog' component={BlogPage}/>
          </Switch>
        </Layout.Content>
    </Layout>
  </Router>

export default App
