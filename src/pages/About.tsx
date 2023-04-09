import SimpleParagraph from '../components/text-components/SimpleParagraph';

function About() {
  return (
    <div className="about">
      <SimpleParagraph text="Hey there, I'm Samuel."/>
      <SimpleParagraph text="I'm using this website to learn a bit more about React."/>
      <SimpleParagraph text="I decided to use Typescript because it's what the cool kids do."/>
    </div>
  );
}

export default About;