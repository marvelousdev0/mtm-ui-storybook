import type { Meta, StoryObj } from "@storybook/react";
import { AppFooter } from "../components/AppFooter/AppFooter";
import { withConfigProvider } from "../decorators/withConfigProvider";

const meta: Meta<typeof AppFooter> = {
  title: "Layout/AppFooter",
  component: AppFooter,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withConfigProvider],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {};
