import React from 'react';

export default function Meme() {
	return (
		<main>
			<form className="form">
				<input
					className="form--input"
					type="text"
					placeholder="Top Text"
				></input>
				<input
					className="form--input"
					type="text"
					placeholder="Bottom Text"
				></input>
				<button className="form--button">Get a New Meme Image 🖼</button>
			</form>
		</main>
	);
}
