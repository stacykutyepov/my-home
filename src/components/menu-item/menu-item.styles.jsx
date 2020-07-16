import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 40%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media (max-width: 800px) {
    height: 200px;
    min-width: 50%;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: saturate(120%);

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 100px;
  padding: 15px 25px;
  width: 290px;
  display: flex;
  flex-direction: column;
  background-color: white;
  opacity: 0.8;
  position: absolute;
  margin-bottom: 20px;
  /* &:hover{
    opacity: 0.9;
    font-size:20px;
  } */
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 17px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 13px;
  font-weight: bold;
`;
