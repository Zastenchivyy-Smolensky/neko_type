// Form.jsx
import React from "react";

const Form = (props) => {
  const { handleChange, handleSubmit, value, buttonType } = props;
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">猫の名前：</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleChange(e)}
            value={value.name || ""}
          />
        </div>
        <div>
          <label htmlFor="nekoType">猫種</label>
          <input
            type="text"
            name="nekoType"
            id="nekoType"
            onChange={(e) => handleChange(e)}
            value={value.nekoType || ""}
          />
        </div>
        {/* 追加 */}
        <div>
          <label htmlFor="nekoType">好きな食べ物</label>
          <input
            type="text"
            name="favoriteFood"
            id="favoriteFood"
            onChange={(e) => handleChange(e)}
            value={value.favoriteFood || ""}
          />
        </div>
        <div>
          <label htmlFor="nekoType">好きなおもちゃ</label>
          <input
            type="text"
            name="favoriteToy"
            id="favoriteToy"
            onChange={(e) => handleChange(e)}
            value={value.favoriteToy || ""}
          />
        </div>
        {/* ここまで */}
        <input
          type="submit"
          value={buttonType}
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </>
  );
};
export default Form;
