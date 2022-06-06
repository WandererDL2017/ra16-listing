import './App.css';
import Listing from './modules/Listing';
import dataset from './data/etsy.json'
function App() {
  return (
    <Listing items={dataset} />
  );
}

export default App;
