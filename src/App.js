
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Body/Form';


function App() {
  
  const getData = async ()=>{
    try {
      const res = await fetch('http://projects.codeandtrust.com/api/user/mub012')
      const data = await res.json()
      console.log(data)
    } catch (error) {
      throw new Error()
    }
  }
  return (
    <div className="App">
      <Header />
      <Form />
      <button onClick={getData}>Get</button>
    </div>
  );
}

export default App;
