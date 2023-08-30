import React from "react";
import clsx from "clsx";
import "./Button.css";
import { Icon } from "../Icon/Icon";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Type of button style to display */
  styleType?: "alternate" | "error" | "success";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Whether the button should display as a link */
  link?: boolean;
  /** The button's click callback function */
  clickHandler?: (e: any) => void;
  /** Name of icon */
  icon?: string;
  /** Submit or button type */
  type?: "button" | "submit" | "reset" | undefined;
  /** Determine if icon is on left or right side of children */
  iconLeft?: boolean;
  children: any;
  /** Text to display on hoever */
  hoverText?: string;
}

export const Button = (props: IButtonProps) => {
  const {
    styleType,
    disabled,
    link,
    children,
    icon,
    type,
    iconLeft,
    clickHandler,
    hoverText,
    ...rest
  } = props;

  const className = props.className || "";
  //need to do this so the {...rest} code below doesn't overwrite the className attribute
  delete rest.className;

  function handleClick(e: any) {
    if (clickHandler) {
      clickHandler(e);
    }
  }

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx("mtm-btn", className, {
        "mtm-btn-alternative": styleType === "alternate",
        "mtm-btn-disabled": disabled,
        "mtm-btn-error": styleType === "error",
        "mtm-btn-success": styleType === "success",
        "mtm-btn-link": link,
      })}
      onClick={handleClick}
      type={type}
      tabIndex={0}
      title={hoverText}
    >
      {icon && iconLeft && (
        <>
          <Icon
            name={icon}
            id={icon}
            height="10"
            className="mtm-btn-icon mtm-btn-icon-left"
          />
        </>
      )}

      {children}

      {icon && !iconLeft && (
        <>
          <Icon
            name={icon}
            id={icon}
            height="10"
            className="mtm-btn-icon mtm-btn-icon-right"
          />
        </>
      )}
    </button>
  );
};
