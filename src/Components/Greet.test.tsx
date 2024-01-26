import Greet from "./Greet"
import { render,screen } from "@testing-library/react"
test('greet Component',()=>{
render(<Greet/>)
const elem=screen.getByText(/hello/i);
expect(elem).toBeInTheDocument();
})
test('greet Component',()=>{
    render(<Greet name="vinoth"/>)
    const elem=screen.getByText(/hello vinoth/i);
    expect(elem).toBeInTheDocument();
    })