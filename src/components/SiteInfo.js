import React from "react";
import "../css/siteinfo.css";
import LinkIcon from '@material-ui/icons/Link';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

export default function SiteInfo() {
    const value=useSelector(state=>state.value);
    let history=useHistory();

    const redirectToPolicy =() =>{
      window.location.href = value['link'];
    }
  return (
    <div className="site-card">
      <div className="flex-container">
        <div className="site-name">{value['name']}</div>
        <div className="date-collected">{value['date']}</div>
        
             <div className="visit-site" onClick={redirectToPolicy}>Privacy policy <LinkIcon /></div>
          
        
      </div>
    </div>
  );
}
