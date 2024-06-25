// import logo from './logo.svg';
// import './App.css';
import Transaction from "./Components/Transaction";
import './App.css'
import FormComponent from "./Components/FormComponent";
import {useState} from 'react' //นำ useState มาใช้
import { useEffect } from "react";
import DataContext from "./Data/DataComponent";
import ReportComponent from "./Components/ReportComponent";

function App() {
  const Design = {color:"darkblue", textAlign:"center"} //สร้างเป็นตัวแปรแล้วอิมพอตเข้าไปใน style ได้
  const [items,setItems] = useState([]) //สร้าง state ขึ้นมาเพื่อส่งค่าต่อให้ transaction component

  const [reportIncome,setReportIncome] = useState(0) //สร้าง state ขึ้นมาเพื่อรับค่าสำหรับการคำนวนรายรับรวม
  const [reportExpense,setReportExpense] = useState(0) //สร้าง state ขึ้นมาเพื่อรับค่าสำหรับการคำนวนรายจ่ายรวม

  const onAddNewItem = (newItem)=>{ //เป็นตัวแปรที่รับค่าข้อมูลที่ส่งมาจาก FormComponent
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
  useEffect(()=>{//ใช้ useEffect ในการตรวจจับตัวแปร items ว่าค่าที่รับมา ตัวไหนเป็นเลขบวกและเลขลบ เพื่อเอาไปใช้ในการคำนวฯณรายรับรวม และรายจ่ายรวม
    const amounts = items.map(items=>items.amount) //สร้างตัวแปรมาเก็บค่า amount โดยใช้ map เพื่อที่จะดึงเฉพาะข้อมูลที่เป็นตัวเลขมาใช้
    const incomes = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0) //ใช้ฟิลเตอร์ในการสร้างข้อมูลที่ต้องการ ในกรณีนี้คือค่าบวก และใช้ reduce เพื่อคำนวณผลรวมของค่าใน array ทั้งหมด เพื่อเอามาคำนวณรายรับ
    const expenses = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1 //ใช้ฟิลเตอร์ในการสร้างข้อมูลที่ต้องการ ในกรณีนี้คือค่าบวก และใช้ reduce เพื่อคำนวณผลรวมของค่าใน array ทั้งหมดเพื่อเอามาคำนวณรายจ่าย แต่รายจ่ายรวมออกมาแล้วมีค่าเป็นลบซึ่งอยากได้ผลรวมเป็นค่าบวกจึงต้องเอามาคูณ-1 เพื่อแปลงค่า
    setReportIncome(incomes) //ใช้ฟังก์ชันนี้ในการกำหนดค่าเริ่มต้นของผลรวมรายรับ ซึ่งก็คือ incomes 
    setReportExpense(expenses) //ใช้ฟังก์ชันนี้ในการกำหนดค่าเริ่มต้นของผลรวมรายจ่าย ซึ่งก็คือ expenses
  },[items,reportIncome,reportExpense])
  return (
      <DataContext.Provider value={
        {
          income : reportIncome, //ส่งค่าผลรวมรายได้และรายจ่ายออกไปในฐานะ global context
          expense : reportExpense
        }
      }> {/*คลังข้อมูล DataContext ที่จะส่งข้อมูล value ไปยัง component อื่นๆ */}
        <div className="container">
          <h1 style={{color:"red", textAlign:"center"}}>แอพบัญชีรายรับ-รายจ่าย</h1>
          <FormComponent onAddItem = {onAddNewItem}/> {/*onAddItem เป็น props ที่เชื่อมต่อกับ FormComponent เพื่อรับค่าจาก Formcomponent มาเก็บไว้ที่ onAddNewItem ซึ่งเป็นตัวแปรที่จะส่งค่าเข้าไปใน state items ผ่านฟังก์ชัน setItems เพื่อส่งค่าต่อไปยัง transaction component*/}
          <Transaction items = {items}/> {/*สร้าง props ขึ้นมาเพื่อเชื่อมต่อกับ transaction component โดย items ตัวแรกคือ props ที่จะส่งไปให้ transaction component ซึ่งมีค่าเท่ากับ items ตัวที่ 2 ซึ่งเป็น state ใน add.js  */}
          <ReportComponent/>
        </div>
      </DataContext.Provider>
  );
}

export default App;
