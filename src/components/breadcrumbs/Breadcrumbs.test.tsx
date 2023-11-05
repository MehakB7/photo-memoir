import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumbs";
import { BrowserRouter } from "react-router-dom";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Album", link: "/album" },
  { label: "Photos", link: "" },
];

describe("breadcrumbs", () => {
  test("renders breadcrumb with links and labels", () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={breadcrumbItems} />
      </BrowserRouter>
    );
    const home = screen.getByText("Home");
    const album = screen.getByText("Album");

    expect(home).toHaveAttribute("href", "/");
    expect(album).toHaveAttribute("href", "/album");
  });

  test("styling", () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={breadcrumbItems} />
      </BrowserRouter>
    );

    const photos = screen.getByText("Photos");

    expect(photos).toHaveClass("text-gray-700");
  });
});
