import React from "react";
import {Button,Card,Typography,CardContent ,CardMedia, CardActions,Grid} from "@material-ui/core";
import {useSelector,useDispatch} from "react-redux";
import {RootState} from "../redux/reducer/Index"
import {fetchWeatherDetails} from "../redux/actions/AppActions"
import {useNavigate} from "react-router-dom";
const CountryDetails=()=>{
	const countryDetails=useSelector((state:RootState)=>state.rootState.countryDetails);
	const dispatch=useDispatch();
	const navigate=useNavigate();
	
	const handleClick=(capital:string)=>{		
		dispatch(fetchWeatherDetails(capital));
		navigate("/weatherDetails")
	}
	return (
		
    <Grid container>
     {countryDetails.map((val:any)=>    
     	<Grid xs={6}  item key={val.capital}>
		<Card style={{ maxWidth: 345,margin:30 }} data-testid="card">     
        <CardMedia
          component="img"
          height="140"
          image={val.flag}
          alt="flag"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           capital:{val.capital}
          </Typography>
          <Typography variant="body2">
            population:{val.population}
          </Typography>
           <Typography variant="body2">
          latlng:{val.latlng}
           </Typography>
        </CardContent>
         <CardActions>
        <Button color="primary" onClick={()=>handleClick(val.capital)}>Capital Weather</Button>
      </CardActions>
    </Card>
    </Grid>    
    )}
     </Grid>
      
    
     
    
)
}
export default CountryDetails;

