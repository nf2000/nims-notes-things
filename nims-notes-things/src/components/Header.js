import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return <HeaderStyle {...props}>{props.children}</HeaderStyle>;
};

const HeaderStyle = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(12px + 6vmin);
  color: white;
`;

export default Header;
