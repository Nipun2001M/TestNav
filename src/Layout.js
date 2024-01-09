
import theme from "./HomlyTheme";
import { Box, Drawer, ThemeProvider, Typography, styled } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HistoryIcon from '@mui/icons-material/History';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Button } from "@mui/base";
import { useLocation, useNavigate } from 'react-router-dom';


const Layout=({children})=>{
    const navigate=useNavigate()
    const location=useLocation();
   const iconactive={color:"Black"}
   const cardactive={}
    return(

        
        // <ThemeProvider theme={theme}>
           <ThemeProvider theme={theme}>
          {/* <Box
          sx={
            { display:"flex"}
          }
          > */}
          <Box sx={{marginTop:"100px"}}>
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
                <Box>
                    <Typography variant="h5" sx={{marginBottom:"20%"}}>Homly Logo</Typography>
                </Box>
                <List  >
                   <ListItemButton onClick={()=>navigate('/')} sx={{
    background: location.pathname === '/' ? "white" : null,
    color:location.pathname === '/' ? "black" : null,
    '&:hover': {
        background: location.pathname === '/' ? 'white' : null,
      },
      height:"8%"
    
  }} >
                   <ListItem >
                        <ListItemIcon sx={{color:location.pathname === '/' ? "Black" : "white"}} > <DashboardIcon/></ListItemIcon >
                        <ListItemText primary="Dashboard"/>

                    </ListItem>
                   </ListItemButton>
                   <ListItemButton disabled={true}>
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
                          height:"8%"
                       
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
                          height:"8%"
                       
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
                          height:"8%"

                       
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
                          height:"8%"
                       
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
                          height:"8%"
                       
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
              height:"8%"
                   
                  }}
                   >
                   <ListItem>
                    <ListItemIcon sx={{color:location.pathname === '/report' ? "Black" : "white"}}> <AssessmentIcon></AssessmentIcon></ListItemIcon >
                        <ListItemText primary="Report"/>

                    </ListItem>
                   </ListItemButton>
               
                    
             
                </List>
                
               
                

            </Drawer>
         
          </Box>
             <Box>
                
                {children}
             </Box>
           {/* </Box> */}
         </ThemeProvider>
    )

}
export default Layout;