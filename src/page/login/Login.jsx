import { Typography } from "@material-ui/core";
import React from "react";
import { loginStyle } from "./styles";

function Login() {
  const classes = loginStyle();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
	 	 <img height="40px" width="auto" src="/images/tabi.png" />
	
	  </div>
	  <div className={classes.body}>
	
		  <div className={classes.login}>
			  <Typography className={classes.loginTypo}>LOGIN</Typography>
		  </div>
		  
		   
		  
		  

	  </div>
    </div>
	
  );
}
export default Login;
