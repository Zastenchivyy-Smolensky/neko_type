// Detail.jsx
import React, { useEffect, useState } from "react";
import { getDetail } from "../lib/api/post";
import { useHistory, useParams } from "react-router-dom";

import {
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SpaceRow from "./commons/SpaceRow";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  fontWeight: {
    fontWeight: 900,
  },
});
const Detail = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    neko_type: "",
    detailInfo: {
      favorite_food: "",
      favorite_toy: "",
    },
  });
  const query = useParams();
  const history = useHistory();

  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>DETAIL</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        戻る
      </Button>

      <SpaceRow height={20} />
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="right" className={classes.fontWeight}>
                ID:
              </TableCell>
              <TableCell align="center">{data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.fontWeight}>
                名前:
              </TableCell>
              <TableCell align="center">{data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.fontWeight}>
                猫種:
              </TableCell>
              <TableCell align="center">{data.nekoType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.right}>
                好きな食べ物:
              </TableCell>
              <TableCell align="center">
                {data.detailInfo.favoriteFood}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" className={classes.fontWeight}>
                好きなおもちゃ：
              </TableCell>
              <TableCell align="center">
                {data.detailInfo.favoriteToy}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Detail;
