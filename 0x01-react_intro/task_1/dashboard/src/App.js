import './App.css';
import logo from '../src/holberton-logo.jpg';
import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
// import Notifications from './Notifications';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} alt='Holberton logo' width={200} height={200}></img>
        <h1>School Dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
