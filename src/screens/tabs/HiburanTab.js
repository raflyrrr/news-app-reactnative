import React, {Component} from 'react';
import { Alert, View, ActivityIndicator} from 'react-native';
import { Container, Content, List, Text } from 'native-base';
import {getArticles} from '../../services/news'
import DataItem from '../../component/dataItem'
import Modal from '../../component/modal';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class ListThumbnailExample extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles('entertainment').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }
    
    render() {
      
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" style={{marginTop:8}}/>
        <Text style={{marginTop: 10}} children="Tunggu sebentar..." />
      </View>
    ) : (
      
      <List
    
      keyExtractor={(item, index) => index.toString()}
        dataArray={this.state.data}
        renderRow={(item) => {
            return (          
              <DataItem onPress={this.handleItemDataOnPress} data={item} /> 
            )
        }} />)
        
        
      return (
        
        <Container>
          <Content>
          {view}
          </Content>
          <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />  
        </Container>
       
      );
    }
}
