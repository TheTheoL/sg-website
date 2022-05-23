import React from 'react';
//Global Styling
import GlobalStyle from './components/GlobalStyles';

//components
import { Nav } from './components/Nav';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <About />
      <div className='sections'>

      </div>
    </div>
  );
}

export default App;
