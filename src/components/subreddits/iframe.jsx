import React from 'react';

export const Iframe = ({ source }) => {
  if(!source) {
    return <div> Loading... </div>
  }
  const src = source.subredditUrl;

  return (
    <div
      className="iframeContainer"
    >
      <iframe 
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        title='iframe'
        style={{height: '500px', width: '500px'}}
        src={src}></iframe>
    </div>
  )
}
