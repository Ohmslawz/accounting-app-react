import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid'; //import มาเพื่อสร้าง unique id

const Transaction =(props)=>{
    const {items} = props //สร้างตัวแปรขึ้นมารับข้อมูลจาก App.js
    return (
      <ul className="item-list">
        {items.map((element)=>{
            // เขียนแบบที่ 1 return <Item title ={e.title} amount={e.amount}/>
            return <Item {...element} key={element.id}/> //เขียนโดยใช้ spread operator ส่วน key เป็นการกำหนดค่าเพื่อให้ระบบจำแนกว่า component ไหนเป็น component ไหนได้
        })}
      </ul>
    );
  }

  export default Transaction;