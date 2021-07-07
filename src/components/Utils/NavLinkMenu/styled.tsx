import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavLinkStyled = styled(NavLink)<{ bgcolor: string }>`
  display: flex;
  width: 10em;
  height: 9em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // background-color: $bg-color-option;
  color: rgb(61, 61, 61);
  border-radius: 5px;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : 'transparent'};
  margin: 0.4em;
  //border-right: 2px solid rgb(207, 203, 203);
  text-decoration: none;
  padding: 0.5em;
  transition: all ease 150ms;
  cursor: pointer;

  .icon {
    img {
      width: 4.5em;
    }
  }

  span {
    font-size: 1em;
    font-weight: 600;
  }

  &:hover {
    box-shadow: 0 0 6px 0 rgba(77, 77, 77, 0.5);
  }
`
export default NavLinkStyled
