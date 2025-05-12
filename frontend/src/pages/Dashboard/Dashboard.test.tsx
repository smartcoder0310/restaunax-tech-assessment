import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Dashboard", () => {
  test("renders dashboard title", () => {
    render(<Dashboard />);
    expect(screen.getByText(/Restaunax Order Management/i)).toBeInTheDocument();
  });

  test("search filters orders", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { id: "1", customerName: "Alice", customerEmail: "alice@example.com", status: "pending", orderType: "delivery", total: 25.00, preparationNotes: "", items: [] },
        { id: "2", customerName: "Bob", customerEmail: "bob@example.com", status: "completed", orderType: "pickup", total: 40.00, preparationNotes: "", items: [] }
      ]
    });

    render(<Dashboard />);
    const input = screen.getByLabelText(/Search Customer/i);
    fireEvent.change(input, { target: { value: "Alice" } });
    expect(await screen.findByText("Alice")).toBeInTheDocument();
  });
});