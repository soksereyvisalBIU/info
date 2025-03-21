import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./carousel";

import "./styles/blog.css";

const Blog = (props) => {
	const { logo, title, description, linkText, link, images } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-title">{title}</div>
					<div className="slide-show-container">
						<Carousel images={images} />
					</div>
					<div className="project-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Blog;
