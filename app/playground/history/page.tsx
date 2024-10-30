import Backdrop from "@/components/commons/backdrop";

const history = () => {
  const data = {
    links: [{ title: "Playground", url: "/playground" }],
    title: "History",
  };
  return <Backdrop pageHeaderData={data}>{"Playground - History"}</Backdrop>;
};

export default history;
