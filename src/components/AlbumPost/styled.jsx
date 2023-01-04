import styled from 'styled-components';

const StyledAlbumCard = styled.article`
  > a {
    display: block;
    width: 115px;
    height: 115px;
    border: 1px solid ${({ theme }) => theme.colors.ActiveborderColor};
    overflow: hidden;
    border-radius: 4px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default StyledAlbumCard;
