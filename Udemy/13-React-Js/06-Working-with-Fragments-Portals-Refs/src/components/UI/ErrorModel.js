import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrops = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <div>{props.message}</div>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrops onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          title={props.type.title}
          message={props.type.message}
          onConfirm={props.type.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
