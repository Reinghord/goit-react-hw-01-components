import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  font-size: 16px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #fff;
`;

export const Description = styled.div`
  padding-inline: 30px;
  padding-top: 10px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: auto;
`;
export const Name = styled.p`
  font-size: 24px;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;

  border-top: 1px solid grey;
  background-color: #dbdbdb;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-inline: 1px solid grey;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-size: 20px;
`;
