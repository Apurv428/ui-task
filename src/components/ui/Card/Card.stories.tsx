import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Card
export const Basic: Story = {
  args: {
    children: "Basic card content",
  },
  render: (args) => (
    <Card className="w-96">
      <CardContent>
        <p className="text-gray-700">{args.children}</p>
      </CardContent>
    </Card>
  ),
};

// Card with Header
export const WithHeader: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This is the card content area. You can put any content here.
        </p>
      </CardContent>
    </Card>
  ),
};

// Card with Header and Footer
export const WithHeaderAndFooter: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-gray-500">Card subtitle or description</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This is the card content area with both header and footer sections.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

// Card with Image
export const WithImage: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <Card className="w-96">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        alt="Card header"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardHeader>
        <h3 className="text-lg font-semibold">Beautiful Landscape</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          A stunning view of mountains and nature.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Multiple Cards
export const MultipleCards: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-72">
        <CardHeader>
          <h3 className="text-lg font-semibold">Card 1</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">First card content</p>
        </CardContent>
      </Card>
      <Card className="w-72">
        <CardHeader>
          <h3 className="text-lg font-semibold">Card 2</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">Second card content</p>
        </CardContent>
      </Card>
      <Card className="w-72">
        <CardHeader>
          <h3 className="text-lg font-semibold">Card 3</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">Third card content</p>
        </CardContent>
      </Card>
    </div>
  ),
};

// Stats Card
export const StatsCard: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <Card className="w-64">
      <CardContent className="text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Total Sales
        </p>
        <p className="text-3xl font-bold text-gray-900 mt-2">$12,345</p>
        <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
      </CardContent>
    </Card>
  ),
};

// Interactive Card
export const InteractiveCard: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <Card className="w-96 hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <h3 className="text-lg font-semibold">Interactive Card</h3>
        <p className="text-sm text-gray-500">Hover to see the effect</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card has hover effects and can be made clickable.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm" className="w-full">
          Click Me
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Form Card
export const FormCard: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <h3 className="text-lg font-semibold">Sign In</h3>
        <p className="text-sm text-gray-500">
          Enter your credentials to continue
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Sign In
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    children: "Card content",
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-64 bg-blue-50 border-blue-200">
        <CardContent>
          <p className="text-blue-900 font-semibold">Blue Theme Card</p>
        </CardContent>
      </Card>
      <Card className="w-64 bg-green-50 border-green-200">
        <CardContent>
          <p className="text-green-900 font-semibold">Green Theme Card</p>
        </CardContent>
      </Card>
      <Card className="w-64 shadow-xl">
        <CardContent>
          <p className="text-gray-900 font-semibold">Large Shadow Card</p>
        </CardContent>
      </Card>
    </div>
  ),
};
