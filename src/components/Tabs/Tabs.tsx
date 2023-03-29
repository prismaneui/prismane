import { ReactNode, FC, useState } from "react";
// Components
import Animated from "../Animated";
// Types
import { PrismaneComponent } from "../../types";
// Hooks
import useId from "../../hooks/useId";
// Utils
import { strip } from "../../utils/internal";

interface TabsProps extends PrismaneComponent {
  options: OptionsProps[];
  action?: ReactNode;
  defaultValue?: string | number;
  variant: "underline" | "filled" | "smooth" | "outlined" | "raised";
  border?: boolean;
  handleChange?: Function;
}

interface OptionsProps {
  element: ReactNode;
  value: string | number;
}

const Tabs: FC<TabsProps> = ({
  action,
  options,
  defaultValue,
  variant,
  border,
  handleChange,
  className,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState<ReactNode>(
    defaultValue ? defaultValue : ""
  );

  const uuid = useId();

  return (
    <div
      className={strip(
        `flex items-center w-fit py-1 px-1 gap-4 overflow-hidden rounded-lg ${
          variant === "raised" ? "bg-base-200 dark:bg-base-800" : ""
        } ${!border ? "border-none" : ""} ${
          className ? className : ""
        } PrsmTabs-root`
      )}
      {...props}
    >
      {options.map((option: OptionsProps, index: number) => (
        <div
          className="h-full px-8 py-2 flex items-center justify-center w-fit rounded-md cursor-pointer transition-all relative PrsmTabs-box"
          onClick={() => {
            setCurrentValue(option.value);

            if (handleChange) {
              handleChange(option.value);
            }
          }}
          key={index}
        >
          <div
            className={strip(
              `flex z-10 transition-all duration-300 ${
                currentValue === option.value
                  ? `${
                      variant === "underline"
                        ? "text-primary-500 PrsmTabs-itemUnderline"
                        : ""
                    } ${
                      variant === "filled"
                        ? "text-white PrsmTabs-itemFilled"
                        : ""
                    } ${
                      variant === "smooth"
                        ? "text-primary-500 PrsmTabs-itemSmooth"
                        : ""
                    } ${
                      variant === "outlined"
                        ? "text-primary-500 PrsmTabs-itemOutlined"
                        : ""
                    } ${
                      variant === "raised"
                        ? "text-primary-500 PrsmTabs-itemRaised"
                        : ""
                    }`
                  : "text-base-700"
              } PrsmTabs-item`
            )}
          >
            {option.element}
          </div>
          {currentValue === option.value && (
            <Animated
              entry="none"
              className={strip(
                `flex !w-full h-full absolute top-0 left-0 rounded-md border-transparent ${
                  variant === "underline"
                    ? "bg-primary-500 dark:bg-primary-700 !h-1 !top-full PrsmTabs-itemBoxUnderline"
                    : ""
                } ${
                  variant === "filled"
                    ? "bg-primary-500 dark:bg-primary-700 PrsmTabs-itemBoxFilled"
                    : ""
                } ${
                  variant === "smooth"
                    ? "bg-primary-200 dark:bg-primary-700/20 PrsmTabs-itemBoxSmooth"
                    : ""
                } ${
                  variant === "outlined"
                    ? "!border-2 !border-primary-500 dark:!border-primary-700 PrsmTabs-itemBoxOutlined"
                    : ""
                } ${
                  variant === "raised"
                    ? "bg-white dark:bg-base-900 shadow-lg dark:shadow-base-900 PrsmTabs-itemBoxRaised"
                    : ""
                } PrsmTabs-itemBox`
              )}
              transition={{
                type: "spring",
                damping: 17,
                bounce: 10,
              }}
              layoutId={uuid}
            ></Animated>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
