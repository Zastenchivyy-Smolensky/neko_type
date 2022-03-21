// /src/components/commons/ListTable.jsx
import React from "react";
import { Link } from "react-router-dom";
// style
import {
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// functions
import { subString } from "../../functions/functions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  fontWeight: {
    fontWeight: 900,
  },
});

const ListTable = (props) => {
  const classes = useStyles();
  const { dataList, handleDelete, currentUser } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.fontWeight}>
              名前
            </TableCell>
            <TableCell align="center" className={classes.fontWeight}>
              猫種
            </TableCell>
            <TableCell align="center" className={classes.fontWeight}>
              好きな食べ物
            </TableCell>
            <TableCell align="center" className={classes.fontWeight}>
              好きなおもちゃ
            </TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((item, index) => (
            <TableRow key={index}>
              <TableCell align="center">{subString(item.name, 15)}</TableCell>
              <TableCell align="center">
                {subString(item.nekoType, 15)}
              </TableCell>
              <TableCell align="center">
                {subString(item.detailInfo.favoriteFood, 10)}
              </TableCell>
              <TableCell align="center">
                {subString(item.detailInfo.favoriteToy, 10)}
              </TableCell>
              {currentUser.id === item.userId ? (
                <TableCell align="center">
                  <Link to={`/edit/${item.id}`}>更新</Link>
                </TableCell>
              ) : (
                <TableCell align="center"></TableCell>
              )}
              <TableCell align="center">
                <Link to={`/post/${item.id}`}>詳細へ</Link>
              </TableCell>
              {currentUser.id === item.userId ? (
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(item)}
                  >
                    削除
                  </Button>
                </TableCell>
              ) : (
                <TableCell align="center"></TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ListTable;
