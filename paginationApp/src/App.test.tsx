import React from 'react';
import { render as newRender } from '@testing-library/react';
import App from './App';
import RowData from "./components/RowData";
import * as redux from "react-redux";
import {MemoryRouter} from "react-router-dom";
import TableData from "./components/TableData";
beforeEach(()=>{
	const spyOnUseSelector=jest.spyOn(redux,'useSelector');
	spyOnUseSelector.mockReturnValue([{created_at:"2022-03-02T14:06:18.000Z"}]);
	const spyOnUseDispatch=jest.spyOn(redux,'useDispatch');
	const mockuseDispatch=jest.fn();
	spyOnUseDispatch.mockReturnValue(mockuseDispatch);

})
afterEach(()=>{
	jest.restoreAllMocks()
})
const render=(component:any)=>newRender(
	<MemoryRouter>
	{component}
	</MemoryRouter>)
const RenderApp=()=>render(<RowData/>);
const RenderApp1=()=>render(<TableData/>)
test('test to check rowData is rendered', () => {
 const {getByTestId}=RenderApp();
 expect(getByTestId("rowData")).toHaveTextContent(JSON.stringify({created_at:"2022-03-02T14:06:18.000Z"}));
 	
});

test('test to check tableHead', () => {
 const {queryByTestId}=RenderApp1();
 const data:any=queryByTestId("row1")
 expect(data.childNodes).toHaveLength(5)
 	
});
test('test to check render method have two childs', () => {
 const {queryByTestId}=RenderApp1();
 const data:any=queryByTestId("div")
 expect(data.childNodes).toHaveLength(2)
 	
});
test('test to check tablerows', () => {
 const {queryByTestId}=RenderApp1();
 const data:any=queryByTestId("row2")
 expect(data.childNodes).toHaveLength(5)
 expect(data.childNodes[0]).toHaveTextContent("1")	
 expect(data.childNodes[1]).toHaveTextContent("")	
 expect(data.childNodes[2]).toHaveTextContent("")	
 expect(data.childNodes[3]).toHaveTextContent("2022-03-02T14:06:18.000Z")	
});

