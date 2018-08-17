import React, { Component } from "react";
import Master from "../layouts/Master";
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import News from "./News";
import Article from "./Article";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master>
        <Tabs >
          <Tab 
            heading={
              <TabHeading style={styles.tabBackground}>
                <Icon name="document" style={styles.Button}/>
                <Text style={styles.Button}>News</Text>
              </TabHeading>
            }
          >
            <News/>
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tabBackground}>
                  <Icon name="folder" />
                <Text>Article</Text>
              </TabHeading>
            }
          >
            <Article/>
          </Tab>
          
        </Tabs>
        </Master>
    );
  }
}
const styles = StyleSheet.create({
  tabBackground:{
    backgroundColor:"#e6fff9"
  },
  Button: {
    color: "#000"
  }
});

export default Page;
