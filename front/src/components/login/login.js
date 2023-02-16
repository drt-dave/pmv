import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";
import app from "../../app.json";
import {isNull} from 'util';
import Cookies from 'universal-cookie'
import { calculaExracionSesion } from '../helper/helper';
import Loading from '../loading/loading';

const { APIHOST } = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    this.setState({loading: true});
    
    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
      .then((response) => {
	if(isNull(response.data.token)) {
	  alert('Usuario y/o Contraseña inválidos');
	}else{
	  cookies.set('_s', response.data.token, {
	    path: '/',
	    expires: calculaExracionSesion(),
	  });
	  this.props.history.push(('/eventos'));
	  window.location.reload();
	}
	this.setState({loading: false});
      })
      .catch((error) => {
	console.log(error);
	this.setState({loading: false});
      }); 
  }

  render() {
    return (
      <Container id="login-container">
	<Loading show={this.state.loading}/>
	<Row>
	  <Col>
	    <Row>
	      {" "}
	      <h2> Iniciar Sesión </h2>
	    </Row>
	    <Col
	      sm="12"
	      xs="12"
	      md={{ span: 4, offset: 4 }}
	      lg={{ span: 4, offset: 4 }}
	      xl={{ span: 4, offset: 4 }}
	    >
	      <Form>
		<Form.Group>
		  <Form.Label> Usuario </Form.Label>
		  <Form.Control
		    placeholder=":)"
		    onChange={(e) => this.setState({ usuario: e.target.value })}
		  />{" "}
		</Form.Group>{" "}
		<Form.Group>
		  <Form.Label> Contraseña </Form.Label>
		  <Form.Control
		    type="password"
		    placeholder="*****"
		    onChange={(e) => this.setState({ pass: e.target.value })}
		  />{" "}
		</Form.Group>
		<Button
		  variant="primary"
		  onClick={() => {
		    this.iniciarSesion();
		  }}
		>
		  vamos!
		</Button>
	      </Form>
	    </Col>
	  </Col>
	</Row>
      </Container>
    );
  }
}
