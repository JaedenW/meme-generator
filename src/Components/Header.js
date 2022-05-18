import React from 'react';
import TrollFace from '../images/troll-face.png';

export default function Header() {
	return (
		<header className="header">
			<img className="header--image" src={TrollFace} alt="TrollFace" />
			<h2 className="header--title">Meme Generator</h2>
			<h4 className="header--project">React Project</h4>
		</header>
	);
}
