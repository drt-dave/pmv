import React from "react";
import { Container, Row } from "react-bootstrap";


import { request } from '../helper/helper';
import './eventos.css';

export default class EventosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    request
      .get('/empleados')
      .then((response) => {
	console.log(response.data);
      })
      .catch((err) => {
	console.error(err);
      });
  } 
  render(){
    return (
      <Container id="empleados-buscar-container">
	<Row>
	  <h1>Buscar evento</h1>
	</Row>
      </Container>
    );
  }
}
