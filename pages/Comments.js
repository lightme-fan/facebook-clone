import React from 'react'

function Comments({date, textComment, photoProfil, username}) {
    return (
        <div className='comment-container'>
            <div className='username'>
                <div>
                    <img className='photo-profile' src={photoProfil} alt={username}/>
                    <p>{username}</p>
                </div>
                <span>{date}</span>
            </div>
            <p>{textComment}</p>
        </div>
    )
}

export default Comments
