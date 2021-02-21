import "../styles/navbar.css";

export const Navbar = ({content}) => {

  // console.log(content);

  return (
    <div className="navbar_container">
      <div className="navbar_elements">
        <h4> {content} </h4>
        <div className="sort_subreddit_post">

        </div>
        <input
          type="text"
          name="search"
          placeholder="search"
          className="navbar_search"
        >  
        </input>
      </div>
    </div>
  )
}