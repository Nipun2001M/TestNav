import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HistoryIcon from '@mui/icons-material/History';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useNavigate, useLocation } from "react-router-dom";
import sidenavcss from '../Complonents/CSS/SideNav.css'


const SideNav = () => {
    const navigate = useNavigate()
    const location = useLocation();
    return <Box sx={{ background: "'#872341", height: "100%" }} className={sidenavcss.container}>

    <Box display={"flex"} sx={{ height: "100%"}}>
       
    <Drawer
            sx={{
                

                width: "240px",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: "240px",
                  boxSizing: 'border-box',
                  backgroundColor:"#872341",
                  color:"white",
                  
                  
                },
                marginTop:"200px",
                '& .MuiTypography-root': {
                    fontFamily:  'Roboto',
                   
                  },
                  
                
               

            }}
            variant="permanent"
            anchor="left" >
                <Box >
                    <Typography variant="h5" sx={{marginBottom:"35%"}}>Homly Logo.</Typography>
                   
                </Box>
                <List  sx={{height:"auto",padding:"0"}} >
                   <ListItemButton onClick={()=>navigate('/')} sx={{
    background: location.pathname === '/' ? "white" : null,
    color:location.pathname === '/' ? "black" : null,
    '&:hover': {
        background: location.pathname === '/' ? 'white' : null,
      },
      height:"10%"
    
  }} >
                   <ListItem >
                        <ListItemIcon sx={{color:location.pathname === '/' ? "Black" : "white"}} > <DashboardIcon/></ListItemIcon >
                        <ListItemText primary="Dashboard"/>

                    </ListItem>
                   </ListItemButton>
                   <ListItemButton disabled={true} sx={{height:"10%"}}>
                   <ListItem>
                    <ListItemIcon > <DoNotDisturbAltIcon></DoNotDisturbAltIcon></ListItemIcon >
                        <ListItemText primary="Blacklisted User" />

                    </ListItem>
                   </ListItemButton>
                   
                   <ListItemButton onClick={()=>navigate('/manage')}
                    sx={{
                        background: location.pathname === '/manage' ? "white" : null,
                        color:location.pathname === '/manage' ? "black" : null,
                        '&:hover': {
                            background: location.pathname === '/manage' ? 'white' : null,
                          },
                          height:"10%"
                       
                      }}
                      
                    >
                    <ListItem sx={{marginLeft:"15%"}}>
                    <ListItemIcon sx={{color:location.pathname === '/manage' ? "Black" : "white"}} > <ManageAccountsIcon></ManageAccountsIcon></ListItemIcon >
                        <ListItemText primary="Manage"/>

                    </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={()=>navigate('/history')} 
                    sx={{
                        background: location.pathname === '/history' ? "white" : null,
                        color:location.pathname === '/history' ? "black" : null,
                        '&:hover': {
                            background: location.pathname === '/history' ? 'white' : null,
                          },
                          height:"10%"
                       
                      }}
                    >
                    <ListItem sx={{marginLeft:"15%"}}>
                    <ListItemIcon sx={{color:location.pathname === '/history' ? "Black" : "white"}}> <HistoryIcon></HistoryIcon></ListItemIcon >
                        <ListItemText primary="History"/>

                    </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={()=>navigate('/complaints')}
                    sx={{
                        background: location.pathname === '/complaints' ? "white" : null,
                        color:location.pathname === '/complaints' ? "black" : null,
                        '&:hover': {
                            background: location.pathname === '/complaints' ? 'white' : null,
                          },
                          height:"10%"

                       
                      }}
                    >
                    <ListItem sx={{marginLeft:"15%"}}>
                    <ListItemIcon  sx={{color:location.pathname === '/complaints' ? "Black" : "white"}}> <SpeakerNotesIcon></SpeakerNotesIcon></ListItemIcon >
                        <ListItemText primary="Complaints"/>

                    </ListItem>
                    </ListItemButton>
                   
                    <ListItemButton onClick={()=>navigate('/holidayhomes')}
                    sx={{
                        background: location.pathname === '/holidayhomes' ? "white" : null,
                        color:location.pathname === '/holidayhomes' ? "black" : null,
                        '&:hover': {
                            background: location.pathname === '/holidayhomes' ? 'white' : null,
                          },
                          height:"10%"
                       
                      }}
                    >
                    <ListItem>
                    <ListItemIcon sx={{color:location.pathname === '/holidayhomes' ? "Black" : "white"}}> <HomeIcon></HomeIcon></ListItemIcon >
                        <ListItemText primary="HolidayHomes"/>

                    </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={()=>navigate('/reservations')}
                    sx={{
                        background: location.pathname === '/reservations' ? "white" : null,
                        color:location.pathname === '/reservations' ? "black" : null,
                        '&:hover': {
                            background: location.pathname === '/reservations' ? 'white' : null,
                          },
                          height:"10%"
                       
                      }}
                    >
                    <ListItem>
                    <ListItemIcon sx={{color:location.pathname === '/reservations' ? "Black" : "white"}}> <TextSnippetIcon></TextSnippetIcon></ListItemIcon >
                        <ListItemText primary="Reservations"/>

                    </ListItem>
                    </ListItemButton>
                   <ListItemButton onClick={()=>navigate('/report')}
                   
                   
                   sx={{
                    background: location.pathname === '/report' ? "white" : null,
                    color:location.pathname === '/report' ? "black" : null,
                    '&:hover': {
                background: location.pathname === '/report' ? 'white' : null,
              },
              height:"10%"
                   
                  }}
                   >
                   <ListItem>
                    <ListItemIcon sx={{color:location.pathname === '/report' ? "Black" : "white"}}> <AssessmentIcon></AssessmentIcon></ListItemIcon >
                        <ListItemText primary="Report"/>

                    </ListItem>
                   </ListItemButton>
                  {/* <ListItem>
                   
                  </ListItem>
                 */}
                   
                
                 
                
                </List>
              
                <Box sx={{textAlign:"center",alignItems:"center"}}>
                    <ListItemIcon ><ManageAccountsIcon sx={{color:"white",fontSize:"70px"}}></ManageAccountsIcon></ListItemIcon>
                  <Typography variant="h6">Primary Admin</Typography>
                  <ListItemButton sx={{width:"60%",marginLeft:"25%"}}>
                    <LogoutIcon></LogoutIcon>
                    <Typography variant="h6">LogOut</Typography>
                  </ListItemButton>
                    </Box>
               

            </Drawer>
          
        </Box>
       
    </Box>




}
export default SideNav;