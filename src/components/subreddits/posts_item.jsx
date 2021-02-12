import "../styles/post_item.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export const Posts = ({post}) => {
  console.log(post);

  const returnMediaType = (post) => {
    if(post.post_hint) {
      switch(post.post_hint) {
        case 'image':
          return (
            post.preview.images || post.preview.images[0].resolutions ? 
            (<div>
              <img
                // style={{width: '100%'}}
                src={post.preview.images[0].resolutions[2].url}
              >
              </img>
            </div>) : null
          )
        case 'video':
          return 'video'
          // break;
        case 'link':
          return 'link';
          // break;
        case 'self':
          const self_text_html = post.selftext_html;
          console.log(self_text_html);
          return 
            <div style={{width: '75%'}}>
              {ReactHtmlParser(self_text_html)}
            </div>
        // case 'rich:video':
        //     const rich_video = post.secure_media_embed.content;
        //     return <div style={{width: '100%'}}>
        //       {ReactHtmlParser(rich_video)}
        //     </div>
        default:
          break;
      }
    }

    if(!post.is_self && !post.is_video && !post.is_gallery) {
      return (
        <img
          style={{width: '100%'}}
          src={post.url}
        ></img>
      )
    }

    // if(post.is_gallery && post.media_metadata) {
    //   let array = []
    //   for(let [key, value] of Object.entries(post.media_metadata)) {
    //     const gallery_image = (
    //       <div>
    //         <img
    //           style={{width: '10%'}}
    //           src={value.s.u}
    //         >
    //         </img>
    //       </div>
    //     )
    //     array.push(gallery_image);
    //   }
    // }
  }

  return (
    <div className="post_container">
      {/* <div className="vote_arrow">
        <button>
          <img
            src="/images/up_arrow.png"
          ></img>
        </button>
      </div> */}
      <div className="votes">
          {post.ups}
      </div>
      <div className="post_header">
        {
          post.stickied ?
          <div className="pin_icon">
            <img
              src="/images/pin2_icon.png"
              alt="pin"
            >
            </img>
            <div> Pinned by Moderators </div>
          </div> : null
        }
        <div className="link_flair">
          {post.link_flair_text}
        </div>
        <div className="post_author">
          {`posted by ${post.author.name}`}
        </div>
        <div className="post_awards">
          {
            post.all_awardings.map((award, key) => {
              return <img 
                key={key}
                className="post_awards"
                src={award.icon_url}></img>
            })
          }
        </div>
      </div>
      <div className="post_title">
        {post.title}
      </div>
      <div className="post_media">
        {returnMediaType(post)}
      </div>
    </div>
  )
}