import "../styles/post_item.css";

export const Posts = ({post}) => {
  console.log(post);

  return (
    <div className="post_container">
      <div className="post_header">
        <div className="votes">
          {post.ups}
        </div>
        <div className="link_flair">
          {post.link_flair_text}
        </div>
        <div className="post_author">
          {`posted by ${post.author.name}`}
        </div>
        <div className="post_awards">
          {
            post.all_awardings.map((award, key) => {
              return <img style={{width: '1.5vw', padding: '0 5px 0 0'}} src={award.icon_url}></img>
            })
          }
        </div>
      </div>
      <div className="post_title">
        {post.title}
      </div>
    </div>
  )
}