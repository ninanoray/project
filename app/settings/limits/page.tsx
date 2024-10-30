import Backdrop from "@/components/commons/backdrop";

const limits = () => {
  const data = {
    links: [{ title: "Settings", url: "/settings/general" }],
    title: "Limits",
  };
  return <Backdrop pageHeaderData={data}>{"Settings - Limits"}</Backdrop>;
};

export default limits;
