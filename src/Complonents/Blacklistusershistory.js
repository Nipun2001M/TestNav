import { Box, Button, Stack } from "@mui/material";

const Blacklistusershistory=({item})=>{
    return(
        <Box sx={{ background: "#E9E9E9",width:"140%",  display: 'flex', borderRadius:"15px",margin:"2%"}} key={item.index}>
        <Box sx={{ padding: "2%" }}>
            <img src={item.image}
            style={{
                width: "40px", // Adjust the width as needed
                height: "40px", // Adjust the height as needed
                borderRadius: "50%", // To make it round
              }}
            ></img>
        </Box>
        <Stack direction={"column"} sx={{ padding: "2%" }}>
            <Box sx={{ width: "150px" }}>
                User Name
            </Box>
            <Box>
            {item.User_name}
            </Box>
        </Stack>
        <Stack direction={"column"} sx={{ padding: "2%" }}>
            <Box sx={{ width: "150px" }}>
                Service Number
            </Box>
            <Box>
                {item.Service_number}
            </Box>
        </Stack >
        <Stack direction={"column"} sx={{ padding: "2%" }}>
            <Box sx={{ width: "100px" }}>
                NIC Number
            </Box>
            <Box>
               {item.Nic_number}
            </Box>
        </Stack>
        <Stack direction={"column"} sx={{ padding: "2%" }}>
            <Box sx={{ width: "150px" }}>
                Blacklisted Date
            </Box>
            <Box>
                {item.date}
            </Box>
        </Stack>
        <Stack direction={"column"} sx={{ padding: "2%" }}>
            <Box sx={{ width: "150px" }}>
                Removed Date
            </Box>
            <Box>
                {item.date}
            </Box>
        </Stack>
        <Box sx={{padding:"2%",marginLeft:"1%"}}>
        <Button variant="contained" color="primary" sx={{fontFamily:"Roboto",borderRadius:"15px",width:"100px"}}>
View
</Button>
        </Box>
      
     
       

    </Box>
    )
}
export default Blacklistusershistory;