import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './Context';
import { FormStyle } from './Styles';

export default function ProfileOptions() {
	const { state, dispatch } = useContext(GlobalContext);
	const { users, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [profilePictureUrl, setProfilePictureUrl] = useState('');

	const currentUserObj = users.find(user => user.userId === currentUser) || {
		userName: '',
		profilePictureUrl: '',
	};

	useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePictureUrl(currentUserObj.profilePictureUrl);
	}, [users]);

	function updateUserOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePictureUrl });
	}
	
	return (
		<div>
			<h2>Profile Options</h2>
			<FormStyle onSubmit={updateUserOptions}>
				<input
					type="text"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					required
				/>
				<input
					type="url"
					value={profilePictureUrl}
					onChange={e => setProfilePictureUrl(e.target.value)}
					required
				/>
				<button>Save</button>
			</FormStyle>
		</div>
	);
}
