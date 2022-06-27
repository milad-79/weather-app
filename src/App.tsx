import { useContext } from 'react';
import './App.css';
import SearchBar from './components/Search.Bar';
import ShowConditin from './components/Show.Condition';
import { MyProvider } from './context';

function App() {

  const context = useContext(MyProvider); 

  return (
    <div className='container'>
          <SearchBar/>

          {
            context?.data ?

            <ShowConditin/>

            :

            null

          }

    </div>
  );
}

export default App;
