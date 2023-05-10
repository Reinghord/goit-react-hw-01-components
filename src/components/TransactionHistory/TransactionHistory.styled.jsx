import styled from '@emotion/styled';

export const TransactionHistoryBox = styled.table`
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: turquoise;
  color: white;
  font-size: 24px;
`;

export const TableHeadItem = styled.th`
  padding-inline: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const TableBody = styled.tbody`
  font-size: 22px;
`;

export const TableRow = styled.tr`
  &:nth-child(n) {
    background-color: white;
  }
  &:nth-child(2n) {
    background-color: rgb(223, 223, 223);
  }
`;
