import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <img className='float-end' src={logo} alt={logo} width='450'/>
        </div>
        <div className='col-md-6'>

        </div>
      </div>
    </div>
  );
}

export default App;
