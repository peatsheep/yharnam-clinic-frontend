import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: []
    };
  }
    
  componentDidMount() {
    fetch("http://localhost:5000/weapons")
    .then(response => response.json())
    .then(weapons => this.setState({weapons: weapons}))
  }

  render() {
    const weaponRows = this.state.weapons.map(weapon => (
      <tr key={weapon.name}>
        <td>{weapon.name}</td>
        <td>{weapon.str_req === 0 ? "-" : weapon.str_req}</td>
        <td>{weapon.skl_req === 0 ? "-" : weapon.skl_req}</td>
        <td>{weapon.blt_req === 0 ? "-" : weapon.blt_req}</td>
        <td>{weapon.arc_req === 0 ? "-" : weapon.arc_req}</td>
      </tr>
    ));

    return (
      <div className="Weapons">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Strength Requirement</th>
              <th>Skill Requirement</th>
              <th>Bloodtinge Requirement</th>
              <th>Arcane Requirement</th>
            </tr>
          </thead>
          <tbody>
            {weaponRows}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Weapons;