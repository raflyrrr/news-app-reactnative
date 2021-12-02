import React, { Component } from 'react';
import { Container, Header,Right,Body,Title, Tab, Tabs,ScrollableTab } from 'native-base';
import Tab1 from './tabs/GeneralTab'
import Tab2 from './tabs/TeknologiTab'
import Tab3 from './tabs/KesehatanTab'
import Tab4 from './tabs/BisnisTab'
import Tab5 from './tabs/SainsTab'
import Tab6 from './tabs/SportTab'
import Tab7 from './tabs/HiburanTab'
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"white"}}noLeft>
          <Body>
            <Title style={{color:"black",fontFamily:"Montserrat-Bold"}}>Fienews</Title>
          </Body>
          <Right />
          </Header>
        <Tabs renderTabBar={()=> <ScrollableTab	/>}>
          <Tab heading="Berita Terbaru" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab1 />
          </Tab>
          <Tab heading="Teknologi" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab2 />
          </Tab>
          <Tab heading="Kesehatan" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab3 />
          </Tab>
          <Tab heading="Bisnis" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab4 />
          </Tab>
          <Tab heading="Sains" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab5 />
          </Tab>
          <Tab heading="Sport" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab6 />
          </Tab>
          <Tab heading="Hiburan" textStyle={{color:"grey",fontFamily:"Montserrat-Medium"}} activeTextStyle={{color:"black",fontFamily:"Montserrat-Medium"}} tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:"white"}}>
            <Tab7 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}