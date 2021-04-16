/* Hacker News Navbar for a Layout */
import React, { useState } from "react";
import { NavbarWrapper, NavbarHeader } from "styles/navbar";
import { Collapse, Nav, NavItem, NavLink, NavbarToggler } from "reactstrap";
import logo from "assets/img/logo.png"; // Hacker News Logo

// Collabsible Navbar
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <NavbarWrapper className="navbar navbar-expand-sm navbar-light py-0 px-0">
      <NavbarHeader className="navbar-brand" href=".">
        <img
          id="logo"
          src={logo}
          width="25"
          alt=""
          className="d-inline-block align-center"
        />{" "}
        &nbsp;
        <b>Hacker News</b>
      </NavbarHeader>
      <NavbarToggler onClick={toggleNavbar} className="mr-2 mt-2 mb-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="mr-auto">
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">new</NavLink>
          </NavItem>
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">past</NavLink>
          </NavItem>
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">comments</NavLink>
          </NavItem>
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">ask</NavLink>
          </NavItem>
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">show</NavLink>
          </NavItem>
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">jobs</NavLink>
          </NavItem>
          <NavItem className="pl-3 pl-md-0 pl-lg-0">
            <NavLink href="/">submit</NavLink>
          </NavItem>
        </Nav>
        <NavLink style={{ color: "black" }} href="#">
          login
        </NavLink>
      </Collapse>
    </NavbarWrapper>
  );
};

export default Navbar;
