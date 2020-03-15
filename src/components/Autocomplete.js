import React,{useState,useRef} from "react";
import fetch from 'cross-fetch';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch} from 'react-redux';
import { changeStatus } from '../actions'

import "../css/font.css";
import "../css/site.css";

export default function SearchBox() {
  

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const [searchBoxValue,searchBoxValueChange]=useState([]);
  const dispatch=useDispatch();

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map(key => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
        if(searchBoxValue.length!=0)
        {
          console.log(searchBoxValue[1]);
          console.log('%c Call to fetch','color:green')
          dispatch(changeStatus());
        }
    }
  }, [open]);

  const logConsole=()=>{
    
    const data=searchBoxValue[1];
    
  }
  
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
      getOptionSelected={(option, value) => option.name === value.name }
      getOptionLabel={option => option.name}
      options={options}
      loading={loading}
      onChange={(e,v)=>searchBoxValueChange([e,v])}
      renderInput={params => (
        <TextField
          {...params}
          label="Type Here ..."
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    </div>
    
  );
}
