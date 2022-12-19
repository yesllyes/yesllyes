import React from 'react'
import ProfileList from '../../components/MyProfile/ProfileList'
import ProfileInfo from '../../components/MyProfile/ProfileInfo'
import StyledMainProfile from './styled'

const MainProfile = () => (
        <StyledMainProfile>
            <ProfileInfo/>
            <ProfileList/>
        </StyledMainProfile>
    )

export default MainProfile;
