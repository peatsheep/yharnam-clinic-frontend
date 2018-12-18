import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Weapons from './components/Weapons.js'
import Attire from './components/Attire.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </head>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Weapons">
            <Weapons />
          </Tab>
          <Tab eventKey={2} title="Attire">
            <Attire />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;