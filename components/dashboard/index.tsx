"use client";
import getPosts from "@/app/(home)/getPosts";
import useStore, { useDataStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const page = useStore(useDataStore, (state) => state.data.page);
  const setPage = useDataStore((state) => state.setPage);

  // useQuery는 Posts뿐만이 아니라 더 깊은 자식에서도 똑같이 사용할 수 있다.
  // data가 이미 캐시에 있기 때문에 어느 방식에서든 데이터는 즉시 사용 가능하다.
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  //   const clientValue = useQuery({ queryKey: ["poosts"], queryFn: getPosts });

  //   if (!page) return null;
  return (
    <>
      <div>{page}</div>
      <button onClick={() => setPage("Dashboard")}>click</button>
      <div className="flex flex-row">
        <div>
          {data?.map(({ title, id }) => {
            return <div key={id}>{title}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
