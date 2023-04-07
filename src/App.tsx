import React from 'react';
import Header from './Header';
import SimpleParagraph from './SimpleParagraph';

function App() {
  return (
    <div className="App">
      <Header title='My React learning website'/>
      <SimpleParagraph text="I'm using this website to learn a bit more about React"/>
      <SimpleParagraph text="I decided to use Typescript because it's what the cool kids do."/>
    </div>
  );
}

export default App;
