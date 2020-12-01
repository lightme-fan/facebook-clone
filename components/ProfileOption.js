import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './UseContextWithReducer';

export default function ProfileOptions() {
	const { state, dispatch } = useContext(AppContext);
	const { userData, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [photoProfil, setProfilePictureUrl] = useState('');

	// we get the full current user object back, so we have a name and picture instead of just an id
	const currentUserObj = userData.find(user => user.userId === currentUser) || {
		userName: '',
		photoProfil: '',
	};

	// at the beginning, the userData array will be empty. so we want to update our inputs with the good values when it will be updated!
	useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePictureUrl(currentUserObj.photoProfil);
	}, [userData]);

	function handleNewOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, photoProfil });
		alert('Profile updated successfully');
	}
	return (
		<div>
			<h2>Profile Options</h2>
			<form onSubmit={handleNewOptions}>
				<input
					type="text"
					value={userName}
					onChange={e => setUserName(e.target.value)}
				/>
				<input
					type="url"
					value={photoProfil}
					onChange={e => setProfilePictureUrl(e.target.value)}
				/>
				<button>Save</button>
			</form>
		</div>
	);
}
