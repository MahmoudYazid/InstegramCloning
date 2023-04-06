
import './App.css';


import { Leftside } from "../src/leftside/leftside";
import {Footer} from "./footer/footer";
import './footer/footer.css'
import { RightSide } from "./rightSide/RightSide";
function App() {
  return (
    <div className="MainContainer">
      <div className="upper">
        <Leftside></Leftside>
        <RightSide></RightSide>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
