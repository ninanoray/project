"use client";
import useStore from "@/stores/useStore";

const Dashboard = () => {
  const { data, setData } = useStore();
  return (
    <>
      <div>{data.page}</div>
      <button onClick={() => setData("Dashboard")}>click</button>
    </>
  );
};

export default Dashboard;
