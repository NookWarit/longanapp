import React from "react";
import { WebView } from "react-native";
import { connect } from "react-redux";
import Master from "../layouts/Master"

class DetailNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 520
    };
  }

  onMessage = e => {
    this.setState({
      height: parseInt(e.nativeEvent.data)
    });
  };

  render() {
    let jsCode = `window.postMessage = function(data) {
    __REACT_WEB_VIEW_BRIDGE.postMessage(String(data));
    };
    postMessage(document.documentElement.scrollHeight);
  `;
    return (
      <Master pageTitle="รายละเอียดข่าว" isBack>
        <WebView
          source={{
            uri: this.props.webView.url
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled
          onMessage={this.onMessage}
          injectedJavaScript={jsCode}
          style={{ flex: 1, height: this.state.height }}
        />
      </Master>
    );
  }
}
const mapStateToProps = state => ({
  webView: state.app.webView
});

const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailNews);
