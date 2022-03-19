// List.jsx
import React, { useEffect, useState } from "react";
import { deletePost, getList } from "../lib/api/post";
import { useHistory, Link } from "react-router-dom";
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
import SpaceRow from "./commons/SpaceRow";
import { subString } from "../functions/functions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  fontWeight: {
    fontWeight: 900,
  },
});
const List = () => {
  const classes = useStyles();
  const [dataList, setDataList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data);
      setDataList(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async (item) => {
    console.log("click", item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      handleGetList();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>HOME</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/new")}
      >
        新規作成
      </Button>
      <SpaceRow height={20} />
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
                  {subString(item.detailInfo.favoriteFood, 10)}
                </TableCell>
                <TableCell align="center">
                  <Link to={`/edit/${item.id}`}>更新</Link>
                </TableCell>
                <TableCell align="center">
                  <Link to={`/post/${item.id}`}>詳細へ</Link>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(item)}
                  >
                    削除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default List;
