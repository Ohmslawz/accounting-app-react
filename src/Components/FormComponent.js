import './FormComponent.css'
import {useState,useEffect} from 'react' //นำ useState มาใช้
import { v4 as uuidv4 } from 'uuid'; //import มาเพื่อสร้าง unique id

const FormComponent = (props) =>{
    
    const [title,setTitle] = useState('') //ใส่ค่าเริ่มต้นเป็นค่าว่าง
    const [amount,setAmount] = useState(0) //ใส่ค่าเริ่มต้นเป็นเลข 0
    const [formValid,setFormValid] = useState(false) //เป็น state ที่ใช้ในการตรวจสอบว่า form เป็นไปตามเงื่อนไขที่กำหนดมั้ย เช่น กรณี หากไม่เติมชื่อรายการหรือจำนวนเงินเป็นศูนย์ จะไม่สามารถกด เพิ่มข้อมูล ได้

    const inputTitle = (event)=>{ //เป็นการสร้างฟังก์ชันเพื่อใช้ในการกดปุ่ม
        setTitle(event.target.value) //ใช้ event.target.value ในการรับค่าที่ใส่เข้ามา แล้วเอาค่าที่รับมาเก็บในฟังก์ชัน SetTitle เพราะเป็นฟังก์ชันที่ใช้บันทึกค่าลงใน state title
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value) //หลักการเดียวกับ setTitle แต่เปลี่ยนเป็น setAmount
    }
    const saveItem =(event)=>{
        event.preventDefault();//ใช้ในการเซตให้เมื่อบันทึกข้อมูลแล้วไม่เซตเป็นค่าว่าง
        const itemData = { //สร้าง object ขึ้นมาเพื่อเก็บค่า state title และ amount เป็นก้อนเดียวกัน
            id:uuidv4(),
            title:title,
            amount:Number(amount) //ค่าที่รับมาใน object เป็น string จึงต้องใส่ number เพื่อแปลงค่าเป็นตัวเลข เพราะเรากำหนดใน item.js ว่าค่าที่รับมาต้องเป็นตัวเลขก่อนจะนำไปแสดงค่าที่เบราเซอร์
        }
        props.onAddItem(itemData) //สร้าง props เพื่อส่งตัวแปร itemData ซึ่งเป็น object ที่เก็บข้อมูล title and amount ไปที่ app.js
        setTitle('') //ใส่เพื่อให้set ค่าใน state title เป็นค่าว่างหลังจากกดเพิ่มข้อมูล
        setAmount('')
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0 //เมื่อลบช่องว่างซ้ายขวาออกแล้ว หาก title หรือค่าชื่อรายที่ป้อนเข้ามาไม่เป็นค่าว่าง และ amount ไม่เท่ากับ 0
        setFormValid(checkData) //ใช้ formValid ในการเช็คข้อมูลในตัวแปร checkData ว่าเป็นจริงหรือไม่ ถ้าจริงก็เก็บค่าการเปลี่ยนแปลงไว้ใน useEffect
    },[title,amount])
    
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent