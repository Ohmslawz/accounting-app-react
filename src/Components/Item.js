import PropTypes from 'prop-types'; //ใช้ในการกำหนดประเภทของข้อมูล เพื่อกรองให้ข้อมูลที่รับมา ตรงกับประเภทข้อมูลที่ต้องการ
import './Item.css'

const Item=(props)=>{
    const {title,amount} = props //เป็นการ destructuring เพื่อให้เขียนใน tag HTML ได้ง่ายขึ้น
    const status = amount<0 ?"expense":"income" //สร้าง class ขึ้นมาเพื่อสร้างเงื่อนไขว่า ถ้า input ที่รับมาเป็นรายได้หรือรายจ่าย เพื่อนำไปใช้ในการตกแต่งต่อไป
    const symbol = amount<0 ?"-":"+"
    const amountColor = amount<0 ?"redFont":"greenFont"
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') //ฟังก์ชันที่ใช้ในการใส่ลูกน้ำให้กับตัวเลขเงิน
    }
    return (
        <li className={status}>{title} <span className={amountColor}> {symbol}{formatNumber(Math.abs(amount))} บาท</span></li>
    );
}
Item.propTypes={
    title:PropTypes.string.isRequired, //ระบุให้ข้อมูลนี้ต้องเป็นข้อความ และ ต้องป้อนข้อมูล
    amount:PropTypes.number.isRequired //ระบุให้ข้อมูลนี้ต้องเป็นตัวเลข และ ต้องป้อนข้อมูล
}
export default Item;