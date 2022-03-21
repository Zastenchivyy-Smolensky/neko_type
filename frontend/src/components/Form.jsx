// Form.jsx
import React from "react";
import SpaceRow from "./commons/SpaceRow";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Form = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { handleChange, handleSubmit, value, buttonType } = props;
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={(e) => handleSubmit(e)}
        style={{ marginRight: 10 }}
      >
        {buttonType}
      </Button>
      <Button variant="contained" onClick={() => history.push("/")}>
        戻る
      </Button>
      <SpaceRow height={20} />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          type="text"
          label="猫の名前"
          name="name"
          id="name"
          onChange={(e) => handleChange(e)}
          value={value.name || ""}
        />

        <TextField
          label="猫種"
          type="text"
          name="nekoType"
          id="nekoType"
          onChange={(e) => handleChange(e)}
          value={value.nekoType || ""}
        />

        <TextField
          label="好きな食べ物"
          type="text"
          name="favoriteFood"
          id="favoriteFood"
          onChange={(e) => handleChange(e)}
          value={value.favoriteFood || ""}
        />

        <TextField
          label="好きなおもちゃ"
          type="text"
          name="favoriteToy"
          id="favoriteToy"
          onChange={(e) => handleChange(e)}
          value={value.favoriteToy || ""}
        />
      </form>
    </>
  );
};
export default Form;
