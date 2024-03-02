import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class FacebookMsg extends Component {
  render() {
    return (
      <FacebookProvider appId='1150283972783743' chatSupport>
        <CustomChat
          pageId='197681293439134'
          minimized={true}
          greetingDialogDisplay='hide'
        />
      </FacebookProvider>
    );
  }
}
