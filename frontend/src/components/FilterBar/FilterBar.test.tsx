import { render, screen, fireEvent } from "@testing-library/react";
import FilterBar from "./FilterBar";

describe("FilterBar", () => {
  it("renders search input and status filter", () => {
    render(
      <FilterBar
        search=""
        onSearchChange={() => {}}
        status=""
        onStatusChange={() => {}}
      />
    );

    expect(screen.getByLabelText(/Search Customer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
  });

  it("calls callbacks on change", () => {
    const onSearchChange = jest.fn();
    const onStatusChange = jest.fn();

    render(
      <FilterBar
        search=""
        onSearchChange={onSearchChange}
        status=""
        onStatusChange={onStatusChange}
      />
    );

    fireEvent.change(screen.getByLabelText(/Search Customer/i), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: "pending" },
    });

    expect(onSearchChange).toHaveBeenCalledWith("test");
    expect(onStatusChange).toHaveBeenCalledWith("pending");
  });
});
