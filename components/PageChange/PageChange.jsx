// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import {
  primaryColor,
  whiteColor,
  title,
} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
  progress: {
    color: primaryColor[0],
    width: "6rem !important",
    height: "6rem !important",
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0",
  },
  iconWrapper: {
    display: "block",
  },
  title: {
    ...title,
    color: whiteColor,
  },
});

export default function PageChange({ path }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>Cargando contenido...</h4>
      </div>
    </div>
  );
}
