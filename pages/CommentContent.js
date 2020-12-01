import React, { Fragment, useContext } from 'react'
import styled from 'styled-components';
import { AppContext } from '../components/UseContextWithReducer'

const ProfileLinkStyles = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
	align-items: center;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
    }
}`;


function Comments() {
    const {state, dispatch} = useContext(AppContext)
    console.log(state);
    const findComment = state.postData.find(post => post.postId === state.currentUser)
    
    const user = state.userData.find(user => user.userId === state.currentUser)
    return (
        <div className='comment-container'>
            {findComment.comments.map(comment => {
                return (
                    <div key={comment.commentId}>
                        <ProfileLinkStyles>
                            <img className='photo-profile' src={user.photoProfil} alt={user.userName}/>
                            <p>{user.userName}</p>
                        </ProfileLinkStyles>            
                        <p>{comment.textComment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments
