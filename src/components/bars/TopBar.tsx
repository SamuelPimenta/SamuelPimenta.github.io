import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="top-bar">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/to-do"> To Do</NavLink>
            <NavLink to="/parallax"> Parallax Effect</NavLink>
        </div>
    );
  };
  
  export default TopBar;