import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";

export const JournalLayout = ({children}) => {
    
    const drawerWidth = 240;

    return (
    <Box sx={{display:'flex'}}>
        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth}/>

        {/* SideBar */}

        <Box 
            component='main' 
            sx={{flexGrow:1,p:3}}
        >
            {/* ToolBar */}

            {children}

        </Box>
    </Box>
  )
}