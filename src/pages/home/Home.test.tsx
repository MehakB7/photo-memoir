import { render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import Home from "./Home";
import axios from "axios";
import { END_POINTS } from "../../services/constant";
import { BrowserRouter } from "react-router-dom";

test("Renders Home with API data", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet(END_POINTS.users).reply(200, [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
  ]);
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await screen.findByText("Leanne Graham");
  expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
  expect(screen.getByText("Clementine Bauch")).toBeInTheDocument();

  mock.restore();
});

test("Renders Home When No data", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet(END_POINTS.users).reply(200, []);
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await screen.findByText("No Data Found");

  mock.restore();
});
