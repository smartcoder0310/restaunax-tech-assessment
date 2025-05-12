import { render, screen, fireEvent } from "@testing-library/react";
import OrderCard from "./OrderCard";

const mockOrder = {
  id: "ord_123456",
  customerName: "Alex Johnson",
  customerEmail: "alex@example.com",
  orderType: "delivery",
  status: "pending",
  total: 42.5,
  createdAt: "2024-05-07T18:30:00Z",
  scheduledFor: "2024-05-07T19:15:00Z",
  preparationNotes: "",
  items: [
    {
      id: "item_1",
      name: "Margherita Pizza",
      quantity: 2,
      price: 15.99,
      specialInstructions: "Extra cheese please",
    },
    {
      id: "item_2",
      name: "Caesar Salad",
      quantity: 1,
      price: 8.99,
      specialInstructions: "",
    },
    {
      id: "item_3",
      name: "Garlic Bread",
      quantity: 1,
      price: 4.99,
      specialInstructions: "",
    },
  ],
};

describe("OrderCard", () => {
  it("renders order details", () => {
    render(
      <OrderCard
        order={mockOrder}
        onStatusChange={() => {}}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
  });

  it("triggers onClick when clicked", () => {
    const onClick = jest.fn();

    render(
      <OrderCard
        order={mockOrder}
        onStatusChange={() => {}}
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByText("John Doe"));
    expect(onClick).toHaveBeenCalled();
  });
});
