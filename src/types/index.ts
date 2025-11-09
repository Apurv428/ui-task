import type { ReactElement } from "react";

export interface Sale {
  id: string;
  product: string;
  productId: string;
  customer: string;
  email: string;
  delivery: string;
  location: string;
  address: string;
  status: "Shipped" | "Processing" | "Cancelled";
  subtotal: string;
  shipping: string;
  total: string;
  image: string;
}

export interface Message {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
}

export interface StatCard {
  title: string;
  value: string;
  icon: ReactElement;
  trend?: "up" | "down";
  bgColor?: string;
  iconColor?: string;
}
