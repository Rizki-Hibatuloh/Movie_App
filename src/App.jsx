import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/cards';

function App() {
  return (
    <>
      <div className="container mx-auto bg-slate-200">
        <Navbar />
        <div className="container mx-auto px-12 my-6">
          <h1 className="text-2xl font-bold text-sky-600">Your favorite movie</h1>
        </div>
        <div className="container mx-auto px-6">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
