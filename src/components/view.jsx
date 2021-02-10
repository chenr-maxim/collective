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
  const [selectedSubreddit, setSubredditContent] = useState([]);
  const [columns, setNumberOfColumns] = useState(1);

  const renderSubreddit = (item) => {
    const subreddit = item.obj;
    getSubredditContent(subreddit.display_name)
    .then((res) =>{
      setSubredditContent(state => [res, ...state]);
    })
    .catch(err => {
      console.error(err);
    })
  }
  // console.log(columns);
  // console.log(selectedSubreddit);
  
  return (
    <>
      <div ref={drop} 
        style={{
          width: '100vw', 
          height: '100vh',
          zIndex: 1,
        }}
        className="viewContainer">
        <div>
          {
            selectedSubreddit.length === 0 ?
            <SubredditView 
              content = {selectedSubreddit} 
            /> : 
            <SubredditView 
              content = {selectedSubreddit[0]} 
            />
            
          }
          {isOver && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.3,
                backgroundColor: '#2699FB',
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}