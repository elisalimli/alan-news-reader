import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    marginLeft: "10px",
    minHeight: "400px",
    minWidth: "405px",
  },
  media: {
    height: 330,
  },
  author: {
    fontSize: "12px",
  },
  cardIndex: {
    background: "#3f51b5",
    color: "#fff",
    padding: "20px",
    width: "65px",
    textAlign: "center",
    borderRadius: "100%",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
});
