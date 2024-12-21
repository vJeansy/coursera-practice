import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

describe("NavBar Component", () => {
  test("renders desktop navbar when screen width is 415px or greater", () => {
    // Set window width to a desktop size
    global.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Check if desktop navbar links are rendered
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("MENU")).toBeInTheDocument();
  });

  test("renders mobile navbar when screen width is less than 415px", () => {
    // Set window width to a mobile size
    global.innerWidth = 400;
    window.dispatchEvent(new Event("resize"));

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Check if burger icon is rendered
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("toggles mobile sidebar when burger icon is clicked", () => {
    // Set window width to a mobile size
    global.innerWidth = 400;
    window.dispatchEvent(new Event("resize"));

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Check initial state (sidebar not visible)
    expect(screen.queryByText("RESERVATION")).not.toBeInTheDocument();

    // Click the burger icon
    const burgerIcon = screen.getByRole("button");
    fireEvent.click(burgerIcon);

    // Check if sidebar is visible
    expect(screen.getByText("RESERVATION")).toBeInTheDocument();

    // Click the close button inside the sidebar
    const closeButton = screen.getByAltText("close btn");
    fireEvent.click(closeButton);

    // Check if sidebar is hidden again
    expect(screen.queryByText("RESERVATION")).not.toBeInTheDocument();
  });
});