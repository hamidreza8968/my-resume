import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("opening the contact modal", () => {
    const mockFn = jest.fn();
    const mockStages = ["", "jj", "we", "dd", "tt"];

    render(
        <MemoryRouter>
            <Header stages={mockStages} onClick={mockFn} />
        </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /get in touch/i });
    fireEvent.click(button);

    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
});
