import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import history from '../history'
import StickyHeader from './StickyHeader'
import InformationPage from './information'
import MainPage from './mainpage'
import ContactPage from './contactme'
import ExperiencePage from './experience'
import InterestPage from './interests'
import BlogPage from './blogs'
import '../resources/css/App.css'


const PrivateRoutes = props => {
  return (
    <Layout  
      style={{ 
        minHeight: '100%',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}>
      <StickyHeader />
      <Layout.Content>
        <Route path={`${props.match.path}/info`} component={InformationPage}/>
        <Route path={`${props.match.path}/contactme`} component={ContactPage}/>
        <Route path={`${props.match.path}/experience`} component={ExperiencePage}/>
        <Route path={`${props.match.path}/interest`} component={InterestPage}/>
        <Route path={`${props.match.path}/blog`} component={BlogPage}/>
      </Layout.Content>
    </Layout>
  )
}


const App = () =>
  <Router history={history}>
      <Route exact path='/' component={MainPage}/>
      <Switch>
          <Route path='/home' component={PrivateRoutes}/>
      </Switch>
  </Router>

export default App
