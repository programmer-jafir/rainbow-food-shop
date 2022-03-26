import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FoodCard from './components/FoodCard/FoodCard';
import QA from './components/QA/QA';

function App() {
  return (
    <div>
      <Header></Header>
      <FoodCard></FoodCard>
      <QA></QA>
    </div>
  );
}

export default App;
