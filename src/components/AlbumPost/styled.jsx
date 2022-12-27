import styled from 'styled-components';

const StyledAlbumCard = styled.article`
  width: 114px;
  height: 114px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export default StyledAlbumCard;
