import ComponentStatusContainer from "components/layouts/component-status-container";
import { useTeamRoot } from "./team-root";
import { useGlobalNewsQuery } from "hooks/services/quries/use-football-query";
import Loading from "components/common/loading";
import { useInfiniteScroll } from "hooks/use-infinite-scroll";
import { formatPublicDay } from "libs/day";

interface ITeamNewsProps {}

const TeamNews: React.FunctionComponent<ITeamNewsProps> = () => {
  const { teamInfo } = useTeamRoot();

  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetching } =
    useGlobalNewsQuery(teamInfo?.team.name!, true);

  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  });

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  if (isLoading) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="error" height="500">
        <h1>서버에서 데이터를 불러오던 도중 에러가 발생하였습니다.</h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <>
      {data && data?.length > 0 ? (
        <>
          <ul className="mt-4 grid grid-cols-1 gap-2 xl:grid-cols-2">
            {data?.map((el, i) => (
              <li
                onClick={() => openInNewTab(el.url)}
                key={i}
                className="flex cursor-pointer flex-col justify-around rounded-md border-2  border-MediumGrey px-5 py-3  transition-colors hover:border-Main hover:text-Main"
              >
                <div className="mb-2 flex  flex-col justify-end text-sm">
                  {/* <p>{el.author}</p>
                  <p>{el.source.name}</p> */}
                  <time>{formatPublicDay(el.publishedAt)}</time>
                </div>

                <div className="flex justify-between gap-x-4">
                  <img
                    src={el.urlToImage}
                    alt="thumbnail"
                    className="aspect-square h-32 rounded-md"
                  />
                  <div className="">
                    <h2 className="font-semibold">{el.title}</h2>
                    <p className="mt-2 text-sm">{el.description}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-end justify-between text-sm">
                  <p>{el.author}</p>
                  <p>{el.source.name}</p>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="my-2 flex h-20 items-center justify-center p-5"
            ref={observerRef}
          >
            {data && data?.length > 0 && isFetching ? (
              <div className="my-5">
                <Loading size="sm" />
              </div>
            ) : (
              <p>Load More...</p>
            )}
          </div>
        </>
      ) : (
        <>
          <ComponentStatusContainer
            height="300"
            state="error"
            classNames="mt-10 h-[350px]"
          >
            해당 키워드 기사가 존재하지 않습니다.
          </ComponentStatusContainer>
        </>
      )}
    </>
  );
};

export default TeamNews;