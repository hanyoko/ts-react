import './App.css';
import Counter from './component/Counter';
import CounterReducer from './component/CounterReducer';
import Hello from './component/Hello';
import MyForm from './component/MyForm';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} hi`);
  }
  const onFormSubmit = (form:{name: string, desc: string}) => {
    console.log(form);
  }
  return (
    <div className="App">
      <Hello name="green" message="안녕하세요" onClick={onClick} />
      <Counter />
      <MyForm  onFormSubmit={onFormSubmit}/>
      <CounterReducer />
    </div>
  );
}

export default App;
