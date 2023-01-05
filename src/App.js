import './App.css';
import PureComponent from './components/pureComponent';
import SimpleComponent from './components/simpleComponent';

function App() {
  return (
    <div className="App">
      <SimpleComponent/>
      <PureComponent/>
    </div>
  );
}

export default App;