import Master from "./layouts/Master";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from "react-native";
import {
  Footer,
  FooterTab,
  Content,
  Container,
  Button,
  Header,
  Left,
  Icon,
  Title,
  Body,
  Right
} from "native-base";
import { connect } from "react-redux";
import { getAllChat, sentChat } from "../store/actions/chat";
import PropTypes from "prop-types";

class Chat extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      input: {
        message: "",
        room_id: "",
        username: "",
        type: "User"
      }
    };
    this.getMessage = this.getMessage.bind(this);
  }
  // scrollToBottom = () => {
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  // };
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }
  componentDidMount() {
    this.props.getAllChat();
    this.getMessage();
    //this.scrollToBottom();
    let oldInput = this.state.input;
    oldInput["username"] =
      this.props.user.name + " " + this.props.user.lastname;
    oldInput["room_id"] = this.props.user.user_id;

    this.setState({ input: oldInput });
  }

  getMessage() {
    setInterval(() => {
      this.props.getAllChat();
    }, 10000);
  }

  componentWillUnmount() {
    this.getMessage();
  }
  onChangeTextHandler(text) {
    let oldInput = this.state.input;
    oldInput["message"] = text;
    this.setState({ input: oldInput });
  }
  renderDate = date => {
    return <Text style={styles.time}>{date}</Text>;
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.context.router.history.goBack()}
            >
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>การสนทนา</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            style={styles.list}
            data={this.props.chat}
            keyExtractor={item => {
              return item.msg_id;
            }}
            renderItem={message => {
              const item = message.item;
              let inMessage = item.type != "User";
              let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
              return (
                <View style={[styles.item, itemStyle]}>
                  {!inMessage && this.renderDate(item.create_time)}
                  <View style={[styles.balloon]}>
                    <Text>{item.message}</Text>
                  </View>
                  {inMessage && this.renderDate(item.create_time)}
                  {/* ref=
                  {el => {
                    this.messagesEnd = el;
                  }} */}
                </View>
              );
            }}
          />
        </Content>
        <Footer style={{ padding: 7 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={text => this.onChangeTextHandler(text)}
              value={this.state.input.message}
              // onSubmitEditing={() => {
              //   this.props.sentchat(this.state.input);
              //   this.setState({
              //     input: {
              //       message: ""
              //     }
              //   });
              // }}
            />
          </View>

          <TouchableOpacity
            style={styles.btnSend}
            onPress={() => {
              this.props.sentchat(this.state.input);
              this.setState({
                input: {
                  message: ""
                }
              });
            }}
          >
            <Image
              source={{
                uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png"
              }}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 17
  },
  footer: {
    flexDirection: "row",
    //height:60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5
    // position:"absolute",
    // bottom:0,
    // right:0,
    // left:0
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center"
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20
  },
  itemIn: {
    alignSelf: "flex-start"
  },
  itemOut: {
    alignSelf: "flex-end"
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080"
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 300,
    padding: 5
  }
});
const mapStateToProps = state => ({
  user: state.user.user,
  hasError: state.app.hasError.message,
  chat: state.chat.chat
});
const mapDispatchToProps = dispatch => ({
  getAllChat: data => dispatch(getAllChat(data)),
  sentchat: data => dispatch(sentChat(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
