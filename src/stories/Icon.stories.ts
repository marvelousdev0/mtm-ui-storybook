import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../components/Icon/Icon";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TollsPrimary: Story = {
  args: {
    name: "tolls-primary",
    height: "35",
    width: "35",
  },
};

export const XRed: Story = {
  args: {
    name: "x_red",
    height: "35",
    width: "35",
    clickHandler: () => {
      console.log("click");
    },
  },
};
