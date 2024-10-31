import { produce } from "immer";
import { create } from "zustand";

// store의 타입을 정의해준다.

interface State {
  data: { page: string };
}
interface Store extends State {
  setData: (newData: string) => void;
}

// store를 create
const useStore = create<Store>((set) => ({
  data: { page: "" },
  setData: (newData: string) =>
    set(
      produce((state: State) => {
        state.data.page = newData;
      })
    ),
}));

export default useStore;
