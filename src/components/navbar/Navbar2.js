import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { cartCtx } from "../../store/cart-context";
import { NavLink } from "react-router-dom";
import classes from "./Navbar2.module.css";
const pages = [
  { id: 0, page: "Home" },
  { id: 1, page: "Shop", open: true },
  { id: 2, page: "about" },
  { id: 3, page: "Products" },
  { id: 4, page: "Contact" },
  { id: 5, page: "pages" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

function ResponsiveAppBar({ onToggle }) {
  const [openArrow, setOpenArrow] = React.useState(true);
  const myCartCtx = useContext(cartCtx);
  const handleClick = () => {
    setOpenArrow(!openArrow);
  };

  const showCartHandler = () => {
    myCartCtx.openModal();
  };

  const showWishListHandler = () => {};

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: { xs: "#F6F6F6", md: "white" },
        height: 80,
        p: { xs: "20px", md: "36px 40px" },
        // p: "0px 40px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      }}
      // disableScrollLock={true}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          // href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Oswald",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: 26,
            lineHeight: 30,
            letterSpacing: 0.1,
            color: "#252B42",
            cursor: "context-menu",
          }}
        >
          MEDSONO
        </Typography>

        <Typography
          variant="h5"
          noWrap
          component="a"
          // href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            fontFamily: "Oswald",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: 26,
            lineHeight: 30,
            letterSpacing: 0.1,
            color: "#252B42",
            cursor: "context-menu",
          }}
        >
          MEDSONO
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { lg: "80%" },
          }}
        >
          <Box
            sx={{
              // flexGrow: 0.5,
              display: { xs: "none", md: "flex" },
              // width: "30%",
            }}
          >
            {pages.map((page) => (
              <NavLink
                to={page.page}
                key={page.id}
                className={(navData) =>
                  navData.isActive ? classes.active : classes.navLink
                }
              >
                <Tooltip
                  title={
                    page.id == 0 || page.id == 1
                      ? `Open ${page.page} page`
                      : "The Page not activated yet"
                  }
                  key={page.id}
                >
                  <ListItemButton
                    onClick={() => handleClick(page.id)}
                    sx={{ my: 2 }}
                  >
                    <ListItemText
                      primary={page.page}
                      sx={{
                        textAlign: "center",
                        color: "#737373",
                        fontSize: 17,
                        lineHeight: 24,
                        letterSpacing: 0.2,
                        fontFamily: "Raleway",
                      }}
                    />

                    {page.open &&
                      (openArrow ? (
                        <ExpandLess sx={{ color: "black" }} fontSize="small" />
                      ) : (
                        <ExpandMore sx={{ color: "black" }} fontSize="small" />
                      ))}
                  </ListItemButton>
                </Tooltip>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0.0 }}>
            <Box sx={{ display: { xs: "none", lg: "inline" } }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ ml: 2 }}>
                  <BsPerson
                    fontSize="large"
                    style={{ color: { xs: "#737373", sm: "#23A6f0" } }}
                  />
                  <Typography sx={{ color: "#23A6f0" }}>
                    Login / Register
                  </Typography>
                </IconButton>
              </Tooltip>
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={() => {}} sx={{ ml: 2 }}>
                <SearchOutlinedIcon
                  sx={{ color: { xs: "#737373", md: "#23A6f0" } }}
                  // fontSize="large"
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton
                aria-label={notificationsLabel(5)}
                onClick={showCartHandler}
                sx={{ ml: 2 }}
              >
                {/* <Badge
                  badgeContent={4}
                  color="primary"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  sx={{ color: "black" }}
                > */}
                <Box sx={{ display: { xs: "none", md: "initial" } }}>
                  <BsCart
                    id="shopping"
                    fontSize="large"
                    style={{ color: "#23A6f0" }}
                  />
                </Box>
                <Box sx={{ display: { md: "none" } }}>
                  <BsCart
                    id="shopping"
                    fontSize="large"
                    style={{ color: "#737373" }}
                  />
                </Box>
                <Typography
                  sx={{
                    color: { xs: "#737373", md: "#23A6f0" },
                    fontSize: "12px",
                    marginLeft: "2px",
                  }}
                >
                  {myCartCtx.products.length}
                </Typography>
                {/* </Badge> */}
              </IconButton>
            </Tooltip>

            <Tooltip title="Menu">
              <IconButton
                color="inherit"
                sx={{ ml: 2, display: { md: "none" } }}
                onClick={onToggle}
              >
                <BiMenuAltRight style={{ color: "#33333A" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Wishlist">
              <IconButton
                aria-label={notificationsLabel(5)}
                onClick={showWishListHandler}
                sx={{ ml: 2, display: { xs: "none", md: "inline-flex" } }}
              >
                <AiOutlineHeart
                  id="favorite"
                  fontSize="large"
                  style={{ color: "#23A6f0" }}
                />
                <span
                  style={{
                    color: "#23a6f0",
                    fontSize: "12px",
                    marginLeft: "2px",
                  }}
                >
                  1
                </span>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* <Drawer
          onToggle={() => {
            setOpenDrawer(!openDrawer);
          }}
          open={openDrawer}
        /> */}
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
