import React from 'react';
import './styles/posts_comments.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const PostsComments = ({commentsList}) => {
  const comment = commentsList.length !== 0 ? commentsList.map((comment, i) => {

    console.log(comment);

    return (
      <li key={i} className="comment_container">
        <div className="left">
    
        </div>
        <div className="right">
          <div className="comment_header">
            {comment.author.name}
            <span className="upvotes">
              {`${comment.ups} upvotes`}
            </span>
          </div>
          <div className="comment_body">
            {ReactHtmlParser(comment.body_html)}
          </div>

          <div className="extra_options">

          </div>
        </div>
      </li>
    )
  }) : null;

  return (
    <ul>
      {comment}
    </ul>
  );
};

export default PostsComments;