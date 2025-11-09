import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Search, Plus, Settings, Trash2, Download, Upload } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'icon', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'The size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner and disables interaction',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    children: {
      control: 'text',
      description: 'The content to display inside the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};

// All Variants
export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="icon">Icon</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Primary Variants
export const Primary: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="primary" size="sm">Small Primary</Button>
        <Button variant="primary" size="md">Medium Primary</Button>
        <Button variant="primary" size="lg">Large Primary</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" loading>Loading</Button>
      </div>
    </div>
  ),
};

// Secondary Variants
export const Secondary: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="secondary" size="sm">Small Secondary</Button>
        <Button variant="secondary" size="md">Medium Secondary</Button>
        <Button variant="secondary" size="lg">Large Secondary</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" loading>Loading</Button>
      </div>
    </div>
  ),
};

// Icon Buttons
export const IconButtons: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="icon" size="icon">
        <Search className="w-5 h-5" />
      </Button>
      <Button variant="icon" size="icon">
        <Plus className="w-5 h-5" />
      </Button>
      <Button variant="icon" size="icon">
        <Settings className="w-5 h-5" />
      </Button>
      <Button variant="icon" size="icon">
        <Trash2 className="w-5 h-5" />
      </Button>
      <Button variant="icon" size="icon" disabled>
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  ),
};

// Buttons with Icons
export const WithIcons: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="primary">
          <Download className="w-4 h-4" />
          Download
        </Button>
        <Button variant="secondary">
          <Upload className="w-4 h-4" />
          Upload
        </Button>
        <Button variant="outline">
          <Plus className="w-4 h-4" />
          Add New
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" size="sm">
          <Settings className="w-3 h-3" />
          Settings
        </Button>
        <Button variant="primary" size="lg">
          <Trash2 className="w-5 h-5" />
          Delete
        </Button>
      </div>
    </div>
  ),
};

// Loading States
export const LoadingStates: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="primary" loading>
          Saving...
        </Button>
        <Button variant="secondary" loading>
          Loading...
        </Button>
        <Button variant="outline" loading>
          Processing...
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" size="sm" loading>
          Small Loading
        </Button>
        <Button variant="primary" size="lg" loading>
          Large Loading
        </Button>
      </div>
    </div>
  ),
};

// Disabled States
export const DisabledStates: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
      <Button variant="ghost" disabled>Ghost Disabled</Button>
      <Button variant="icon" size="icon" disabled>
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  ),
};

// Outline Buttons
export const Outline: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="outline" size="sm">Small Outline</Button>
        <Button variant="outline" size="md">Medium Outline</Button>
        <Button variant="outline" size="lg">Large Outline</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" loading>Loading</Button>
      </div>
    </div>
  ),
};

// Ghost Buttons
export const Ghost: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="ghost" size="sm">Small Ghost</Button>
        <Button variant="ghost" size="md">Medium Ghost</Button>
        <Button variant="ghost" size="lg">Large Ghost</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="ghost" disabled>Disabled</Button>
        <Button variant="ghost" loading>Loading</Button>
      </div>
    </div>
  ),
};

// Real World Examples
export const RealWorldExamples: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 rounded-lg">
      {/* Form Actions */}
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-sm font-semibold mb-3">Form Actions</h3>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-sm font-semibold mb-3">Toolbar</h3>
        <div className="flex gap-2">
          <Button variant="icon" size="icon">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="icon" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="icon" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <div className="flex-1" />
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-sm font-semibold mb-3">Call to Action</h3>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-600">Ready to get started?</p>
          <div className="flex gap-2">
            <Button variant="outline">Learn More</Button>
            <Button variant="primary">
              Get Started
              <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Loading Form */}
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-sm font-semibold mb-3">Submitting Form</h3>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" disabled>Cancel</Button>
          <Button variant="primary" loading>Submitting...</Button>
        </div>
      </div>
    </div>
  ),
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" className="rounded-full">
        Rounded Full
      </Button>
      <Button variant="secondary" className="uppercase tracking-wider">
        Uppercase
      </Button>
      <Button variant="outline" className="shadow-lg">
        With Shadow
      </Button>
      <Button variant="primary" className="w-full max-w-xs">
        Full Width
      </Button>
    </div>
  ),
};