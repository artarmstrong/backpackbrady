import React from 'react';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Twitch extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      EMBED_URL
    );
    script.addEventListener('load', () => {
      new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id={this.props.targetID}></div>
    );
  }
}

Twitch.defaultProps = {
  targetID: 'twitch-embed',
  width: '940',
  height: '480',
  channel: 'backpackbrady',
  layout: 'video'
}

export default Twitch;