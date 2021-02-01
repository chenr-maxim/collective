export const SubredditView = ({content}) => {
  console.log(content);
  return (
    <div>
      <h4> {content.display_name} </h4>
      <h4> {content.header_title} </h4>
      <img
        alt="subreddit image"
        src={content.icon_img}
      />
    </div>
  )
}