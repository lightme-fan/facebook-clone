import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../components/UseContextWithReducer'

const UserStyle = styled.div`
    img {
        width: 50px;
        height: 50px;
    }
    display: flex;
    gap: 20px
`;

function UserPost() {
    const {state, dispatch} = useContext(AppContext)
    const currentUser = state.userData.find(user => user.userId === state.currentUser)

    return (
        <UserStyle>
            <img className='photo-profile' src={currentUser.photoProfil} alt={currentUser.userName}/>
            <p>{currentUser.userName}</p>
        </UserStyle>
    )
}

export default UserPost
