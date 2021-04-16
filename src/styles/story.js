/* Stylesheet for a Story */

import styled from "styled-components";
import { Button } from "reactstrap";

// Story Row
export const TableRow = styled.tr`
  margin: 0px !important;
  padding-left: 15px !important;
`;

// Coloumns in Top Row
export const TableColumnTop = styled.td`
  padding: 0px !important;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 11pt;
  color: #828282;
  overflow: hidden;
`;

// Columns in Bottom Row
export const TableColumnBottom = styled.td`
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-bottom: 8px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 9pt;
  color: #828282;
`;

export const StoryTitle = styled.a`
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: black;
  }
`;

// Story from link
export const StoryBaseUrl = styled.a`
  color: inherit;
  text-decoration: none;

  :hover {
    color: inherit;
  }
`;

// Span Surrounding the from link
export const StoryBaseUrlSpan = styled.span`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 9pt;
  color: #828282;
`;

export const UpvoteButton = styled(Button)`
  padding: 0px !important;
  color: inherit !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: 0px !important;

  :focus {
    border: 0px solid white !important;
    box-shadow: none !important;
  }

  :active {
    box-shadow: none !important;
    color: black !important;
  }
`;

// Buttons for hide, comments, etc
export const LinkButton = styled(Button)`
  padding: 0px !important;
  color: inherit !important;
  font-size: inherit !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: 0px !important;

  :hover {
    text-decoration: underline;
  }

  :focus {
    border: 0px solid white !important;
    box-shadow: none !important;
    text-decoration: underline;
  }

  :active {
    box-shadow: none !important;
    text-decoration: underline;
  }
`;

export const SmBreak = styled.br`
  display: none;
  
  @media only screen and (max-width: 768px) {
    display: block;
  }
`

export const SmBorderLine = styled.span`
  display: none;
    
  @media only screen and (min-width: 768px) {
    display: contents;
  }
`