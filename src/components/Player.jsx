import { useState, useRef } from 'react';
export default function Player() {
	function handleSubmit(e) {
		e.preventDefault();
		setPlayerName(player.current.value);
	}

	const player = useRef();
	const [playerName, setPlayerName] = useState();
	return (
		<section id='player'>
			<h2>{`Welcome ${playerName ? playerName : 'unknown entity'}`}</h2>
			<form onSubmit={handleSubmit}>
				<input ref={player} type='text' />
				<button>Set Name</button>
			</form>
		</section>
	);
}
