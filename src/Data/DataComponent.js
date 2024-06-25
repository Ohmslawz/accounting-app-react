import { createContext } from "react"; //เป็นฟังก์ชันที่ใช้ในการสร้าง object ที่จัดการข้อมูลแบบ global 

const DataContext = createContext() //DataContext เป็นคลังข้อมูลที่ใช้ฟังก์ชัน createContext ในการกระจายข้อมูลไป component อื่นๆ

export default DataContext