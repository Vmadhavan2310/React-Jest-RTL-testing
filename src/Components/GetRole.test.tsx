import { render, screen } from "@testing-library/react";
import GetRole from "./GetRole";

test('getRole',()=>{
    render(<GetRole/>)
    let inputElem = screen.getByRole('textbox');
    let submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
    expect(inputElem).toBeInTheDocument();
})