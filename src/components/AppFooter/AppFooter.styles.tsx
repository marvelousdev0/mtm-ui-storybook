import styled from "styled-components";
import { GlobalToken } from "antd";

export const AppFooterContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
`;

export const AppFooterContent = styled.div<{ token: GlobalToken }>`
  padding: 5px 35px;
  font-size: 0.75em;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.token.colorBorder};

  "@media screen and (max-width: 575px)": {
    padding: 5px 15px !important;
    flex-direction: column;
  }
`;

export const AppFooterText = styled.p`
  color: #a0a0a0;
`;

export const AppFooterLink = styled.a`
  color: #666666;
  padding: 0px 10px;

  &:last-child {
    border-left: 1px solid #666666;
  }
`;
