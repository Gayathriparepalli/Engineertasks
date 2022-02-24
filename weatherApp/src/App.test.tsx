import React from 'react';
import { render as newRender, fireEvent } from '@testing-library/react';
import Form from './components/Form';
 import CountryDetails from "./components/CountryDetails";
import WeatherDetails from "./components/WeatherDetails";
import {MemoryRouter} from "react-router-dom";
import {Provider,useSelector} from "react-redux";
import {store} from "./redux/Store";
import * as redux from 'react-redux';

 beforeEach(() => {
const spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue([{}]);  
const spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');   
 const mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
})
   afterEach(() => {
    jest.restoreAllMocks();
  });

const render=(component:any)=>newRender(
<Provider store={store}>
<MemoryRouter>
{component}
</MemoryRouter>
</Provider>
	)

const renderApp=()=>render(<Form/>);
 const renderApp1=()=>render(<WeatherDetails/>);
 const renderApp2=()=>render(<CountryDetails/>)
test('initial ui is rendering ', () => {
const {getByTestId}=renderApp();
expect(getByTestId("inputFiled")).toHaveTextContent("Enter Country");
expect(getByTestId("submit")).toHaveTextContent("submit");
expect(getByTestId("submit")).toBeDisabled();  
});
test('initial ui is rendering 2', () => {
const {queryByTestId}=renderApp1();
const result:any=queryByTestId("card")
expect(result.childNodes).toHaveLength(2);
expect(result.childNodes[1].childNodes).toHaveLength(3);
expect(result.childNodes[1].childNodes[0]).toHaveTextContent("temprature:");
expect(result.childNodes[1].childNodes[1]).toHaveTextContent("wind-speed:");
expect(result.childNodes[1].childNodes[2]).toHaveTextContent("precip:")
});

test('initial ui is rendering 3', () => {
const {queryByTestId}=renderApp2();
const result:any=queryByTestId("card")
expect(result.childNodes).toHaveLength(3);
 expect(result.childNodes[1].childNodes).toHaveLength(3);
expect(result.childNodes[1].childNodes[0]).toHaveTextContent("capital:");
expect(result.childNodes[1].childNodes[1]).toHaveTextContent("population:");
expect(result.childNodes[1].childNodes[2]).toHaveTextContent("latlng:")
});



