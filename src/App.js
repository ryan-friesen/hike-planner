import './App.css';

import Wrapper from './components/styled-components/Wrapper';
import Hike from './components/Hike';

function App() {
  console.log('App function component executed.');
  return (
    <Wrapper>
      {/* 
      This executes the component's function and the properties are converted into an object of key value pairs to be passed in as a single object argument, available inside the component
      <ComponentName propName1="value 1" propName2={10} />
      */}
      <Hike name="Vivian Creek Trail" duration={10} />
      <Hike />
    </Wrapper>
  );
}

export default App;
