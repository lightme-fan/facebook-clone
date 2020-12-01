import React from 'react'

function PostElement({photoProfil, username, converted, imagePost, postText}) {
    return (
        <div>
            <div className='profile'>
                <div>
                    <img className='photo-profile' src={photoProfil} alt={username}/>
                    <p>{username}</p>
                </div>
                <p>{converted}</p>
            </div>
            <p>{postText}</p>
            <img className='post-img' src={imagePost} alt={username}/>
        </div>
    )
}

export default PostElement
