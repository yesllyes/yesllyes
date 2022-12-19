import styled from "styled-components";


export const ProfileWrapper = styled.div`
   width: 100%;
   margin: 0 auto;
`

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

  export const StyledProfileInfo = styled.div`
   height: 362px;
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   

   .ProfileHeader {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 390px;
      width: 100%;
      margin-top: 30px;
      gap: 35px;

      .follwers {      
        
         font-weight: 700; 
         font-size: ${({ theme }) => theme.fontSize.xlarge};
         text-align: center;
         
         
         }
         
      .followings {
         font-weight: 700; 
         font-size: ${({ theme }) => theme.fontSize.xlarge};
         color: ${({ theme }) => theme.colors.lightGray};
         text-align: center;

      }

      
      span {
         font-size: ${({ theme }) => theme.fontSize.xsmall};
         color: ${({ theme }) => theme.colors.lightGray};
      }
      }
   

   .ProfileMain {
            margin: 18px 0px;
            font-size: ${({ theme }) => theme.fontSize.large};

         span {
            padding-top: 6px;
            font-size: ${({ theme }) => theme.fontSize.small};
            color: ${({ theme }) => theme.colors.lightGray};
            text-align: center;

         }
      }

   

   .ProfileSub {
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.colors.lightGray};

   }
      p {
         position: relative;  

         span {
            display: block;    
         }    
      }

      .ProfileFooter {
            margin: 25px 0px;
            display: flex;
            align-items: center;
            gap:10px;

         img {
            display: block;
            width:20px;
            margin: auto;
            object-fit: cover;
            
         }
      
      }
      
  `;

export const CircleBtn = styled.button`
width: 34px;
height: 34px;
border: 1px solid #DBDBDB;
border-radius: 30px;

`




