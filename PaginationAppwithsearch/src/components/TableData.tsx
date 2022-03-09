import React,{useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch,useSelector} from "react-redux";
import {fetchData,rowData} from "../redux/actions/AppActions";
import {RootState} from "../redux/reducer/Index";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const TableData=()=>{
	const hits:any=useSelector((state:RootState)=>state.hits);
	const rowData1=useSelector((state:RootState)=>state.rowData)
	const [page,setPage]=useState<number>(0);
	const [pageNo,setPageNo]=useState<number>(1);
	const dataPerPage=20;
	const dispatch=useDispatch();
	 const [open, setOpen] = useState(false);
     const [search,setSearch]=useState("");
     
        let data=hits.slice((pageNo-1)*dataPerPage,pageNo*dataPerPage);
  const handleClose = () => setOpen(false);
   const handleOpen = (row:any) => {
  	setOpen(true);
  dispatch(rowData(row));
  	console.log(row)
  	  	
  }
	useEffect(()=>{	
         setTimeout(()=>{
        	dispatch(fetchData(page));
        	setPage(page+1)
         },10000)        
     
	},[page])
	
	
     const handlesearchField=(e:any)=>{
     	setSearch(e.target.value);   	
    
     }
    
   const handleChange = (event:any, value:any) => {
    setPageNo(value);
   
  };
  
	  

	return (
		<>
		<TextField style={{marginLeft:"50px"}} variant="standard" label="search by title or created-at" value={search}
		onChange={handlesearchField}/>
		
           <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 ,margin:"0px 50px"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Page</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>created_at</TableCell>
            <TableCell>author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((val:any)=>{
          	if(search==""){
          		return val
          	}
          		else if(val.title.toUpperCase().includes(search.toUpperCase())||
          			val.created_at.toUpperCase().includes((search).toUpperCase())){
     	         	return val
     	         }}).
          			map((row:any) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={()=>handleOpen(row)}
            >
              <TableCell component="th" scope="row">
                {pageNo}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.created_at}</TableCell>
              <TableCell>{row.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Stack spacing={2} style={{marginBottom:20}}>  
     
    <Pagination count={page} page={pageNo} color="secondary" onChange={handleChange} />
      
    </Stack>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" variant="h6" component="h2">
           {JSON.stringify(rowData1)}
          </Typography>
         
        </Box>
      </Modal>
    </>
		)

}
export default TableData;