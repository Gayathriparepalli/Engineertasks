import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";
const RowData=()=>{
	const data=useSelector((state:RootState)=>state.rowData)
 var jsonStr = JSON.stringify(data);
  return <div data-testid="rowData">{jsonStr}</div>;
}
export default RowData;