const Header = (props: {title: string, subtitle?: string}) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </header>
  );
};

export default Header;
