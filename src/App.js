// import logo from './logo.svg';
// import './App.css';
import Transaction from "./Components/Transaction";
import './App.css'
import FormComponent from "./Components/FormComponent";

const Design = {color:"darkblue", textAlign:"center"} //สร้างเป็นตัวแปรแล้วอิมพอตเข้าไปใน style ได้

function App() {
  return (
    <div>
      <div className="container">
        <h1 style={{color:"red", textAlign:"center"}}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <FormComponent/>
        <Transaction/>
      </div>
    </div>
  );
}

export default App;
