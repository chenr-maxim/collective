import React, {useState, useEffect} from 'react';
import {ItemTypes} from './subreddits/ItemTypes';
import {DropTarget, useDrop} from 'react-dnd';
import {getSubredditContent, getSubredditHot} from '../util/snoowrap_util';
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
  const [subredditListings, setSubredditListings] = useState([]);
  // const [columns, setNumberOfColumns] = useState(1);

  const renderSubreddit = async (item) => {
    const subreddit = item.obj;
    await getSubredditContent(subreddit.display_name)
    .then((res) =>{
      setSubredditContent(state => [res, ...state]);
    })
    .catch(err => {
      console.error(err);
    });
    await getSubredditHot(subreddit.display_name)
    .then((res) => {
      setSubredditListings(state => [...res]);
    })
    .catch(err => {
      console.error(err);
    });
  }

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
              listings = {subredditListings}
            /> : 
            <SubredditView 
              content = {selectedSubreddit[0]}
              listings = {subredditListings} 
            />
          }
          {isOver && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: '16.6vw',
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