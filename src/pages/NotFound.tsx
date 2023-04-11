import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <p>Are you lost traveller? Would you like to go {<NavLink to="first-react-project/">HOME</NavLink>}?</p>
    </div>
  );
}

export default NotFound;