module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: '${layer}/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof ${componentName}>;
export const Normal: Story = {};

Normal.args = {
   
};`;
