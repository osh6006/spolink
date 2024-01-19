import clsx from "clsx";
import useThemeStore from "../stores/theme-store";

interface IRootContainerProps {
  children: React.ReactNode;
}

const RootContainer: React.FunctionComponent<IRootContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <main
      className={clsx(
        `flex h-[100dvh] w-[100dvw]`,
        theme === "light" ? "bg-LightGreyLightBg" : "bg-VeryDarkGreyDark",
      )}
    >
      {children}
    </main>
  );
};

export default RootContainer;