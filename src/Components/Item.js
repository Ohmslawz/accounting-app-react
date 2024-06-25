import PropTypes from 'prop-types'; //ใช้ในการกำหนดประเภทของข้อมูล เพื่อกรองให้ข้อมูลที่รับมา ตรงกับประเภทข้อมูลที่ต้องการ

const Item=(props)=>{
    const {title,amount} = props //เป็นการ destructuring เพื่อให้เขียนใน tag HTML ได้ง่ายขึ้น
    return (
        <li>{title}<span>{amount} บาท</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired, //ระบุให้ข้อมูลนี้ต้องเป็นข้อความ และ ต้องป้อนข้อมูล
    amount:PropTypes.number.isRequired //ระบุให้ข้อมูลนี้ต้องเป็นตัวเลข และ ต้องป้อนข้อมูล
}
export default Item;