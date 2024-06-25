import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //อิมพอต App.js มาที่ไฟล์นี้ แล้วเอาไปเชื่อมกับ index.html ผ่าน id: root ข้างล่าง
import reportWebVitals from './reportWebVitals';

//สร้าง functional Component
// function HelloComponent(){
//   return <h1>Hello Ohmslaw</h1>
// }

// //สร้าง class Component
// class HelloComponent2 extends React.Component{
//   render(){
//     return <h1>Hello Ohmslaw2</h1>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root')); //สร้างรากของ react Tree ที่จะแสดงผลลงบน DOM ที่หน้าเว็บ
root.render( //ใช้เพื่อแสดงผล react element ลงใน root ที่สร้างขึ้นด้านบน
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
