import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IScheduleContainerProps {
  children: React.ReactNode;
}

const ScheduleContainer: React.FunctionComponent<IScheduleContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-md p-4 text-MediumGrey sm:p-8 2xl:mx-auto",
      )}
    >
      {children}
    </div>
  );
};

export default ScheduleContainer;
