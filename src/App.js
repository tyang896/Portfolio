import './App.css';
import PortfolioContainer from './components/PortfolioContainer'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="portfolio-app">
      {/* TODO: Change header here */}
      <PortfolioContainer />
      {/* TODO: Place Footer Here */}
      <Footer />
    </div>
  );
}

export default App;
