import { NavLink } from "react-router-dom";
import '../../styles/components/bars/TopBarItem.css';

const TopBarItem = (props: {text: string, path: string}) => {
    return (
    <NavLink className="topbar-item" to={props.path}>{props.text}</NavLink>
    )
}
export default TopBarItem;