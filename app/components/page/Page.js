import React, { Component } from "react";
import Master from "../layouts/Master";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Content
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import News from "./News";
import Article from "./Article";
import { connect } from "react-redux";
import { setActiveTabs } from "../../store/actions/app";
import Media from "./Media";

const { width, height } = Dimensions.get("window");
class Page extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Master title="การจัดการความรู้">
        <Tabs>
          <Tab
            heading={
              <TabHeading style={styles.tabBackground}>
                <Icon name="document" style={styles.Button} />
                <Text style={styles.Button}>ข่าวสาร</Text>
              </TabHeading>
            }
          >
              <News />
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tabBackground}>
                <Icon name="folder" style={styles.Button} />
                <Text style={styles.Button}>บทความ</Text>
              </TabHeading>
            }
          >
              <Article />
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tabBackground}>
                <Icon name="videocam" style={styles.Button} />
                <Text style={styles.Button}>วิดีโอ</Text>
              </TabHeading>
            }
          >
              <Media />
          </Tab>
        </Tabs>
      </Master>
    );
  }
}
const styles = StyleSheet.create({
  tabBackground: {
    //backgroundColor: "#e6fff9"
  },
  Button: {
    //color: "#000"
  }
});

const mapStateToProps = state => ({
  activeTab: state.app.activeTab
});

const mapDispatchToProps = dispatch => ({
  setActiveTabs: data => dispatch(setActiveTabs(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
