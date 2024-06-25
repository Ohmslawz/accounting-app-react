import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid'; //import มาเพื่อสร้าง unique id

const Transaction =()=>{
    const data =[
        {title:"ค่ารักษาพยาบาล",amount:2000},
        {title:"ค่าน้ำมัน",amount:5000},
        {title:"ค่าเช่าบ้าน",amount:25000},
        {title:"ค่าเสื้อผ้า",amount:1000},
    ]
    return (
      <ul className="item-list">
        {data.map((element)=>{
            // เขียนแบบที่ 1 return <Item title ={e.title} amount={e.amount}/>
            return <Item {...element} key={uuidv4()}/> //เขียนโดยใช้ spread operator ส่วน key เป็นการกำหนดค่าเพื่อให้ระบบจำแนกว่า component ไหนเป็น component ไหนได้
        })}
      </ul>
    );
  }

  export default Transaction;