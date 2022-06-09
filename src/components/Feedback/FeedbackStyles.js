import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 10px;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const FeedbackButtonListItem = styled.button`
  max-width: 150px;
  margin-bottom: 10px;
  text-decoration: none;
  padding: 0.75rem 1.65rem;
  cursor: pointer;
  border: 2px solid darkgrey;
  border-radius: 10%;
  background-color: aqua;
  text-transform: uppercase;

  &:hover {
    /* background-color: yellow; */
    transform: rotate(3deg);
    font-weight: bold;
  }
`;
