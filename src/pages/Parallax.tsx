import SimpleParagraph from '../components/text-components/SimpleParagraph';
import loremIpsum from '../resources/LoremIpsum';
import '../styles/pages/Parallax.css';

const Parallax = () => {
  return (
    <div className="parallax">

        <div className='parallax-text-container'>
        <SimpleParagraph text="Look at this parallax effect"/>
        <SimpleParagraph text="It's becoming overused but I think it's nice"/>
        <SimpleParagraph text="I don't know what else to write so here is some Lorem Ipsum"/>
        <SimpleParagraph cssClassName='parallax-lorem-text' text={loremIpsum} />
        <SimpleParagraph cssClassName='parallax-lorem-text'text={loremIpsum} />
        <SimpleParagraph cssClassName='parallax-lorem-text'text={loremIpsum} />


        <p>
          <a href="https://www.freepik.com/free-photo/planet-with-mountains-planet-background_40510157.htm#query=parallax%20background&position=6&from_view=search&track=robertav1_2_sidr">
            Image by Sketchepedia</a> on Freepik
        </p>

      </div>
      
    </div>
  );
}

export default Parallax;