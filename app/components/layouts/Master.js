import React, { Component } from "react";
import { Text, StyleSheet ,Platform} from "react-native";
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
import Drawer from "react-native-drawer";
import PropTypes from "prop-types";
import ControlPanel from "../drawer/ControlPanel";
import { connect } from "react-redux";
import { toggleDrawer } from "../../store/actions/app";
import { withRouter } from "react-router-native";

class Master extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      footerMenu: [
        {
          id: 1,
          icon: "home",
          route: "/",
          slug: "/"
        },
        {
          id: 2,
          icon: "document",
          route: "/page",
          slug: "/page"
        },
        {
          id: 3,
          icon: "alarm",
          route: "/history",
          slug: "/history"
        },
        {
          id: 4,
          icon: "notifications",
          route: "/calendar",
          slug: "/calendar"
        },
        {
          id: 5,
          icon: "settings",
          route: "/settings",
          slug: "/settings"
        }
      ]
    };
  }

  componentDidMount() {
    //console.log(this.props.user);
    if (!this.props.user && this.context.router.location != "/login") {
      this.context.router.history.push("/login");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.user && this.props.location.pathname !== "/login") {
      this.context.router.history.push("/login");
    }
    return true;
  }

  render() {
    return (
      <Drawer
        open={this.props.drawer.isOpen}
        type="overlay"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        onClose={() => this.props.toggleDrawer(false)}
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <Container style={styles.container}>
          <Header style={styles.Background}>
            <Left>
              {this.props.isBack ? (
                <Button transparent onPress={() => this.props.history.goBack()}>
                  <Icon name="arrow-round-back" />
                </Button>
              ) : (
                <Button
                  transparent
                  onPress={() => this.props.toggleDrawer(true)}
                >
                  <Icon name="menu" style={styles.Button} />
                </Button>
              )}
            </Left>
            <Body>
              <Title>{this.props.title}</Title>
            </Body>
            <Right />
          </Header>
          <Content>{this.props.children}</Content>
          {this.props.hideFooter ? (
            undefined
          ) : (
            <Footer style={styles.Background}>
              <FooterTab>
                {this.state.footerMenu.map(item => (
                  <Button
                    key={item.id}
                    vertical
                    active={this.props.location.pathname == item.slug}
                    onPress={() => this.props.history.push(item.route)}
                  >
                    <Icon name={item.icon} />
                  </Button>
                ))}
              </FooterTab>
            </Footer>
          )}
        </Container>
      </Drawer>
    );
  }
}

Master.defaultProps = {
  title: "Longan"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        //marginTop: 64
      },
      android: {
        paddingTop: 25
      }

    }),
  },
  Background: {
    //backgroundColor: "#00e6b0"
  },
  Button: {
    //color: "#000"
  }
});
const mapStateToProps = state => ({
  app: state.app,
  drawer: state.app.drawer,
  user: state.user.user
});
const mapDispatchToProps = dispatch => ({
  toggleDrawer: data => dispatch(toggleDrawer(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Master)
);
