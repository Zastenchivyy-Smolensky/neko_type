// New.jsx
import React, { useState } from "react";
import FormBody from "./Form";
import { createPost } from "../lib/api/post";
import { useHistory } from "react-router-dom";

const New = () => {
  const [value, setValue] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const params = generateParams();
    try {
      const res = await createPost(params);
      console.log(res);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
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
      <h1>NEW</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="登録"
      />
    </>
  );
};
export default New;
