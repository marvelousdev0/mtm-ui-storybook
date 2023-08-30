import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { withConfigProvider } from "../decorators/withConfigProvider";

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "middle", "large"],
      control: { type: "inline-radio" },
    },
    shape: {
      options: ["default", "circle", "round"],
      control: { type: "inline-radio" },
    },
    type: {
      options: ["primary", "ghost", "dashed", "link", "text", "default"],
      control: { type: "inline-radio" },
    },
  },
  decorators: [withConfigProvider],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    danger: false,
    disabled: false,
    ghost: false,
    htmlType: "button",
    icon: "angle_left",
    loading: false,
    shape: "default",
    size: "middle",
    type: "primary",
    onClick: () => {},
  },
};
