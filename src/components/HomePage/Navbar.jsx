import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material";
import "../../styles/homePage.css";
import { useAuth } from "../../contexts/AuthContext";
import icon from "./icons/navbarIcon.svg";
import { useNavigate } from "react-router-dom";

const themeNav = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffff",
    },
  },
});

const settings = ["Войти"];

function ResponsiveAppBar() {
  const { currentUser, handleLogout } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // custom

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={themeNav}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <div
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </div>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* /////////////////////////////////////////////////////////////
                <div
                  style={{ color: "black" }}
                  key="page"
                  onClick={handleCloseNavMenu}
                >
                  <p style={{ color: "black" }}>page</p>
                </div> */}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",

                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                color: "black",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* /////////////////////////////////////////////// */}
              <Button
                key="Найти специалиста"
                onClick={(handleCloseNavMenu, () => navigate("/catalog"))}
                style={{
                  my: 2,
                  color: "#7b92a4",
                  fontSize: "10px",
                  textDecoration: "none",
                  fontFamily: "monospace",
                  border: "none",
                  backgroundColor: "white",
                  fontWeight: 700,
                  lineHeight: "20px",
                  textDecoration: "none",
                  marginLeft: "20px",
                  display: "block",
                }}
              >
                Найти специалиста
              </Button>

              <Button
                key="Стать исполнителем"
                onClick={(handleCloseNavMenu, () => navigate("/becomeAWorker"))}
                style={{
                  my: 2,
                  color: "#7b92a4",
                  fontSize: "10px",
                  textDecoration: "none",
                  fontFamily: "monospace",
                  border: "none",
                  backgroundColor: "white",
                  fontWeight: 700,
                  lineHeight: "20px",
                  textDecoration: "none",
                  marginLeft: "20px",
                  display: "block",
                }}
              >
                Стать исполнителем
              </Button>
            </Box>

            {currentUser ? (
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  sx={{
                    color: "#7b92a4",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                  onClick={handleLogout}
                >
                  {" "}
                  Выйти{" "}
                </Button>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <img src={icon} alt="" style={{ width: "10px" }} />
                <Tooltip title="Open settings">
                  <Button
                    sx={{
                      color: "#7b92a4",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                    onClick={() => navigate("/login")}
                  >
                    {" "}
                    Войти{" "}
                  </Button>
                </Tooltip>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
