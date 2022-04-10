import './App.css';
import AddForm from './components/AddForm';
import Footer from './components/Footer/Footer';
import ShowItems from './components/ItemsList';

const App = () => {
  return (
    <div className='main'>
      <AddForm />
      <ShowItems />
      <Footer />
    </div>
  );
}

export default App;
