import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './AccommodationInfo_2.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';


export const AccommodationInfo_2 = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);
  const getUserInfo = (id) => {
    axios({
        method : "GET",
        url: "http://localhost:8080/admin/getuser/" + id,
      }).then( res => {
            setData(res.data);
            console.log(data);
      });
  }
  useEffect(()=> {
    (async () => {
        await getUserInfo(id);
    })();
  },[]);

  return (
    <div className='AccommodationPartner-info-2'>
        <div className='Head'>
            <h2>
              <a href="/accommodation-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์ที่พัก / ข้อมูล-2
            </h2>
        </div>
        <div className='Container'>
            <div className='Left'>
                <h3>ชื่อที่พัก &nbsp;&nbsp; Perfect For Families</h3>
                <div className='Detail'>
                    <h4>คำบรรยายที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'พื้นที่กว้างขวาง วิวสวยงาม อากาศเย็นสบาย'}</div></li>
                    </ul>
                    <h4>ที่เที่ยวและกิจกรรมแนะนำในย่านที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'เดิน 5 นาทีถึงร้านอาหารชื่อดัง '}</div></li>
                    </ul>
                    <h4>กฎการเข้าพัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'งดสูบบุหรี่บริเวณในบ้าน'}</div></li>
                    </ul>
                    <h4>วิธีเดินทางไปที่พักและวิธีเช็คอินที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'นั่งรถไฟฟ้าไปสถานีตลาดพลู'}</div></li>
                    </ul>           
                </div>
            </div> 
            <div className='Right'>
                <div className='Map'>
                    <h3>บริการและสิ่งอำนวยความสะดวก</h3>
                    <h4>สิ่งอำนวยความสะดวกในที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'ผ้าเช็ดตัว'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'เครื่องปรับอากาศ'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'ระเบียงหรือชานห้อง'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'โต๊ะ/พื้นที่ทำงาน'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'เปิด/ล็อคที่พักโดยไม่ต้องใช้กุญแจ'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'ที่พักอยู่ใกล้ชายหาด'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'ที่จอดรถ (ฟรี)'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'อินเทอร์เน็ต Wi-Fi (ฟรี)'}</div></li>
                    </ul> 
                </div>
            </div>   
        </div>       
        <div className='Footer'>
            <Button className='Button' id='Back' href={'/accommodation-partner/info-1/' + id}>ย้อนกลับ</Button>
            <Button className='Button' id='Next' href={'/accommodation-partner/info-3/' + id}><span>ถัดไป</span></Button>
        </div>    
    </div>
  )
}