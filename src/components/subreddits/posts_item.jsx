import "../styles/post_item.css";
import {Container, Row, Col} from 'react-bootstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import React, {useState, useEffect} from 'react';
import PostComments from '../posts_comments';
import {getPostComments} from '../../util/snoowrap_util';

// const Player = (props) => {
//   let videourl = props.videourl.replace('.gifv', 'mp4');
//   return <video src={videourl} />
// }

export const Posts = ({post}) => {
  const [postCommentsList, setPostComments] = useState([]);
  const [showCommentsFlag, setCommentsFlag] = useState(false);

  // useEffect(() => {
  //   getPostComments(post.id)
  //   .then(response => {
  //     setPostComments(response.comments);
  //   })
  // }, [])

  const showComments = () => {
    setCommentsFlag(!showCommentsFlag);
    getPostComments(post.id)
    .then(response => {
      setPostComments(response.comments);
    })
  }

  const returnMediaType = (post) => {
    if(post.post_hint) {
      switch(post.post_hint) {
        case 'image':
          return (
            post.preview.images || post.preview.images[0].resolutions ? 
            (
              <img
                style={{width: '65%'}}
                // src={post.preview.images[0].resolutions[2].url}
                src={post.preview.images[0].source.url}
              >
              </img>
            ) : null
          )
        case 'video':
          return null
          // return 'video'
          
        case 'link':
          return null
          // return 'link';
          
        case 'self':
          const self_text_html = post.selftext_html;
          // console.log(self_text_html);
          return 
            <div style={{width: '85%'}}>
              {ReactHtmlParser(self_text_html)}
            </div>
        // case 'rich:video':
        //     const rich_video = post.secure_media_embed.content;
        //     return <div style={{width: '100%'}}>
        //       {ReactHtmlParser(rich_video)}
        //     </div>
        default:
          return null;
      }
    }

    if(!post.is_self && !post.is_video && !post.is_gallery) {
      return (
        <img
          style={{width: '85%'}}
          src={post.url}
        ></img>
      )
    }
  }

  return (
    <div className="post_container">
      <Container style={{padding: '0 0 0 0'}} fluid>
        <Row noGutters={true}>
          <Col lg={1}>
            <div className="votes_container">
              <button className="vote_button">
                <img
                  className="vote_image"
                  src="/images/upvote.png" 
                  alt="up_arrow"
                  ></img>
              </button>
              <div className="votes">
                {post.ups}
              </div>
              <button className="vote_button">
                <img
                  className="vote_image"
                  src="/images/downvote.png" 
                  alt="down_arrow"
                  ></img>
              </button>
            </div>
          </Col>
          <Col style={{margin: '0 0 0 15px'}}>
            <Row>
              <div className="post_header">
                {
                  post.stickied ?
                  <div className="pin_container">
                    <div className="pin_icon">
                      <img
                        src="/images/pin2_icon.png"
                        alt="pin"
                      >
                      </img>
                      <div> Pinned by Moderators </div>
                    </div> 
                  </div> : null
                }
                {
                  post.link_flair_text ?
                  <div className="link_flair">
                    {post.link_flair_text}
                  </div> : null
                }
                <div className="post_author">
                  {`posted by ${post.author.name}`}
                </div>
                <div className="post_awards">
                  {
                    post.all_awardings.map((award, key) => {
                      return <img 
                        key={key}
                        className="post_awards_icon"
                        src={award.icon_url}></img>
                    })
                  }
                </div>
              </div>
            </Row>
            <Row>
              <div className="post_title">
                {post.title}
              </div>
            </Row>
            <Row>
              {
                returnMediaType(post) ?
                <div className="post_media">
                  {
                    returnMediaType(post)
                  }
                </div> : null
              }
            </Row>
            <Row>
              <div className="post_details">
                <button 
                  onClick={showComments}
                  className={
                    showCommentsFlag ? "post_details_button active" : "post_details_button"
                  }>
                  {post.num_comments} comments 
                </button>
                <button className="share_button">
                  <img
                    src="/images/share.png"
                  /> 
                  <div className="share_text"> share </div>
                </button>
                <button className="post_details_button">
                  save
                </button>
                <button className="post_details_button">
                  report
                </button>
              </div>
            </Row>
            <Row>
              <div className="comment_section">
                {
                  showCommentsFlag ? 
                    <PostComments commentsList={postCommentsList} /> : null
                }
              </div>
            </Row>
          </Col>
        </Row>
      </Container>


    </div>
  )
}