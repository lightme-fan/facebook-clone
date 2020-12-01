import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './UseContextWithReducer';

function Header({id}) {
    const { userData, state, dispatch } = useContext(AppContext)
    
    const mappedUser = state.userData.map(user =>
        <div className='profile' key={user.userId}>
            <img className='photo-profile' src={user.photoProfil} alt='Username'/>
            <span className='profile--username'>{user.userName}</span>
        </div>
    )
    
    return (
        <header className='header'>
            <h1>OnjaBook</h1>
            <Link to='/'>Feed</Link>
            <Link to='/addPost'>Add a post</Link>
            {mappedUser}
        </header>
    )
}

export default Header
