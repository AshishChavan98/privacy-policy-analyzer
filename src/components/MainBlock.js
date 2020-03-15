import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchInfo from "./SearchInfo";

import SearchBox from "./Autocomplete";
import "../css/bootstrap-4.3.1-dist/css/bootstrap.min.css";

export default function MainBlock() {

  const status = useSelector(state => state.status);

  return (
    <div className="container-fluid main-block">
      <div className="contents">
        <div className="select-site">Select site</div>

        <div>
          <SearchBox />
        </div>

        
      </div>
      {status ? '':<SearchInfo />}
    </div>
  );
}
