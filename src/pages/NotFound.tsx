import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="not-found">
      <p>Are you lost traveller? Would you like to go {<NavLink to="first-react-project/">HOME</NavLink>}?</p>
    </div>
  );
}

export default About;