import React from 'react';
import Form from "./components/Form";
import App from './App';
import { render as rtlRender, fireEvent, cleanup,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "./redux/Store"
import { MemoryRouter } from "react-router-dom";
import AstroidDetails from "./components/AstroidDetails";
 
 const render=(component:(any))=>rtlRender(
 	<Provider store={store}>
 	<MemoryRouter>
 	{component}
 	</MemoryRouter>
 	</Provider>)


const renderApp = () => render(<Form/>);
const renderApp1 = () => render(<AstroidDetails />);

test("initial UI is rendered as expected",()=>{
	let { getByTestId } = renderApp();
	expect(getByTestId('app-input')).toHaveTextContent('Enter Astroid ID');
	expect(getByTestId('submit-button')).toHaveTextContent("submit");
	expect(getByTestId('randomId-button')).toHaveTextContent('Random Asteroid');
    expect(getByTestId('submit-button')).toBeDisabled()
})
  test("initial UI is rendered as expected test 2",()=>{  	
	let { queryByTestId} = renderApp1();	
	const results:(any) = queryByTestId('list');
	expect(results.childNodes).toHaveLength(3);
	expect(results.childNodes[0]).toHaveTextContent('name:');
    expect(results.childNodes[1]).toHaveTextContent('is_potentially_hazardous_asteroid:');
    expect(results.childNodes[2]).toHaveTextContent('nasa_jpl_url:');
})
  
//  test("when changeing inputfield button is enabled",()=>{
// 	let { getByTestId } = renderApp();
// 	const randomIdButton=getByTestId('randomId-button');
// 	const inputField=getByTestId('app-input');
// 	fireEvent.click(randomIdButton);
// 	expect(getByTestId('submit-button')).toBeEnabled();
// 	fireEvent.change(inputField);
//     expect(getByTestId('submit-button')).toBeEnabled();
// })