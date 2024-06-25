// import logo from './logo.svg';
// import './App.css';
import Transaction from "./Components/Transaction";
import './App.css'
import FormComponent from "./Components/FormComponent";
import {useState} from 'react' //นำ useState มาใช้

function App() {
  const Design = {color:"darkblue", textAlign:"center"} //สร้างเป็นตัวแปรแล้วอิมพอตเข้าไปใน style ได้
  const [items,setItems] = useState([]) //สร้าง state ขึ้นมาเพื่อส่งค่าต่อให้ transaction component
  const onAddNewItem = (newItem)=>{ //เป็นตัวแปรที่รับค่าข้อมูลที่ส่งมาจาก FormComponent
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
  return (
    <div>
      <div className="container">
        <h1 style={{color:"red", textAlign:"center"}}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <FormComponent onAddItem = {onAddNewItem}/> {/*onAddItem เป็น props ที่เชื่อมต่อกับ FormComponent เพื่อรับค่าจาก Formcomponent มาเก็บไว้ที่ onAddNewItem ซึ่งเป็นตัวแปรที่จะส่งค่าเข้าไปใน state items ผ่านฟังก์ชัน setItems เพื่อส่งค่าต่อไปยัง transaction component*/}
        <Transaction items = {items}/> {/*สร้าง props ขึ้นมาเพื่อเชื่อมต่อกับ transaction component โดย items ตัวแรกคือ props ที่จะส่งไปให้ transaction component ซึ่งมีค่าเท่ากับ items ตัวที่ 2 ซึ่งเป็น state ใน add.js  */}
      </div>
    </div>
  );
}

export default App;
