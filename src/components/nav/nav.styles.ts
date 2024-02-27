import styled from "styled-components";

export const NavContainer = styled.ul`
  grid-area: nav;

  padding-top: ${({theme}) => theme.SPACING.REGULAR};
  padding-left: ${({theme}) => theme.SPACING.SMALL};

  li {
    list-style: none;
  }
`
