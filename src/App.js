import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          {/* client side routing allows a single page application to make use of browser "back" button*/}
          <Switch> 
            <Route exact path="/" component={Header} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
