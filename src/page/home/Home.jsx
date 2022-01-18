import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { homeStyle } from "./styles";

function Home() {
  const classes = homeStyle();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img height="40px" width="auto" src="/images/tabi.png" />
        <Link to="/login">
          <Button className={classes.button} color="secondary">
            LOGIN
          </Button>
        </Link>
      </div>
      <div className={classes.body}>
        <img height="160px" width="380px" src="/images/tabi_2.png" />

        <Button className={classes.body_button} variant="contained">
          JORNADA ACADÊMICA
        </Button>
        <Typography className={classes.body_typo}>
          Programa de Pós-Graduação em Ciências Sociais Aplicadas
        </Typography>
        <img src="/images/Logo_State_University_of_Ponta_Grossa 1.png" />
      </div>
      <div className={classes.bottom_header}>@2022 tabi</div>
    </div>
  );
}

export default Home;
