import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_DE/viacom-358518-Full-Image_GalleryBackground-de-DE-1501272675282._V7ea3c5f3b475ec3e9224ddb482756b00_SX1080_.jpg" />
      {props.message}
      <div>
        <span>{"like " + props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
