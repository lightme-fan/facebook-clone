import React from 'react'
import { PostContext } from '../components/displayPost'

function PostTemplate({photoProfil, postId, imagePost, username, converted, postText, likes, onClick}) {
    return (
        <>
            <div className='profile'>
                <div>
                    <img className='photo-profile' src={photoProfil} alt={username}/>
                    <p>{username}</p>
                </div>
                <p>{converted}</p>
            </div>

            <p>{postText}</p>
            <img className='post-img' src={imagePost} alt={username}/>
        </>
    )
}

export default PostTemplate
