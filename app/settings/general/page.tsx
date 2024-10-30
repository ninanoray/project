import Backdrop from "@/components/commons/backdrop";

const general = () => {
  const data = {
    links: [{ title: "Settings", url: "/settings/general" }],
    title: "General",
  };
  return <Backdrop pageHeaderData={data}>{"Settings - General"}</Backdrop>;
};

export default general;
