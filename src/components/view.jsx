import React, {useState} from 'react';
import {ItemTypes} from './subreddits/ItemTypes';
import {DropTarget, useDrop} from 'react-dnd';
import { getSubredditContent } from '../util/snoowrap_util';
import {SubredditView} from './subreddits/subreddit_view';

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
  const [selectedSubreddit, setSubredditContent] = useState('');

  const renderSubreddit = (item) => {
    const subreddit = item.obj;
    getSubredditContent(subreddit.display_name)
    .then((res) =>{
      console.log(res);
      setSubredditContent(res);
      console.log(selectedSubreddit);
    })
    .catch(err => {
      console.error(err);
    })



    // setSubredditContent(subreddit_content);
    // console.log(selectedSubreddit);
  }

  return (
    <div ref={drop} 
      style={{width: '100vw', height: '100vh'}}
      className="viewContainer">
      main view
      <div>
        <SubredditView
          content = {selectedSubreddit}
        />
      </div>
    </div>
  )
}