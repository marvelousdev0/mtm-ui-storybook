import { theme } from "antd";
import {
  AppFooterContainer,
  AppFooterContent,
  AppFooterLink,
  AppFooterText,
} from "./AppFooter.styles";

const { useToken } = theme;

export const AppFooter = () => {
  const { token } = useToken();

  const currentDate: Date = new Date();

  return (
    <AppFooterContainer>
      <AppFooterContent token={token}>
        <AppFooterText>
          Copyright © {currentDate.getFullYear()} MTM, Inc. All Rights Reserved.
        </AppFooterText>
        <AppFooterText>
          <AppFooterLink
            href="https://www.mtm-inc.net/privacy-policy/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Privacy Policy
          </AppFooterLink>
          <AppFooterLink
            href="https://www.mtm-inc.net/terms-of-use/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms of Use
          </AppFooterLink>
        </AppFooterText>
      </AppFooterContent>
    </AppFooterContainer>
  );
};
