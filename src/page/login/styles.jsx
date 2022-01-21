import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: "#",
        height: "auto",
      },
      header:{
        height: "70px",
        backgroundColor: "#5880A6",
        boxShadow: "0px 4px 4px rgba(88, 128, 166, 0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 54px",
      },
      body:{
        backgroundColor:"#E5E5E5",
        padding: "320px 400px",
        display: "flex",
        height:"100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
      login: {
          backgroundColor:"#99C8F3",
          padding: "180px 250px",
          borderRadius:"40px",  
      },

     loginTypo:{
      fontFamily: "Be Vietnam Pro",
      fontWeight: "bold",
      fontSize: "30px", 
      
  
     },


      
})

export { useStyles as loginStyle };