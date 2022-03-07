import React from 'react';
import { render as newRender, screen } from '@testing-library/react';
import Form from "./components/Form";
import {MemoryRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./redux/Store"
import ButtonsPage from "./components/ButtonsPage";
const render=(component:(any))=>newRender(
 	<Provider store={store}>
 	<MemoryRouter>
 	{component}
 	</MemoryRouter>
 	</Provider>)
 	const renderApp = () => render(<Form/>);
   const renderApp1 = () => render(<ButtonsPage/>);
test('test to check childnodes of form', () => {
  let { queryByTestId } = renderApp();
  const results:(any) = queryByTestId('form');
  expect(results.childNodes).toHaveLength(5);
});
test("test to check placeholder of name",()=>{
	let { getByTestId } = renderApp();
	expect(getByTestId('inputField')).toHaveTextContent('Enter name');
	
})
test("test to check placeholder of email",()=>{
	let { getByTestId } = renderApp();
	expect(getByTestId('email')).toHaveTextContent('Enter email');
	
})
test("test to check placeholder of submit button",()=>{
	let { getByTestId } = renderApp();
	expect(getByTestId('submit')).toHaveTextContent('submit');
	
})
test("test to check ButtonsPage childNodes",()=>{
	let { queryByTestId } = renderApp1();
  const results:(any) = queryByTestId('stack');
  expect(results.childNodes).toHaveLength(5);
	
})