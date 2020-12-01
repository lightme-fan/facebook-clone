import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { AppContext } from './UseContextWithReducer';

const ProfileLinkStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 15px;
	align-items: center;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
    }
}`;

    
function Header({id}) {
    const { state, dispatch } = useContext(AppContext)
    const currentUser = state.userData.find(user => user.userId === state.currentUser)
    
    return (
        <header className='header'>
            <h1>OnjaBook</h1>
            <Link to='/'>Feed</Link>
            <Link to='/addPost'>Add a post</Link>
            <Link to='/user'>
                <ProfileLinkStyles>
                    <span>{currentUser.userName}</span>
                    <img src={currentUser.photoProfil}/>
                </ProfileLinkStyles>
            </Link>
        </header>
    )
}

export default Header
