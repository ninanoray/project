"use client";
import { useDataStore } from "@/stores/useStore";
import { useShallow } from "zustand/react/shallow";

const Playground = () => {
  const [data, setPage] = useDataStore(
    useShallow((state) => [state.data, state.setPage])
  );
  return (
    <>
      <div>{data.page}</div>
      <button onClick={() => setPage("Playground")}>click</button>
    </>
  );
};

export default Playground;
