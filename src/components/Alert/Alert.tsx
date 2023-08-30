import { AlertProps, Alert as AntAlert } from "antd";
import styled from "styled-components";

const StyledAlert = styled(AntAlert)`
  min-width: 480px;
`;

export const Alert = ({ type = "info", ...props }: AlertProps) => (
  <StyledAlert {...props} type={type} />
);
