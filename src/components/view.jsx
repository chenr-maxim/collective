import React, {useState} from 'react';
import {ItemTypes} from './subreddits/ItemTypes';
import {Iframe} from './subreddits/iframe';
import {DropTarget, useDrop} from 'react-dnd';

export const View = () => {
  const[{canDrop, isOver}, drop] = useDrop({
    accept: ItemTypes.SUBREDDIT_ITEM,
    drop: (item, monitor) => {
      renderSubreddit(item);
      return item;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const [subredditUrl, setSubredditUrl] = useState('');

  const renderSubreddit = (item) => {
    const subreddit = item.obj;
    const source_url = `https://reddit.com${subreddit.url}`;
    setSubredditUrl({
      subredditUrl: source_url
    });
    console.log('hey i got moved bro');
  }

  return (
    <div ref={drop} 
      style={{width: '100vw', height: '100vh'}}
      className="viewContainer">
      main view
      <div>
        <Iframe 
          source={subredditUrl}
        />
      </div>
    </div>
  )
}