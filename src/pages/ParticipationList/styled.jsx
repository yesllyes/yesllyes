import styled from "styled-components";

export const StyledParticipate = styled.li`
 display: flex;
 gap: 10px;

 `;

export const ParticipateWrapper = styled.div`
    width: 390px;
    height: 208px;
    padding-left: 16px;
    
    
 .title {
    margin: 22px 0px 16px;
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 18px;
 }

  `;

