import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchInfo from "./SearchInfo";
import Loading from './Loading';
import SearchBox from "./Autocomplete";
import AddSite from './AddSite';
import "../css/bootstrap-4.3.1-dist/css/bootstrap.min.css";
import { changeStatus } from "../actions";

export default function MainBlock() {
  const status = useSelector(state => state.status);

  const showComponent=()=>{
    if(status===0)
    {
      return <SearchInfo />
    
    }
    else if(status===1)
    {
      return <Loading />
    }
    else{
      return ''
    }
  }
  return (
    <div className="container-fluid main-block">
      <div className="contents">
        <div className="select-site">Select site</div>

        <div>
          <SearchBox />
         
        </div>

        <div>
          <AddSite />
        </div>
      </div>
      {/* {status ? "" : <SearchInfo />} */}
      { showComponent() }
    </div>
  );
}
