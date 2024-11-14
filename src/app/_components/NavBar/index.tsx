"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../Logo";

const pages = [
  { label: "Home", link: "/" },
  { label: "Field Service", link: "/field-service" },
  { label: "Spares", link: "/spares" },
  { label: "Lubrication", link: "/lubrication" },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact Us", link: "contact-us" }
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ zIndex: "5" }}>
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Toolbar disableGutters>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              width: 1 / 4
            }}>
            <Container id="main-nav-logo" disableGutters sx={{ height: "80px" }}>
              <Logo />
            </Container>
          </Container>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}>
              {pages.map(({ label, link }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu} href={link}>
                  <Typography sx={{ textAlign: "center" }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            {pages.map(({ label, link }) => (
              <Button
                key={label}
                onClick={handleCloseNavMenu}
                href={link}
                sx={{ my: 2, color: "white", display: "block" }}>
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
