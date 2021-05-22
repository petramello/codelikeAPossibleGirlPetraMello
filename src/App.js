import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from "./containers/Home";
import TimeLine from "./containers/TimeLine";
import Swot from "./containers/Swot";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop>
              <Layout hideArrowPaths={['/contato']}>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/timeline" exact component={TimeLine} />
                      <Route path="/swot" exact component={Swot} />
                  </Switch>
              </Layout>
        </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
