import "../styles/navbar.css";

export const Navbar = ({content}) => {
  return (
    <div className="navbar_container">
      <div className="navbar_elements">
        <h4> {content} </h4>
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