import { Button as AntButton, ButtonProps } from "antd";
import { Icon } from "../Icon/Icon";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Button = (
  props: ButtonProps &
    React.RefAttributes<HTMLElement> & {
      icon?: string;
      children?: React.ReactNode;
    }
) => {
  return (
    <StyledButton {...props} icon="">
      {!props.loading && props.icon ? <Icon name={props.icon} /> : null}
      {props.children}
    </StyledButton>
  );
};
