import React, { Component } from 'react';
import { Body, Spinner } from 'native-base';
import {Text} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

console.disableYellowBox = true; // ????
class Setup extends Component {

  componentDidMount() {
    // this.timeout = setTimeout(() => { // doesn't work ..
      if(this.props.data.length !== 0) Actions.home({ data: this.props.data });  
    // }, 9500)
  }

  componentWillUnmount() {
    clearTimeout(timeout);
  }

  render() {
    return (
      <Body>
        <Text>This is setup page!</Text>
        <Text>{`This is data from store: ${this.props.data}`}</Text>
        <Spinner/>
      </Body>
    );
  }
} 

const mapStateToProps = state => ({ data: state.data });
export default connect(mapStateToProps)(Setup);