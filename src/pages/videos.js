import React, { Component } from 'react';
import  YouTube  from 'react-youtube';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderVideos from '../components/HeaderVideos';

class Example extends React.Component {
  render() {
    const opts = {
      // height: '890',
      // width: '1040',

      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


    return (
      <Layout>
				<Helmet title="FIghter Portal" />
				<HeaderVideos />
      <div align="center">
      <YouTube
        videoId="vK82KV3Jo38"
        opts={opts}
        onReady={this._onReady}
      />

      </div>

    <div align="center" >
    <p></p><p></p><p></p>
      <a href="https://optimistic-bhaskara-997e12.netlify.com">BackToHome</a>

    </div>

      	</Layout>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target fjlkjer
    event.target.playVideo();
  };


}
 export default Example;
  /*    //<a href="https://optimistic-bhaskara-997e12.netlify.com">BackToHome</a>*/
