import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza el texto de bienvenida", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "Click on the Vite and React logos to learn more"
  );
  expect(linkElement).toBeInTheDocument();
});
