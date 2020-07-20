import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    flex-direction: column;
    height: 100px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px;
  font-weight: 700;

  @media (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 5px;
  }

`;
