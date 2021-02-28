import React from 'react';
import './styles/posts_comments.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const PostsComments = ({commentsList, showComments}) => {

  console.log(commentsList);

  const comment = commentsList.length !== 0 ? commentsList.map((comment, i) => {
    const emptyReplies = comment.replies.length !== 0 ? false : true;
    console.log(comment);
    console.log(comment.replies);
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
            <div className={!emptyReplies ? "replies_container" : "display: none" }>
              {!emptyReplies ? 
                comment.replies.map((reply, i) => {
                  return (
                    <ul  className="reply_container" key={i}>
                      <li>
                        <div className="comment_header">
                          {reply.author.name}
                          <span className="upvotes">
                            {`${reply.ups} upvotes`}
                          </span>
                        </div>
                        {ReactHtmlParser(reply.body_html)}
                        {
                          reply.replies.length !== 0 ? 
                            reply.replies.map((secondReply, i) => {
                              return (
                                <ul className="secondReplies_container">
                                  <li>
                                    <div className="comment_header">
                                      {secondReply.author.name}
                                      <span className="upvotes">
                                        {`${secondReply.ups} upvotes`}
                                      </span>
                                    </div>
                                    {ReactHtmlParser(secondReply.body_html)}
                                  </li>
                                </ul>
                              )
                            }) : null
                        }
                      </li>
                    </ul>
                  )})
              : null}
            </div>
          </div>
          {/* <div className="extra_options">

          </div> */}
        </div>
      </li>
    )
  }) : null;

  return (
    <ul className="allcomments_container">
      {comment}
      <button 
        className="close_comments"
        onClick={showComments}
        >
          close comments
      </button>
    </ul>
  );
};

export default PostsComments;


