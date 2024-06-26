// import logo from './logo.svg';
// import './App.css';
import Transaction from "./Components/Transaction";
import './App.css'
import FormComponent from "./Components/FormComponent";
import {useState,useEffect,useReducer} from 'react' //นำ useState มาใช้
import DataContext from "./Data/DataComponent";
import ReportComponent from "./Components/ReportComponent";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"; //import เข้ามาเพื่อใช้งาน react router

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
    setReportIncome(incomes.toFixed(2)) //ใช้ฟังก์ชันนี้ในการกำหนดค่าเริ่มต้นของผลรวมรายรับ ซึ่งก็คือ incomes  และใส่ method .toFixed เพื่อให้แสดงทศนิยม 2 ตำแหน่ง
    setReportExpense(expenses.toFixed(2)) //ใช้ฟังก์ชันนี้ในการกำหนดค่าเริ่มต้นของผลรวมรายจ่าย ซึ่งก็คือ expenses
  },[items,reportIncome,reportExpense])

  // uncomment this to open reducer state
    // const [showReport,setshowReport] = useState(false)
    // const reducer = (state,action)=>{ //สร้าง reducer ขึ้นมาเพื่อกำหนด action ที่จะใช้เปลี่ยนแปลงค่าใน state
    //   switch(action.type){
    //     case "SHOW" :
    //       return setshowReport(true)
    //     case "HIDE" :
    //       return setshowReport(false)
    //   }
    // }
    // const [result,dispatch] = useReducer(reducer,showReport) //ตัวแปรใน reduce มี 2 ตัวที่ทำงานด้วยคือ reducer และ stateที่เราทำงานด้วย ในที่นี้คือ count โดย reducer จะส่งค่าที่เป็นอาเรย์กลับออกมา 2 ค่า 1.ผลจากการเปลี่ยนแปลงใน state (result) 2.ส่วนของการเรียกใช้ reducer เช่น เรียกใช้ add, sub หรือ clear

  return (
      <DataContext.Provider value={
        {
          income : reportIncome, //ส่งค่าผลรวมรายได้และรายจ่ายออกไปในฐานะ global context
          expense : reportExpense
        }
      }> {/*คลังข้อมูล DataContext ที่จะส่งข้อมูล value ไปยัง component อื่นๆ */}
        <div className="container">
          <h1 style={{color:"red", textAlign:"center"}}>แอปบัญชีรายรับ-รายจ่าย</h1>
          <Router> {/*สร้าง router ขึ้นมาเพื่อใช้ในการแยกหน้า ข้อมูลบัญชี กับ บันทึกข้อมูล และใช้ tag link ด้านล่างในการเชื่อมไปหาหน้านั้นๆ */}
            <div>
              <ul className="horizontal-menu">
                <li className="libtn">
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li className="libtn">
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              
              <Routes> {/*ใช้ Routes ในการทำหน้าที่เหมือน switch ที่กำหนดว่า path ไหนจะแสดงข้อมูล component อะไร */}
                <Route path='/' element={<ReportComponent/>}></Route>
                <Route path='/insert' element={<><FormComponent onAddItem = {onAddNewItem}/> <Transaction items = {items}/> </>}></Route>
              </Routes>
              
            </div>
          </Router>
          {/* <FormComponent onAddItem = {onAddNewItem}/> {/*onAddItem เป็น props ที่เชื่อมต่อกับ FormComponent เพื่อรับค่าจาก Formcomponent มาเก็บไว้ที่ onAddNewItem ซึ่งเป็นตัวแปรที่จะส่งค่าเข้าไปใน state items ผ่านฟังก์ชัน setItems เพื่อส่งค่าต่อไปยัง transaction component
          <Transaction items = {items}/> {/*สร้าง props ขึ้นมาเพื่อเชื่อมต่อกับ transaction component โดย items ตัวแรกคือ props ที่จะส่งไปให้ transaction component ซึ่งมีค่าเท่ากับ items ตัวที่ 2 ซึ่งเป็น state ใน add.js
          <ReportComponent/> {/*ระบุว่า {showReport && <ReportComponent/>} เพื่อ บอกว่า ReportComponent จะต้องทำงานร่วมกับ state showReport
          {/*<div className="button">
            <button className="button-in" onClick={()=>dispatch({type:"SHOW"})}>แสดง</button> {/*เพิ่ม event onClick เข้าไปโดยใช้ dispatch ในการกำหนดว่าปุ่มนี้จะใช้ action อะไร 
            <button className="button-in" onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
          </div>*/}
        </div>
      </DataContext.Provider>
  );
}

export default App;
