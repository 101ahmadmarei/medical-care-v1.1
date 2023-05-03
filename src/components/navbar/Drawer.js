import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import classes from "./Drawer.module.css";

// const useStyles=makeStyles((theme)=>({
//     drawer:{
//         width:240,
//         flexShrink:0,
//     },
//     drawerPaper:{
//         width:240,
//         background:"#fff",
//         color:"#000",
//     },
//     toolbar:theme.mixins.toolbar,
// })
// )

const MyDrawer = ({ open, onToggle }) => {
  const pages = [
    { id: 0, page: "Home" },
    { id: 1, page: "Shop", open: true },
    { id: 2, page: "about" },
    { id: 3, page: "Blog" },
    { id: 4, page: "Contact" },
    { id: 5, page: "pages" },
  ];

  return (
    <Box
      sx={{ width: "auto", display: { md: "none" } }}
      className={classes.drawer}
    >
      <List>
        {pages.map((item, index) => (
          <ListItem key={item.id} sx={{ boxShadow: "none" }}>
            <ListItemButton>
              {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
              <ListItemText
                primary={item.page}
                sx={{ textAlign: "center" }}
                className={classes.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MyDrawer;
