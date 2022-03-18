
import { render } from "react-dom";
import "./styles/index.scss";
import App from './components/App';


render(<App/>, document.getElementById("root"));
const myObj = {
    "polo":"gt",
    "tigor":"xt"
}

const myObj2 = {
    "swift":"gt",
    "jaguar":"xt"
}

console.log(myObj);
console.log(myObj2);
console.log({myObj,...myObj2});