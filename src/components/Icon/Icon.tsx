import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { IconName } from "./types";

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: IconName,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void;
}

function useDynamicSVGImport(
  name: IconName,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../../assets/icons/${name}.svg`)
        ).ReactComponent;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err: any) {
        onError?.(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  onCompleted?: UseDynamicSVGImportOptions["onCompleted"];
  onError?: any;
}

/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const RenderIcon: React.FC<IconProps> = ({
  name,
  onCompleted,
  onError,
  ...rest
}): React.ReactNode | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    return error.message;
  }
  if (loading) {
    return "Loading...";
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return null;
};

const StyledIcon = styled(RenderIcon)`
  cursor: pointer;
`;

interface IconProps {
  /** icon's name */
  name: IconName;
  id?: string;
  /** the height of the icon in pixels eg:  height="10" */
  height?: string;
  /** the width of the icon in pixels eg:  width="10" */
  width?: string;
  /** space in pixels on the left of the icon eg: marginLeft="20" **/
  marginLeft?: string;
  /** space in pixels on the right of the icon eg: marginRight="20" **/
  marginRight?: string;
  /** space in pixels on the top of the icon eg: marginTop="20" **/
  marginTop?: string;
  /** space in pixels on the bottom of the icon eg: marginBottom="20" **/
  marginBottom?: string;
  /** The icon's click callback function if the icon is actionable */
  clickHandler?: (event: any) => void;
  /** Custom CSS class */
  className?: string;
  color?: string;
  /** alternate text for the image.  Used by screen readers */
  alt?: string;
}

export const Icon = (props: IconProps) => {
  const {
    name,
    height,
    width,
    id,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    alt,
  } = props;

  const className = props.className || "";

  const inlineStyles: { [key: string]: any } = {};

  if (height) {
    inlineStyles.height = `${height}px`;
  }

  if (width) {
    inlineStyles.width = `${width}px`;
  }

  if (marginLeft) {
    inlineStyles.marginLeft = `${marginLeft}px`;
  }

  if (marginRight) {
    inlineStyles.marginRight = `${marginRight}px`;
  }

  if (marginTop) {
    inlineStyles.marginTop = `${marginTop}px`;
  }

  if (marginBottom) {
    inlineStyles.marginBottom = `${marginBottom}px`;
  }

  return (
    <StyledIcon
      name={name}
      onClick={props.clickHandler}
      style={inlineStyles}
      className={clsx("mtm-icon", className)}
      id={id}
      alt={alt || ""}
    />
  );
};
