import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import PrintComponent from './PrintComponent'

export default function Collection({label}) {
    const value=useSelector(state=>state.value);
    const [flag,setFlag] = useState(false);
    const [sentences,setSentences]=useState([]);
    useEffect(()=>{
        const output=value['output']
        setSentences(output.filter((a)=>a[1].includes(label)).map(a=> a[0]));
    },[flag]);
    return (
        <div>
            {sentences.map((sentence,index)=><PrintComponent key={index} sentence={sentence} />)}
        </div>
    )
}
