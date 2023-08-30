import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert/Alert";
import { withConfigProvider } from "../decorators/withConfigProvider";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      options: ["success", "info", "warning", "error"],
      control: { type: "inline-radio" },
    },
  },
  decorators: [withConfigProvider],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: "Alert message",
    type: "success",
    description:
      "Detailed description for success message which can be very long.",
    showIcon: true,
  },
};
