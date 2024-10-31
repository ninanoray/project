import Backdrop from "@/components/commons/backdrop";
import Playground from "@/components/playground";

const playground = () => {
  const data = {
    title: "Playground",
  };
  return (
    <Backdrop pageHeaderData={data}>
      <Playground />
    </Backdrop>
  );
};

export default playground;
