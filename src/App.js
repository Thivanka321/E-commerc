import react from 'react';
import Category from './components/Category';
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navebar from './components/Navebar';


function App() {
  return (
    <div >
        <Navebar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />


    </div>
  );
}

export default App;
