// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import mtmTheme from "./mtm";

addons.setConfig({
  theme: mtmTheme,
});
