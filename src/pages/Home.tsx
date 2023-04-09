import Header from '../components/text-components/Header';
import SimpleParagraph from '../components/text-components/SimpleParagraph';

function Home() {
  return (
    <div className="home">
      <Header title='My React learning website'/>
      <SimpleParagraph text="This is the homepage"/>
    </div>
  );
}

export default Home;