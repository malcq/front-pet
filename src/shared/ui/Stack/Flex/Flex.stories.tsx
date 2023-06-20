import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {};
Row.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap4: Story = {};
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap8: Story = {};
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap16: Story = {};
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap24: Story = {};
RowGap24.args = {
  gap: '24',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const RowGap32: Story = {};
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const Column: Story = {};
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const ColumnGap4: Story = {};
ColumnGap4.args = {
  gap: '4',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const ColumnGap8: Story = {};
ColumnGap8.args = {
  gap: '8',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const ColumnGap16: Story = {};
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const ColumnGap24: Story = {};
ColumnGap24.args = {
  gap: '24',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const ColumnGap32: Story = {};
ColumnGap32.args = {
  gap: '32',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
