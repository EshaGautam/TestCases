
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting"
describe('Greeting Component',()=>{
    test("renders hello world", () => {
      render(<Greeting />);
      const greet = screen.getByText("hello world!", { exact: false });
      expect(greet).toBeInTheDocument();
    });
})
