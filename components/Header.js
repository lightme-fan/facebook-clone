import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {PostContext} from './DisplayPost'

function Header() {
    
    return (
        <header className='header'>
            <h1>OnjaBook</h1>
            <div className='menu'>
                <Link to='/'>Feed</Link>
                <Link to='/addPost'>Add a post</Link>
            </div>
            <div className='profile'>
                <span className='profile--username'>Userame</span>
                <img className='profile--photo' src='' alt='Username'/>
            </div>
        </header>
    )
}

export default Header
