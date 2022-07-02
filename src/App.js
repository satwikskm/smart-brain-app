import './App.css';
import Navigation from './components/navigation/Navigation';
import FaceAPI from './components/api/api';
import Rank from './components/Rank/Rank';
import ImageLink from './components/imagelink/ImageLink';
import Logo from './components/logo/Logo';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />
      
    </div>
  );
}

export default App;
