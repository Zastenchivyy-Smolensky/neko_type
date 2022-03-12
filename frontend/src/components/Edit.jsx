// Edit.jsx
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updatePost, getDetail } from "../lib/api/post";
import FormBody from "./Form";

const Edit = () => {
  const [value, setValue] = useState({
    name: "",
    nekoType: "",
    // 追加
    favoriteFood: "",
    // 追加
    favoriteToy: "",
  });

  const query = useParams();

  const history = useHistory();

  useEffect(() => {
    handleGetData(query);
  }, [query]);

  const handleGetData = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setValue({
        name: res.data.name,
        nekoType: res.data.nekoType,
        // 追加
        favoriteFood: res.data.detailInfo.favoriteFood,
        // 追加
        favoriteToy: res.data.detailInfo.favoriteToy,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 追加
    const params = generateParams();
    try {
      const res = await updatePost(query.id, params);
      console.log(res);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  // パラメータのオブジェクト構造を加工
  const generateParams = () => {
    const params = {
      name: value.name,
      nekoType: value.nekoType,
      detailInfo: {
        favoriteFood: value.favoriteFood,
        favoriteToy: value.favoriteToy,
      },
    };
    return params;
  };

  return (
    <>
      <h1>Edit</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="更新"
      />
    </>
  );
};
export default Edit;
