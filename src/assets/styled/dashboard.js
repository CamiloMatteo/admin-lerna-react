import styled, { keyframes } from "styled-components";
import LogoAutentia from "../images/autentia-logo.svg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Navigation = styled.nav`
  height: 3.875em;
  background-color: white;
  display: flex;
  align-content: center;
  border-bottom: 1px solid #e0e0e0;
  grid-column: 1 / last-line;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  animation: 1s ${fadeIn} ease-out;
`;

export const LogoNavBar = styled.img.attrs(props => ({
  src: LogoAutentia,
  alt: "Logo Autentia",
}))`
  grid-column: 2 / 3;
`;

export const SideBar = styled.div`
  position: absolute;
  left: -200px;
  padding-top: 1rem;
  border-radius: 8px;
  display: inline-block;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  padding-bottom: 1em;

  @media ${({ theme }) => theme.mediaQueries.minWidth768} {
    grid-column: 2 / span 3;
    position: static;
  }

  @media ${({ theme }) => theme.mediaQueries.minWidth1024} {
    grid-column: 2 / span 2;
  }
`;

export const FooterProfile = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  
  a {
    margin-left: auto;
  }
`;

export const ProfileAvatar = styled.span`
  height: 32px;
  width: 32px;
  background-color: #c3d3ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
`;

export const ProfileName = styled.span`
  font-size: 16px;
  color: #222a44;
  display: block;
  line-height: 0.75;
`;

export const ProfileRole = styled.span`
  font-size: 12px;
  color: #6e6e6e;
`;

export const SideBarHeader = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const H4 = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  color: rgb(110, 110, 110);
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(50, 115, 220);
  font-weight: 300;
  font-size: 0.75rem;
  text-decoration: none;
  margin-left: 1rem;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;

  &:hover {
    background: rgb(240, 244, 255);
  }
`; 

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid rgb(232, 232, 232);
  margin-bottom: 2rem;
`;

export const NavLink = styled.a`
  border-radius: 8px;
  padding: 0.625rem;
  text-decoration: none;
  font-weight: 300;
  color: rgb(110, 110, 110);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  border: 1px solid transparent;

  &:last-child {
    margin-bottom: 0rem;
  }

  &:hover {
    background: rgb(245, 245, 245);
  }
`;

export const I = styled.i`
  width: 20px;
  text-align: center;
  margin-right: 0.25rem;
`;

export const Active = styled.nav`
  color: rgb(41, 98, 255);
  background: rgb(240, 244, 255);
  border: 1px solid rgb(195, 211, 255);
`;
