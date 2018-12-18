import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Attire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attire: []
    };
  }
    
  componentDidMount() {
    fetch("http://localhost:5000/attire")
    .then(response => response.json())
    .then(attire => this.setState({attire: attire}))
  }

  render() {
    const attireRows = this.state.attire.map(attire => (
      <tr key={attire.name}>
        <td>{attire.item_name}</td>
        <td>{attire.item_type}</td>
        <td>{attire.set}</td>
        <td>{attire.phys_def}</td>
        <td>{attire.blunt_def}</td>
        <td>{attire.thrust_def}</td>
        <td>{attire.blood_def}</td>
        <td>{attire.arc_def}</td>
        <td>{attire.fire_def}</td>
        <td>{attire.bolt_def}</td>
        <td>{attire.slow_psn_res}</td>
        <td>{attire.rapid_psn_res}</td>
        <td>{attire.frenzy_res}</td>
        <td>{attire.beasthood}</td>
      </tr>
    ));

    return (
      <div className="attire">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Set</th>
              <th>Physical Defense</th>
              <th>Blunt Defense</th>
              <th>Thrust Defense</th>
              <th>Bloodtinge Defense</th>
              <th>Arcane Defense</th>
              <th>Fire Defense</th>
              <th>Bolt Defense</th>
              <th>Slow Poisin Resistance</th>
              <th>Rapid Poisin Resistance</th>
              <th>Frenzy Resistance</th>
              <th>Beasthood</th>
            </tr>
          </thead>
          <tbody>
            {attireRows}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Attire;