import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button,
  styles
} from "native-base";
import RNRestart from 'react-native-restart';
import {AsyncStorage} from 'react-native'
import Master from "./layouts/Master";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleWater ,toggleTheme} from "../store/actions/app";
import { setUser } from "../store/actions/user";
import {Util} from 'expo'
class Settings extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      theme: false
    };
  }

  async componentDidMount() {
    try{
      let theme =  JSON.parse(await AsyncStorage.getItem('theme')) || '';
      if(theme){
        this.setState({theme: theme})
      }
    }catch(e){
      alert(e.message);
    }
  }

  render() {
    return (
      <Master title="การตั้งค่า">
        <ListItem icon>
          <Left>
            <Button>
              <Icon active name="phone-portrait" />
            </Button>
          </Left>
          <Body>
            <Text>เปลี่ยนธีม</Text>
          </Body>
          <Right>
          <Switch
              value={this.state.theme}
              onValueChange={async  () => {
                try{
                  await AsyncStorage.setItem('theme', JSON.stringify(!this.state.theme))
                  this.setState({theme: !this.state.theme})
                  Util.reload()
                }catch(e){
                  alert(e.message)
                }}
              }
            />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button>
              <Icon active name="switch" />
            </Button>
          </Left>
          <Body>
            <Text>เปิด-ปิดระบบน้ำ</Text>
          </Body>
          <Right>
            <Switch
              value={this.props.water.status}
              onValueChange={() =>
                this.props.toggleWater({
                  status: !this.props.water.status,
                  user_id: this.props.user.user_id
                })
              }
            />
          </Right>
        </ListItem>
        <ListItem
          icon
          onPress={() => {
            this.context.router.history.push("/contact");
          }}
        >
          <Left>
            <Button>
              <Icon active name="call" />
            </Button>
          </Left>
          <Body>
            <Text>ติดต่อเรา</Text>
          </Body>
        </ListItem>
        <ListItem
          icon
          onPress={() => {
            this.context.router.history.push("/info");
          }}
        >
          <Left>
            <Button>
              <Icon active name="information-circle" />
            </Button>
          </Left>
          <Body>
            <Text>เกี่ยวกับโปรแกรม</Text>
          </Body>
        </ListItem>
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  theme: state.app.theme,
  user: state.user.user,
  water: state.app.water
});
const mapDispatchToProps = dispatch => ({
  toggleWater: data => dispatch(toggleWater(data)),
  setUser: data => dispatch(setUser(data)),
  toggleTheme: data => dispatch(toggleTheme(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Settings);
