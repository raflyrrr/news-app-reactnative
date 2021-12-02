import React, { Component } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 80;

// create a component
class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = (message) => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nBaca selengkapnya di ${url}\n\nShared via Fienews`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{margin:0, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'white'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'black', fontSize: 16}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.url} style={{color: 'black'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon type="MaterialIcons" name="share" style={{color: 'black', fontSize: 16}}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

export default ModalComponent;