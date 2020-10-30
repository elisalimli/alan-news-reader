import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "75vh",
    padding: "10%",
    borderRadius: 7,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    padding: "0 3%",
    width: "100%",
    margin: 0,
  },
});
