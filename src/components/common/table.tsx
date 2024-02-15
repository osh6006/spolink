import { Table as TableType, flexRender } from "@tanstack/react-table";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import Loading from "./loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

interface ITableProps {
  isLoading?: boolean;
  isError?: boolean;
  tableData: TableType<any>;
}

const Table: React.FunctionComponent<ITableProps> = ({
  tableData,
  isError,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <ComponentStatusContainer state="loading" height="430">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="error" height="430">
        서버에서 오류가 발생했어요 🤮
      </ComponentStatusContainer>
    );
  }

  return (
    <>
      <table className="w-full border-separate rounded-md border border-MediumGrey">
        <thead className="">
          {tableData.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-MediumGrey uppercase"
            >
              {headerGroup.headers.map((header) => {
                const breakpoints: any = header.column.columnDef.meta;
                return (
                  <th
                    key={header.id}
                    className={clsx(
                      "whitespace-nowrap px-6 py-3 text-left leading-4 tracking-wider",
                      breakpoints?.className,
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none flex min-w-[36px]"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: (
                            <span className="pl-1 text-Main">
                              <ChevronUp size={20} />
                            </span>
                          ),
                          desc: (
                            <span className="pl-1 text-Main">
                              <ChevronDown size={20} />
                            </span>
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {tableData.getRowModel().rows.map((row) => (
            <tr key={row.id} className="relative">
              {row.getVisibleCells().map((cell) => {
                const breakpoints: any = cell.column.columnDef.meta;

                return (
                  <td
                    key={cell.id}
                    className={clsx("px-6 py-3", breakpoints?.className)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
