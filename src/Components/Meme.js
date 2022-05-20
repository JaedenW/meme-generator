import React from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg', // placeholder
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

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

	function handleClick(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value,
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
					onChange={handleClick}
					name="topText"
					value={meme.topText}
				></input>
				<input
					className="form--input"
					type="text"
					placeholder="Bottom Text"
					onChange={handleClick}
					name="bottomText"
					value={meme.bottomText}
				></input>
				<button
					className="form--button"
					onClick={getMeme}
					onMouseOver={handleOnMouseOver}
				>
					Get a New Meme Image 🖼
				</button>
				<div className="meme">
					<img
						className="meme--image"
						src={meme.randomImage}
						alt="Meme"
					/>
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</div>
		</main>
	);
}
