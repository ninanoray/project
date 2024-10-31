import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Resetting multiple stores at once
const storeResetFns = new Set<() => void>();

const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

type State = {
  data: { page: string };
};
type Actions = {
  setPage: (data: string) => void;
  reset: () => void;
};
type DataStore = State & Actions;

const initialState: State = { data: { page: "" } };

export const useDataStore = create<DataStore>()(
  immer(
    persist(
      (set) => ({
        ...initialState,
        setPage: (data: string) =>
          set((state: State) => {
            state.data.page = data;
          }),
        reset: () => set(initialState),
      }),
      {
        name: "dataStorage",
      }
    )
  )
);

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
