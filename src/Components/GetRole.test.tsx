import { render, screen } from "@testing-library/react";
import GetRole from "./GetRole";



describe('getRoleMultipleElem',()=>{
    test('getRole',()=>{
        render(<GetRole/>)
        let inputElem = screen.getByRole('checkbox',{
            checked:true
        });
        let submitBtn = screen.getByRole('button',{
            name:'Onsubmit'
        });
        expect(submitBtn).toBeInTheDocument();
        expect(inputElem).toBeChecked();
    })

    it('inputHidden',()=>{
        render(<GetRole/>);
        const hiddenInp = screen.getByRole('radio',{
            hidden:true
        })
        expect(hiddenInp).toBeInTheDocument();
    })
})