import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider,createTheme,makeStyles,Button} from '@material-ui/core';
import Routes from "./routes";
function App() {

const useStyles = makeStyles({
  root:{
},
});

const theme = createTheme({
  palette: {
    primary:{
      main:'#5880A6',
    },
    secondary:{
      main:'#FFF',
    },
  },
});

const classes = useStyles();

  return( 
   
    <BrowserRouter>
    <Routes/>
  </BrowserRouter>
 
  );
  }
export default App;
 