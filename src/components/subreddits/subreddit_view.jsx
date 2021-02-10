import {Navbar} from "./navbar";
import {Posts} from "./posts_item";

export const SubredditView = ({content, listings}) => {
  const posts = listings.length !== 0 ? listings.map((post, i) => {
    return (
    <Posts 
      key={i}
      post={post} 
      />
    )
  }) : [];

  return (
    <div>
      <Navbar 
        content = {content.url}
      />
      <img
        style={{
          width: '100vw',
          // height: '15vh'
        }}
        alt="banner_img"
        src={content.banner_background_image}
      />
      <img
        alt="subreddit_icon"
        src={content.icon_img}
      />
      <div className="listingsContainer">
        <ul>
          {posts}
        </ul>
      </div>
    </div>
  )
}
