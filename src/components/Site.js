import React, { useState, render } from "react";
import MainBlock from "./MainBlock";
import Dashboard from "./Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../actions";
import Navbar from "./Navbar";
import SearchInfo from "./SearchInfo";
export default function Site() {
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <MainBlock />
      {status ? <Dashboard /> : ''}
    </div>
  );
}
