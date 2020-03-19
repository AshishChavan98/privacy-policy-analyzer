import React, { useState, useRef } from "react";
import fetch from "cross-fetch";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus,setDashboardValue } from "../actions";
import "../css/font.css";
import "../css/site.css";

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export default function SearchBox() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [open, setOpen] = React.useState(false);
  const [request, requestInfo] = useState(false);
  const [options, setOptions] = React.useState([]);
  const [temp,updateTemp]=useState('');
  const loading = open && options.length === 0;
  const [searchBoxValue, searchBoxValueChange] = useState([]);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {

      try{
        const response = await fetch(`${SERVER_URL}/getsites`);
      console.log("%c Fetch request use-effect", "color:pink");
      const result = await response.json();
      if (active) {
        
        setOptions(result);
      }
      }catch(error)
      {
        console.log('%c Server Response Error','color:red');
      }
      
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (searchBoxValue[1] !== undefined && searchBoxValue[1] !==null) {

      console.log('searchbox value ',searchBoxValue[1]);
      dispatch(changeStatus(1));
        (async () => {
          const data = {
            "body":searchBoxValue[1]
          }

        try{
          const response = await fetch(`${SERVER_URL}/ml`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        dispatch(setDashboardValue(result));
        console.log('%c Dispatch called :','color:red');

        dispatch(changeStatus(2));
        }catch(error)
        {
          console.log('%c Server Response Error ','color:red');
        } 

        
      })();
    }
  }, [searchBoxValue[1]]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
      sendData();
    }
  }, [open]);

  const sendData = () => {
    if (searchBoxValue.length != 0) {
      
      requestInfo(!request);
    }
  };

  return (
    <div className="search-box">
      <Autocomplete
        id="asynchronous-demo"
        autoHighlight={true}
        style={{ width: 500 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option === value}
        getOptionLabel={option => option}
        options={options}
        loading={loading}
        onChange={(e, v) => searchBoxValueChange([e, v])}
        renderInput={params => (
          <TextField
            {...params}
            label="Type Here ..."
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        )}
      />
    </div>
  );
}
