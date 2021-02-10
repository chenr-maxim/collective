export const Posts = ({post}) => {
  
  return (
    <div>
      {post.title}
      {JSON.stringify(post.author.name)}
    </div>
  )
}