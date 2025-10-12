import React,{useState} from 'react'
import  './style.css'
import { FaSearch } from 'react-icons/fa';


const HiddenSearch = () => {
    const [showinput, setshowinput] = useState(false);
    const [bgcolor,setbgcolor] = useState('white');

    const handleclick=(e)=>{
        setbgcolor('#1a1a1a')

        if(e.target.className === 'container'){
            setshowinput(false)
            setbgcolor('#fff')
        }

    }

  return (
    <section 
    className='container'
    style={{backgroundColor:bgcolor}}
    onClick={handleclick}
    >

        {showinput ? (
            <input type='text' placeholder='search.....'/>
        ) :
        (
            <FaSearch onClick={()=>setshowinput(true)}/>
        )}

    </section>
  )
}

export default HiddenSearch;