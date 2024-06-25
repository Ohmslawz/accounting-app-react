import { useContext } from "react"; //อีกวิธีที่ใช้ในการรับข้อมูล global state
import DataContext from "../Data/DataComponent";

const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext) //import global context จาก value ใน app.js ซึ่งเป็น object ที่มีหลายค่า โดยใช้ useContext
    return (
        <div>
            <p>รายรับรวม : {income} บาท</p>
            <p>รายจ่ายรวม : {expense} บาท</p>
        </div>
    )
}

export default ReportComponent;