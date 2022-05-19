import React from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg', // placeholder
	});

	const [allMemeImages, setAllMemeImages] = React.useState({
		...memesData,
	});

	function getMeme() {
		const memesArray = memesData.data.memes;
		const url =
			memesArray[Math.floor(Math.random() * memesArray.length)].url;
		setMeme((prevMeme) => {
			return {
				...meme,
				randomImage: url,
			};
		});
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
					onClick={getMeme}
					onMouseOver={handleOnMouseOver}
				>
					Get a New Meme Image 🖼
				</button>
				<img
					className="meme--image"
					src={meme.randomImage}
					alt="Meme"
				/>
			</div>
		</main>
	);
}
