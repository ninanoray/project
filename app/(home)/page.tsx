import Backdrop from "@/components/commons/backdrop";
import Dashboard from "@/components/dashboard";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getPosts from "./getPosts";

const data = {
  title: "Dashboard",
};

export default async function Home() {
  const queryClient = new QueryClient();
  //prefetchQuery를 통해 데이터를 비동기로 prefetch, 데이터는 QueryClient에 캐싱
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <Backdrop pageHeaderData={data}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Dashboard />
      </HydrationBoundary>
    </Backdrop>
  );
}
