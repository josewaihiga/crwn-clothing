import { render, screen } from "@testing-library/react";
import 'jest-styled-components';
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";


describe("button tests", () => {
  
  
    test("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);

    // const buttonElement = screen.getByText(/test/i);
    const buttonElement = screen.getByRole('button');
    // expect(buttonElement).toHaveStyle('background-color: black');
    expect(buttonElement).toHaveStyleRule('background-color','black');

  });


  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} >Test</Button>);

    const googleButtonElement = screen.getByRole('button');
    expect(googleButtonElement).toHaveStyleRule('background-color','#4285f4');

  });

  test("should render inverted when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} >Test</Button>);

    const invertedButtonElement = screen.getByRole('button');
    expect(invertedButtonElement).toHaveStyleRule('background-color','white');

  });

  test('should be disabled if isloading is true', ()=>{

    render(<Button isLoading={true}>Test</Button>)

    const loadingButtonElement = screen.getByRole('button')

    // expect(loadingButtonElement).toHaveProperty('disabled', true)
    expect(loadingButtonElement).toBeDisabled();

  })

});
