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
    it('getbyLabelTest',()=>{
        render(<GetRole/>);
        const label = screen.getByLabelText('Name',{
            selector:'input'
        });
        expect(label).toBeInTheDocument();
    })
    it('getByLabelCheckbox',()=>{
        render(<GetRole/>);
        const terms = screen.getByLabelText('Terms & Condition');
        expect(terms).toBeInTheDocument();
    })

})