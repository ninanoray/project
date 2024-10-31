import Backdrop from "@/components/commons/backdrop";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const data = {
    title: "Dashboard",
  };
  return (
    <Backdrop pageHeaderData={data}>
      <Dashboard />
    </Backdrop>
  );
}
