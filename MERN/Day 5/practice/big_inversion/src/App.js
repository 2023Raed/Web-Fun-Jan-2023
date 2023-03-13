
import './App.css';
import PersonCard from './components/person_card';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="raed" lastName="messaoud" age={ 30} hairColor="Black" /> 
      <PersonCard firstName="rania" lastName="messaoud" age={ 35 } hairColor="brown" /> 
      <PersonCard firstName="rihab" lastName="messaoud" age={38 } hairColor="blonde" /> 
      <PersonCard firstName="souad" lastName="messaoud" age={ 8 } hairColor="red" /> 
    </div>
  );
}

export default App;
