import clsx from "clsx";
import useThemeStore from "stores/theme-store";
import { ISport } from "types";

import Avatar from "components/common/avatar";
import { faker } from "@faker-js/faker";

interface ITeamRankTableProps {
  sports: ISport;
}

const TeamRankTable: React.FunctionComponent<ITeamRankTableProps> = ({
  sports,
}) => {
  const { theme } = useThemeStore();

  if (sports.value === "foot-ball") {
    return (
      <div
        className={clsx(
          `overflow-x-auto`,
          theme === "light" && "bg-White",
          theme === "dark" && "bg-VeryDarkGreyDark",
        )}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="font-semibold">
            <tr>
              <th className=" px-6 py-3 text-left text-xs  uppercase leading-4 tracking-wider text-gray-500">
                순위
              </th>
              <th className=" px-6 py-3 text-left text-xs  uppercase leading-4 tracking-wider text-gray-500">
                팀
              </th>
              {/* <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"></th> */}
              <th className=" px-6 py-3 text-left text-xs uppercase leading-4 tracking-wider text-gray-500">
                승
              </th>
              <th className=" px-6 py-3 text-left text-xs  uppercase leading-4 tracking-wider text-gray-500">
                무
              </th>
              <th className=" px-6 py-3 text-left text-xs  uppercase leading-4 tracking-wider text-gray-500">
                패
              </th>
              <th className=" px-6 py-3 text-left text-xs  uppercase leading-4 tracking-wider text-gray-500">
                득실
              </th>
              <th className="hidden  px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500 sm:table-cell">
                최근 5경기
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((item, index) => (
              <tr key={index}>
                <td
                  className={clsx(
                    "whitespace-no-wrap border-b border-gray-200 px-6 py-4",
                    index + 1 > 0 &&
                      index + 1 <= 4 &&
                      "border-l-2 border-l-yellow-300",
                    index + 1 === 5 && "border-l-2 border-l-gray-300",
                  )}
                >
                  {index + 1}
                </td>
                <td className="whitespace-no-wrap flex items-center gap-3 border-b border-gray-200 px-6 py-4">
                  <Avatar imgUrl={faker.image.avatarGitHub()} size="md" />
                  <span>Man.Utd</span>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 ">
                  12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 ">
                  12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 ">
                  5
                </td>
                <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 ">
                  +5
                </td>
                <td className="whitespace-no-wrap hidden border-b border-gray-200 px-6 py-4 sm:table-cell">
                  <div className="flex gap-x-1">
                    {[1, 2, 3, 4, 5].map((el) => (
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-400 p-2 text-sm text-white">
                        {el}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <></>;
};

export default TeamRankTable;