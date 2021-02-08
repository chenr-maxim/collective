import React from 'react';
import {ItemTypes} from './ItemTypes';
import {useDrag} from 'react-dnd';

export const SubredditItem = ({subreddit}) => {
  const [{isDragging}, drag] = useDrag({
    item: {name:'subreddit_item',type: ItemTypes.SUBREDDIT_ITEM, obj: subreddit},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // console.log(dropResult);
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return(
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.2 : 1      
      }}
    >
      {subreddit.url}
    </div>
  )
}