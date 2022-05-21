import React from 'react';

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg', // placeholder
	});

	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(() => {
		async function getMemes() {
			const res = await fetch('https://api.imgflip.com/get_memes');
			const data = await res.json();
			setAllMemes(data.data.memes);
		}
		getMemes();
	}, []);

	// console.log(allMemes);
	function getMeme() {
		const url = allMemes[Math.floor(Math.random() * allMemes.length)].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: url,
			};
		});
	}

	function handleChange(event) {
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
					onChange={handleChange}
					name="topText"
					value={meme.topText}
				></input>
				<input
					className="form--input"
					type="text"
					placeholder="Bottom Text"
					onChange={handleChange}
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
			</div>
			<div className="meme">
				<img
					className="meme--image"
					src={meme.randomImage}
					alt="Meme"
				/>
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
