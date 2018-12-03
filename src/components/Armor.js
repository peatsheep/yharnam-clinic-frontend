import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Armor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      armor: []
    };
  }
    
  componentDidMount() {
    fetch("http://localhost:5000/armor")
    .then(response => response.json())
    .then(armor => this.setState({armor: armor}))
  }

  render() {
    const armorRows = this.state.armor.map(armor => (
      <tr key={armor.name}>
        <td>{armor.name}</td>
        <td>{armor.type}</td>
        <td>{armor.set}</td>
        <td>{armor.phys_def}</td>
        <td>{armor.blunt_def}</td>
        <td>{armor.thrust_def}</td>
        <td>{armor.blood_def}</td>
        <td>{armor.arc_def}</td>
        <td>{armor.fire_def}</td>
        <td>{armor.bolt_def}</td>
        <td>{armor.slow_psn_res}</td>
        <td>{armor.rapid_psn_res}</td>
        <td>{armor.frenzy_res}</td>
        <td>{armor.beasthood}</td>
      </tr>
    ));

    return (
      <div className="Armor">
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
            {armorRows}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Armor;