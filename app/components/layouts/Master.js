import React, { Component } from "react";
import { Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import Drawer from 'react-native-drawer'
import PropTypes from "prop-types";
import ControlPanel from "../drawer/ControlPanel";
import {connect} from 'react-redux';
import { toggleDrawer } from "../../store/actions/app";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

// componentDidMount(){
//     this._drawer.open()
// }

  render() {
    return (
      <Drawer
       open = {this.props.drawer.isOpen}
        type="overlay"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        onClose = {()=>this.props.toggleDrawer(false)}
       
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=>this.props.toggleDrawer(true)}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.title}</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="contact" />
              </Button>
            </Right>
          </Header>
          <Content>{this.props.children}</Content>
          <Footer>
            <FooterTab>
              <Button>
                <Icon name="home" />
              </Button>
              <Button active>
                <Icon active name="document" />
              </Button>
              <Button >
                <Icon  name="alarm" />
              </Button>
              <Button>
                <Icon name="notifications" />
              </Button>
              <Button>
                <Icon name="settings" />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Drawer>
    );
  }
}

Master.defaultProps = {
  title: "Longan"
};

const mapStateToProps = state => ({
    app:state.app,
    drawer: state.app.drawer
})
const mapDispatchToProps = dispatch => ({
    toggleDrawer : data => dispatch (toggleDrawer(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Master);
