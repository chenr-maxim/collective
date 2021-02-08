export const SubredditView = ({content}) => {
  // console.log(content);
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search"
      >  
      </input>
      <h4> {content.display_name} </h4>
      <h4> {content.header_title} </h4>
      <img
        alt="subreddit image"
        src={content.icon_img}
      />
    </div>
  )
}