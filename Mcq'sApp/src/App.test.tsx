import React from 'react';
import { render as newRender } from '@testing-library/react';
import TableData from "./components/TableData";
import {MemoryRouter} from "react-router-dom";
import * as redux from "react-redux";

beforeEach(()=>{
	const spyOnUseSelector=jest.spyOn(redux,'useSelector');
	spyOnUseSelector.mockReturnValue([{title:"hello"}]);
	const spyOnUseDispatch=jest.spyOn(redux,"useDispatch");
	const mockUseDispatch=jest.fn();
	spyOnUseDispatch.mockReturnValue(mockUseDispatch)


})
afterEach(()=>{
	jest.restoreAllMocks();
})
const render=(component:any)=>newRender(
	<MemoryRouter>
	{component}
	</MemoryRouter>)
const renderApp=()=>render(<TableData/>);

 test('test to check childnodes of row1', () => {
   const {queryByTestId}=renderApp();
   const result:any=queryByTestId("row1")
   expect(result.childNodes).toHaveLength(5)
});
 test('test to check childnodes of row2', () => {
   const {queryByTestId}=renderApp();
   const result:any=queryByTestId("row2")
   expect(result.childNodes).toHaveLength(5)
});
 test('test to check placeholder of search', () => {
   const {getByTestId}=renderApp()   
   expect(getByTestId("search")).toHaveTextContent("search by title or created-at")
});
