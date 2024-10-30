import Backdrop from "@/components/commons/backdrop";

export default function Home() {
  const data = {
    title: "Dashboard",
  };
  return <Backdrop pageHeaderData={data}>Dashboard</Backdrop>;
}
