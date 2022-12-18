import React from 'react';
import { IngProduct, PreProduct, EndProduct  } from '../../components/Product/Product'
import { ParticipateWrapper,  StyledParticipate} from './styled';


const ParticipationList = () => {
    console.log('');
    return(
        <ParticipateWrapper>
        <p className='title'>참여한 가제 활동</p>
        <StyledParticipate>
        <IngProduct />
        <PreProduct />
        <EndProduct />    
        </StyledParticipate>
        </ParticipateWrapper>
    );


}

export default ParticipationList;