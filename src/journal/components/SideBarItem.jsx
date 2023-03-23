import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'

export const SideBarItem = ({title,body,id}) => {

    const newTitle = useMemo( () =>{
        return title.length > 17
        ? title.subString(0,17) + '...'
        : title;
    },[title])
    return (
        <ListItem key={id} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}