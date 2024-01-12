import logo from './logo.svg';
import './App.css';
import MyImageComponent from './components/sample/image';
import { FacebookButton, FacebookCount } from "react-social";


function App() {
  let url = "https://github.com";
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            hellow world
          </p>
        </div>
        <div>
        <FacebookButton url={url} appId={723297579521532}>
        <FacebookCount url={url} />
        {" Share " + url}
        </FacebookButton>
        </div>
   
      </div>
  
  );
}

export default App;
