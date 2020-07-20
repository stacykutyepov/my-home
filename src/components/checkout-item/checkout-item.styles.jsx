import styled from "styled-components";

export const CheckoutItemcontainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media(max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  height:150px;
  margin-right: 15px;
  background-position: center;
  background-size: cover;

  background-image {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  @media (max-width: 800px) {
    width: 22%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 23%;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
