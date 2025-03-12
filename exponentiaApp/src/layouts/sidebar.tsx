import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import logo from '../assets/exponentiaai_logo.jpeg'

interface IMenu  {
   id:number,
   title:string,
   icon:any
}

const SIDEBAR_MENU: IMenu[] = [
  { id: 1, title: "Dashboard", icon: <GridViewRoundedIcon/> },
  { id: 2, title: "Users", icon: <PeopleRoundedIcon/> },
  { id: 3, title: "Reports", icon: <TimelineRoundedIcon/> },
  { id: 4, title: "Settings", icon: <SettingsRoundedIcon/> }
]
const Sidebar = () => {
  return (
    <div className="sidebar">
    <List sx={{pt:0, pb:0}}>
      <ListItem disablePadding>
          <ListItemButton disableTouchRipple disableRipple sx={{height:'72px', justifyContent:"center", "&:hover": { backgroundColor: "transparent" }}}>
            <ListItemIcon sx={{minWidth:"unset"}}>
              <img style={{width:"36px", height:"36px"}} src={logo}/>
            </ListItemIcon>
            {/* <ListItemText primary={item.title} /> */}
          </ListItemButton>
      </ListItem>
      {SIDEBAR_MENU.map((item:IMenu) => (
        <ListItem  key={item.id} disablePadding>
          <ListItemButton sx={{height:'72px', justifyContent:"center"}}>
            <ListItemIcon sx={{minWidth:"unset"}}>{item.icon}</ListItemIcon>
            {/* <ListItemText primary={item.title} /> */}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
  )
}

export default Sidebar