import { useContext } from "react"; //อีกวิธีที่ใช้ในการรับข้อมูล global state
import DataContext from "../Data/DataComponent"; //import เพื่อรับค่า total income and expense มาจาก App.js
import './ReportComponent.css'

const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext) //import global context จาก value ใน app.js ซึ่งเป็น object ที่มีหลายค่า โดยใช้ useContext
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') //ฟังก์ชันที่ใช้ในการใส่ลูกน้ำให้กับตัวเลขเงิน
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>รายรับรวม</h4>
                    <p className="report-plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่ายรวม</h4>
                    <p className="report-minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent;