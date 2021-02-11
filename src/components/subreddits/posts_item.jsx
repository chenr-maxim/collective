import "../styles/post_item.css";

export const Posts = ({post}) => {
  console.log(post);

  const returnMediaType = (post) => {
    switch(post.post_hint) {
      case 'image':
        return (
          <div>
            <img
              src={post.url}
            >
            </img>
          </div>
        )
      case 'video':
        return 'video'
        // break;
      case 'link':
        return 'link';
        // break;
      default:
        break;
    }
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