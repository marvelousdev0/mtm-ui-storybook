import { ConfigProvider } from "antd";
import { lightTheme } from "../assets/theme/theme";

export const withConfigProvider = (story: any) => {
  return <ConfigProvider theme={lightTheme}>{story()}</ConfigProvider>;
};
