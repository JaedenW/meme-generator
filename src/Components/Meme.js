import React from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [memeImage, setMemeImage] = React.useState('');

	function getMemeImage() {
		const memesArray = memesData.data.memes;
		const url =
			memesArray[Math.floor(Math.random() * memesArray.length)].url;
		setMemeImage(url);
	}
	function handleOnMouseOver() {}

	return (
		<main>
			<div className="form">
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
				<button
					className="form--button"
					onClick={getMemeImage}
					onMouseOver={handleOnMouseOver}
				>
					Get a New Meme Image 🖼
				</button>
				<img className="meme--image" src={memeImage} alt="Meme" />
			</div>
		</main>
	);
}
