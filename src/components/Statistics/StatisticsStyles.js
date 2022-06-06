import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style-type: none;
  display: flex;

  align-content: center;
  gap: 10px;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const StatisticsListItem = styled.li`
  max-width: 150px;
  margin-bottom: 10px;
  text-decoration: none;
  padding: 0.75rem 1.65rem;
  border: 2px solid darkgrey;
  border-radius: 10%;
  background-color: aqua;
  text-transform: uppercase;
  text-align: center;
`;
