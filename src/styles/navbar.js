/* Stylesheet for Navbar */
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: #ff6600;
  width: 100%;
  margin: 0px !important;
  color: black;
`;

// Navbar Brand
export const NavbarHeader = styled.a`
  color: black;
  padding: 2px 2px;
  text-decoration: none;
  font-size: 1rem;

  :hover {
    text-decoration: none;
    color: black;
  }
`;
