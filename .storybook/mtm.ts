// .storybook/YourTheme.js

import { create } from "@storybook/theming/create";
import { themes } from "@storybook/theming";

export default create({
  ...themes.light,
  base: "light",
  brandTitle: "MTM Components",
  brandUrl: "https://www.mtm-inc.net/",
  brandImage:
    "https://www.mtm-inc.net/wp-content/uploads/2020/09/mtm-logo-150-x-62.png",
  brandTarget: "_self",
});
