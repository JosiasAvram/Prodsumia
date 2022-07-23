import React from "react";
import { Spin } from "@douyinfe/semi-ui";

const LoadingSpin = () => {
  return (
    <div>
      <Spin size="large" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpin;
