import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#DFEAF4",
    height: "auto",
  },
  header: {
    height: "70px",
    backgroundColor: "#5880A6",
    boxShadow: "0px 4px 4px rgba(88, 128, 166, 0.25)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 54px",
  },

  button: {
    fontFamily: "Be Vietnam Pro",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "53px",
  },
  body: {
    padding: "90px 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  body_button: {
    fontSize: "26px",
    width: "380px",
    height: "48px",
    background: "#F2B4B1",
    borderRadius: "83px",
    fontWeight: "bold",
    color: "#FFFFFF",
    margin: "30px",
    fontFamily: "Aref Ruqaa",
  },

  body_typo: {
    fontFamily: "Be Vietnam",
    fontSize: "24px",
    padding: "40px",
    color: "#303030",
    width: "1000px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40px",
    backgroundColor: "#5880A6",
    fontFamily: "Be Vietnam",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "35px",
    color: "#000000",


  },
});

export { useStyles as homeStyle };
