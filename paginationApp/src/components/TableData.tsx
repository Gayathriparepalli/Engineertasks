import React,{useState,useEffect} from "react";
import {fetchData,rowData} from "../redux/actions/AppActions";
import {useDispatch,useSelector} from "react-redux";
import {RootState} from "../redux/reducer/Index";
import {useNavigate} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const  TableData=()=> {
const [page,setPage]=useState<number>(0);	 
const hits:any=useSelector((state:RootState)=>state.rootState)
const dispatch=useDispatch();
const navigate=useNavigate();
const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 20; 
 
 
  const handleChange = (event:any, value:any) => {
    setPageNo(value);
  };
  
useEffect(()=>{
	setTimeout(() => {
      dispatch(fetchData(page));
      setPage(page + 1);           
    }, 10000);
},[page]);
 const data=hits.slice((pageNo - 1) * itemsPerPage, pageNo * itemsPerPage)

const handleClick=(row:any)=>{
  dispatch(rowData(row))
  navigate("/rowData")
}
  return (
  	<div data-testid="div">
    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow data-testid="row1">           
            <TableCell>page</TableCell>
            <TableCell>title</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>created_at</TableCell>
            <TableCell >author</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
       
          
         {data.map((row:any,index:number) => (
            <TableRow onClick={()=>handleClick(row)} data-testid="row2"
              key={row.created_at}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell>
                {pageNo}
              </TableCell>
              <TableCell >
                {row.title}
              </TableCell>
              <TableCell >{row.url}</TableCell>
              <TableCell >{row.created_at}</TableCell>
              <TableCell>{row.author}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {hits.length?(
     <Stack spacing={2} style={{margin:20,paddingLeft:200}}>       
      <Pagination
           count={page}
           page={pageNo}
          onChange={handleChange}        
          color="secondary"
          size="small"
          variant="outlined"  
        /> 
    
    </Stack>):null
  }
    </div>
 )
}
export default TableData;