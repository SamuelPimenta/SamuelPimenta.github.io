import  "../../styles/components/bars/TopBar.css";
import TopBarItem from "./TopBarItem";

const TopBar = () => {
    return (
        <div className="top-bar">
            <TopBarItem path="/" text='Home'/>
            <TopBarItem path="/about" text='About'/>
            <TopBarItem path="/to-do" text='To Do'/>
            <TopBarItem path="/parallax" text='Parallax Effect'/>
            <TopBarItem path="/hooks" text='Fun with hooks'/>
        </div>
    );
  };
  
  export default TopBar;