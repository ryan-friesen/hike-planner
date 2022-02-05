import './App.css';

import PlannedHike from './components/PlannedHike';

function App() {
  console.log('App function component executed.');
  return (
    <div>
      <PlannedHike />
      <PlannedHike />
    </div>
  );
}

export default App;
