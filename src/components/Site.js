import React, { useState, render } from "react";
import MainBlock from "./MainBlock";
import { useSelector } from "react-redux";
import { Prompt } from 'react-router-dom';
import Navbar from "./Navbar";
import {useDispatch} from 'react-redux';
import { changeStatus } from '../actions'
import MiniDrawer from './Drawer';
import InfoTab from './InfoTab';

export default function Site() {
  
  const dispatch=useDispatch();
  const status = useSelector(state => state.status);
  const leavingSite=()=>{
    dispatch(changeStatus(0));
    console.log("%c leaving ","color:red");
  }

  
  return (
    <div className="App">
      <Prompt message={leavingSite} />
      <Navbar css={'navbar-shadow'}/>
      <MainBlock />
      {status>1 ? <InfoTab /> : ''}
      
      
    </div>
  );
}
