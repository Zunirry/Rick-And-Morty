import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import Footer from '../pages/Footer'
import NotFound from '../pages/NotFound'
import Modal from '../modal/Modal'

function App() {
  

  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modal/:id" component={Modal} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
