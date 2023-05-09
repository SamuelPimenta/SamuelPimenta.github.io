import { Tooltip } from 'react-tooltip';
import axios from 'axios';
import '../styles/components/CatFact.css' 

interface CatFactResponse {
  fact: string;
  length: number;
}

function CatFact() {

  const getCatFact = async () => {
    const response = await axios.get<CatFactResponse>('https://catfact.ninja/fact');
    if (response.data.fact !== "") {
      alert(response.data.fact);
    }
  };

  const handleButtonClick = () => {
    getCatFact();
  };

  return (
    <div className='cat-fact'>
      <Tooltip id="my-tooltip" />
      <div className='cat-fact-info' data-tooltip-id="my-tooltip" data-tooltip-content="Click the cat for a cool fact!">
        &#128712;
        </div>
      <button className='cat-fact-button' onClick={handleButtonClick}>
        <span role="img" aria-label="Cat symbol">&#x1F408;</span>
      </button>
    </div>
  );
}

export default CatFact;
