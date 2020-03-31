import React,{useState, Component} from "react";
import "../css/AddSite.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useDispatch} from "react-redux";
import { changeStatus,setDashboardValue } from "../actions";
import SendIcon from '@material-ui/icons/Send';


export default function AddSite() {
    const [overlay,setOverlay]=useState(false);
    const toggleOverlay = ()=>{
        setOverlay(!overlay);
        console.log("overlay : ",overlay)
    }
  return (
    <div>
    
      {overlay ?<TextBoxOverlay overlay setOverlay={setOverlay}/>:''}
      <div className="add-site-button" onClick={toggleOverlay}>
        Add Site <AddCircleIcon />
      </div>
    </div>
  );
}

function TextBoxOverlay({overlay,setOverlay}){

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();

    const [textvalue,setTextValue]=useState('');
    const [flag,setFlag]=useState(0);
    const toggleOverlay = ()=>{
        setOverlay(!overlay);
        console.log("overlay : ",overlay)
    }
    const sendPolicy=()=>{
        if(textvalue.split(' ').length<300)
        {
          alert('There should be atleast 300 words in privacy policy');
          setTextValue('');
        }
        else{
          setFlag(1);
        }
        
    }

    React.useEffect(() => {
        
        if(flag===1)
        {

        toggleOverlay();
        dispatch(changeStatus(1));
          (async () => {
            const data = {
              "body":textvalue
            } 
          try{
            const response = await fetch(`${SERVER_URL}/addsite`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          const result = await response.json();
          dispatch(setDashboardValue(result));
          // console.log(result);
          dispatch(changeStatus(2));
          }catch(error)
          {
            console.log('%c Server Response Error ','color:red');
          } 
  
          
        })();

      }
      
    }, [flag]);

    return(
        <div className="overlay">
        <div className="overlay-box">
            <div className="overlay-box-block">
            <div className="overlay-close" onClick={toggleOverlay}>
                <HighlightOffIcon fontSize="inherit"  />
            </div>
            <div>
                Copy and Paste Privacy Policy in text box 
            </div>
            <div className="container-fluid">
              <textarea className="textarea" value={textvalue} onChange={e=>setTextValue(e.target.value)} />
            </div>
            

            
            <div className="overlay-privacy-policy-button" onClick={sendPolicy}>
                Analyse Policy <SendIcon />
            </div>
            </div>
           
        </div>
      </div>
    )
}
