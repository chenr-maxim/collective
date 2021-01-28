import React from 'react';
import {ItemTypes} from './ItemTypes';
import {useDrag} from 'react-dnd';

export const SubredditItem = ({subreddit}) => {

  console.log('subreddit item');
  console.log(subreddit);

  const [{isDragging}, drag] = useDrag({
    item: {type: ItemTypes.SUBREDDIT_ITEM},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return(
    <div
      ref={drag}
      style={{opacity}}
    >
      {subreddit.url}
    </div>
  )
}