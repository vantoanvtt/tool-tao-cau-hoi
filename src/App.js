import logo from './logo.svg';
import './App.css';
import Main from './pages/Main.js';
import {QuestionProvider} from './context/QuestionContext';

function App() {
  return (
      <QuestionProvider>
         <Main/>
      </QuestionProvider> 
  );
}

export default App;
