// Detail.jsx
import React, { useEffect, useState } from "react";
import { getDetail } from "../lib/api/post";
import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
  const [data, setData] = useState({
    name: "",
    neko_type: "",
    detailInfo: {
      favorite_food: "",
      favorite_toy: "",
    },
  });
  // { id: "1" }を取得する
  const query = useParams();
  // 戻るボタン用
  const history = useHistory(); // useEffectの副作用を使い、処理をもう一度実行させる

  // 画面描画時にidがundefinedだとデータ取得できないので
  // 依存配列にidを入れて、idがundifined => 1と更新された時に
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
      <div>ID：{data.id}</div>
      <div>名前：{data.name}</div>
      <div>猫種：{data.nekoType}</div>
      <div>好きな食べ物：{data.detailInfo.favoriteFood}</div>
      <div>好きなおもちゃ：{data.detailInfo.favoriteToy}</div>
      <button onClick={() => history.push("/")}>戻る</button>
    </>
  );
};
export default Detail;
