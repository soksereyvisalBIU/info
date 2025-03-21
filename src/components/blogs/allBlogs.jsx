import React from "react";

import Blog from "./blog";

import Carousel from "./carousel";

import INFO from "../../data/user";

import "./styles/allBlogs.css";

const AllBlogs = () => {
	return (
		<div className="all-blogs-container">


			{INFO.achievement.blogs.map((project, index) => (
				<div className="all-blogs-project" key={index}>
					<Blog
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						images={project.images}
					/>
				</div>
			))}
		</div>
	);
};

export default AllBlogs;
