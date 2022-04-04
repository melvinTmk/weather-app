import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import './App.css';


function App() {
  return (
    <div className="app">
      <main className='p-4'>
        <h1 className='text-center text-white'>Rechercher une ville</h1>
        <Form />
      </main>
    </div>
  );
}

export default App;
