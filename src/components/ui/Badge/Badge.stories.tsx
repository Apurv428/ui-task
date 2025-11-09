import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'The visual style variant of the badge',
    },
    children: {
      control: 'text',
      description: 'The content to display inside the badge',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
};

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

// Error variant
export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

// Status examples
export const StatusExamples: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Order Status:</span>
        <Badge variant="success">Shipped</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Payment Status:</span>
        <Badge variant="warning">Processing</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Delivery Status:</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Account Status:</span>
        <Badge variant="default">Active</Badge>
      </div>
    </div>
  ),
};

// Different text lengths
export const TextLengths: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">New</Badge>
      <Badge variant="success">Completed</Badge>
      <Badge variant="warning">Pending Review</Badge>
      <Badge variant="error">Action Required Immediately</Badge>
    </div>
  ),
};

// Custom styling with className
export const CustomStyling: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default" className="uppercase">
        Uppercase
      </Badge>
      <Badge variant="success" className="text-base px-4 py-3">
        Larger
      </Badge>
      <Badge variant="warning" className="rounded-full">
        Rounded
      </Badge>
      <Badge variant="error" className="font-bold">
        Bold
      </Badge>
    </div>
  ),
};

// In table context (like your SalesTable)
export const InTableContext: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="w-full max-w-2xl">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500">
              Order ID
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-t">
            <td className="px-6 py-4 text-sm">#12345</td>
            <td className="px-6 py-4">
              <Badge variant="success">Shipped</Badge>
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 text-sm">#12346</td>
            <td className="px-6 py-4">
              <Badge variant="warning">Processing</Badge>
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 text-sm">#12347</td>
            <td className="px-6 py-4">
              <Badge variant="error">Cancelled</Badge>
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 text-sm">#12348</td>
            <td className="px-6 py-4">
              <Badge variant="default">Pending</Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};