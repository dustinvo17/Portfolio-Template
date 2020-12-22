import {  Route, Switch } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import Projects from './pages/Projects';
import Header from './components/Header'
import Container from '@material-ui/core/Container'
import Banner from './components/Banner'
import Footer from './components/Footer'
function App() {
  return (
    <main>
      <Container maxWidth="lg">
      <Header/>
      <Banner  />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects" component={Projects} exact/>
      </Switch>
      <Footer/>
      </Container>
   
    </main>
  );
}

export default App;
