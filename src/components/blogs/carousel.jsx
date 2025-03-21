import React from "react";
import { Carousel } from "antd";

const App = (props) => {
	const { images } = props;
	return (
		<Carousel autoplay arrows>
			{images.map((image, index) => (
				<img src={image} alt="logo" />
			))}
		</Carousel>
	);
};
export default App;
