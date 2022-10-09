import { useEffect } from 'react';
import './App.scss';
import Tabs from './Tabs/Tabs';

const App = () => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
    }, []);
  return (
    <div className='App'>
      <Tabs />
    </div>
  );
}

export default App;
