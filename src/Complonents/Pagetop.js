import { Box, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

const Pagetop = ({heading}) => {
    const [open,setOpen]=useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleIconClick=()=>{
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };
    const notifyarray=[{
        id:1,
        name:"admin add",
        description:"admin added holiday home request abscalkjf"
    },
    {
        id:2,
        name:"admin add",
        description:"admin added holiday home request abscalkjf"
    },
    {
        id:3,
        name:"admin add request",
        description:"admin added holiday home request abscalkjf"
    }
]
    return (
      <Box sx={{display:"flex",justifyContent:'space-between',width:"1000px"} }>
       <Box sx={{fontSize:"40px",fontWeight:"bold"}} >
        {heading}
       </Box>
       <Box sx={{marginRight:"0px"}}>
        <NotificationsIcon sx={{fontSize:"50px",color:"#999090",borderColor:"black"}} onClick={handleIconClick}  />
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorE1={anchorEl}
        open={open}
        onClose={handleClose}
    
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'rigth',
        }}
        style={{
            marginTop: '40px',  // Move the menu down if needed
            width: '500px',    // Adjust the width as needed
            marginRight: '40px', // Move the menu 40px to the right
        }}
        
      >
    {notifyarray.map((n)=>{
       return(
        <MenuItem key={n.id} sx={{width:"300px",fontFamily:"roboto"}}>{n.name}</MenuItem>
       )
    })}
        
         {/* <MenuItem sx={{width:"300px",fontFamily:"roboto"}}>New Complint Added</MenuItem>
         <MenuItem sx={{width:"300px",fontFamily:"roboto"}}>New Complint Added</MenuItem> */}
      </Menu>

       </Box>
      </Box>
    );
  };
  
export default Pagetop;