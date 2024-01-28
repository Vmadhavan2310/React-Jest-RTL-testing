import { render, screen } from "@testing-library/react";
import GetRole from "./GetRole";
import exp from "constants";



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
    it('getbyPlaceholder',()=>{
        render(<GetRole/>);
        const placeHlder = screen.getByPlaceholderText('defaultCheck');
        expect(placeHlder).toBeInTheDocument();
    })
    it('getByText',()=>{
        render(<GetRole/>);
        const getByTxt = screen.getByText('Hello Vinoth');
        expect(getByTxt).toBeInTheDocument();
    })
    it('getByDisValue',()=>{
        render(<GetRole/>);
        const dispValue = screen.getByDisplayValue('Rafiya Muskan');
        expect(dispValue).toBeInTheDocument();
    })
    

})