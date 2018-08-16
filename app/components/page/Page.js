import React, { Component } from "react";
import Master from "../layouts/Master";
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="document" />
                <Text>News</Text>
              </TabHeading>
            }
          >
            <Text>Tab1</Text>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                  <Icon name="folder" />
                <Text>Article</Text>
              </TabHeading>
            }
          >
            <Text>Tab2</Text>
          </Tab>
          
        </Tabs>
        </Master>
    );
  }
}

export default Page;
