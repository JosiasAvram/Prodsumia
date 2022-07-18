import { Spin } from "@douyinfe/semi-ui";

const LoadingSpin = () => {
  return (
    <div className = 'flex flex-col items-center mt-10'>
      <Spin size="large" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpin