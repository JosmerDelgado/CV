import React from "react";

const Blog = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "calc(100vh - 75px)"
      }}
    >
      <div
        style={{
          flex: "1",
          backgroundColor: "blue",
          backgroundImage:
            "url(http://s3.amazonaws.com/snd-store/a/26553114/02_02_18_508408464_aab_560x292.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
    </div>
  );
};
export default Blog;
