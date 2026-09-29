import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 2 * 20px) / 3);
`;

export const Title = styled.h3`
  color: #212121;
  font-size: 24px;
`;
