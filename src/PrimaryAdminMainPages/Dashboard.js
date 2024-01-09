import { Grid, Typography } from "@mui/material";
import SideNav from "../Complonents/SideNav";
import Pagetop from "../Complonents/Pagetop";

const Dashboard=()=>{
    return<div>
     
        <Grid container>
            <Grid item md={3}>
                 <SideNav/>
            </Grid>
            <Grid item md={6}>
                <Pagetop heading={"Dashboard"}/>

            </Grid>
        </Grid>
    </div>
}
export default Dashboard;