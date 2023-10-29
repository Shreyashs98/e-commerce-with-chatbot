import React, { Component } from 'react';

export class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scriptLoaded: false,
    };
  }

  componentDidMount() {
    if (!this.state.scriptLoaded) {
      // Check if the Kommunicate script is already loaded
      if (window.kommunicate) {
        this.setState({ scriptLoaded: true });
      } else {
        (function (d, m) {
          var kommunicateSettings = {
            appId: "2fc1a8a2c3468a1e9da3fc8d7947a19ac",
            popupWidget: true,
            automaticChatOpenOnNavigation: true,
          };
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
          var h = document.getElementsByTagName("head")[0];
          h.appendChild(s);
          window.kommunicate = m;
          m._globals = kommunicateSettings;
          // Set the flag to true after loading the script
          this.setState({ scriptLoaded: true });
        }.bind(this))(document, window.kommunicate || {});
      }
    }
  }

  render() {
    return (
      <div>
        {/* Your chatbot component content goes here */}
      </div>
    );
  }
}

export default Chatbot;
