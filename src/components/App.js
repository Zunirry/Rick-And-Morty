import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import People from '../pages/People'
import Footer from '../pages/Footer'
import NotFound from '../pages/NotFound'


function App() {
  

  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people/:id" component={People} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
