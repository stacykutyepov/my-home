import styled from 'styled-components';

import { ReactComponent as HeartIconSVG } from '../../assets/heart.svg';

export const HeartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(HeartIconSVG)`
  width: 20px;
  height: 20px;
`;

export const ItemCountContainer = styled.span`
 position: absolute;
  line-height: 10px;
  text-align: center;
  background-color: red;
  color: white;
  border: 1px solid red;
  border-radius: 10px;
  width: 13px;
  height: 13px;
  font-size: 10px;
  font-weight: bold;
  bottom: 10px;
  right: 6px;
`;
