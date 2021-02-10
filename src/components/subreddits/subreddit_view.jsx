import {Navbar} from "./navbar";

export const SubredditView = ({content}) => {
  console.log(content);
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
    </div>
  )
}
