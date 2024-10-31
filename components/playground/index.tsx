"use client";
import useStore from "@/stores/useStore";

const Playground = () => {
  const data = useStore((state) => state.data);
  const setData = useStore((state) => state.setData);
  return (
    <>
      <div>{data.page}</div>
      <button onClick={() => setData("Playground")}>click</button>
    </>
  );
};

export default Playground;
