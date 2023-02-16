import React from "react";
import {Spinner} from "react-bootstrap";
import './loading.css';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  
  componentDidUpdate(prevProps){
    if (this.props.show !== prevProps.show)
      this.setState({show: this.props.show});
  }
  render() {
    return (
      <>
	{this.state.show ? (
     	 <div id="loading-backdrop">
       		 <Spinner animation="border" variant="primary" />
     	 </div>
	) : null }
      </>
    );
  }
}
