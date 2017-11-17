import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Spinner, Header, Content, Footer, Container } from 'native-base';

import { Actions } from 'react-native-router-flux';
import uuid from 'uuid';

import styles from '../../styles';

export default class Home extends Component {

  _renderItem(item) {
    console.log("_renderItem > ?: ", item);
    return (
      <View style={styles.item}>
        <Text children={`This is text from FlatList in children`}/>
        <Text>FlatList item: {item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Text>Header</Text>
        </Header>
        <Content style={styles.content}>
          { this.props.data.length !== 0 ? 
            <FlatList
              data={this.props.data}
              keyExtractor={uuid.v4}
              renderItem={({item}) => this._renderItem(item)}
              />
              : <Text>The data was losed, please come later.</Text>
          }
        </Content>
        <Footer>
          <Text>Footer</Text>
        </Footer>
      </Container>
    )
  }

}

// const mapStateToProps = state => ({ data: state.data });
// const mapDispatchToProps = dispatch => bindActionCreators({ addData }, dispatch);

// export default connect(mapStateToProps)(Home);
