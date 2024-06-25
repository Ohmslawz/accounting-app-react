// import logo from './logo.svg';
// import './App.css';
import Transaction from "./Components/Transaction";
import './App.css'
import FormComponent from "./Components/FormComponent";
<<<<<<< HEAD

const Design = {color:"darkblue", textAlign:"center"} //สร้างเป็นตัวแปรแล้วอิมพอตเข้าไปใน style ได้

function App() {
=======
import {useState} from 'react' //นำ useState มาใช้

function App() {
  const Design = {color:"darkblue", textAlign:"center"} //สร้างเป็นตัวแปรแล้วอิมพอตเข้าไปใน style ได้
  const initData =[
    {id:1,title:"ค่ารักษาพยาบาล",amount:2000},
    {id:2,title:"ค่าน้ำมัน",amount:5000},
    {id:3,title:"ค่าเช่าบ้าน",amount:25000},
    {id:4,title:"ค่าเสื้อผ้า",amount:1000},
  ]
  const [items,setItems] = useState(initData) //สร้าง state ขึ้นมาเพื่อส่งค่าต่อให้ transaction component
  const onAddNewItem = (newItem)=>{ //เป็นตัวแปรที่รับค่าข้อมูลที่ส่งมาจาก FormComponent
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
>>>>>>> origin/master
  return (
    <div>
      <div className="container">
        <h1 style={{color:"red", textAlign:"center"}}>แอพบัญชีรายรับ-รายจ่าย</h1>
<<<<<<< HEAD
        <FormComponent/>
        <Transaction/>
=======
        <FormComponent onAddItem = {onAddNewItem}/>
        <Transaction items = {items}/>
>>>>>>> origin/master
      </div>
    </div>
  );
}

export default App;
