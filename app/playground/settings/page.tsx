import Backdrop from "@/components/commons/backdrop";

const settings = () => {
  const data = {
    links: [{ title: "Playground", url: "/playground" }],
    title: "Settings",
  };
  return <Backdrop pageHeaderData={data}>{"Playground - Settings"}</Backdrop>;
};

export default settings;
