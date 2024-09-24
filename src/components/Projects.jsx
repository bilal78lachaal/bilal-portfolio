import React from "react";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "This is a brief description of Project 1.",
    image: "/path/to/image1.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is a brief description of Project 2.",
    image: "/path/to/image2.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is a brief description of Project 3.",
    image: "/path/to/image3.jpg",
    link: "#",
  },
  {
    id: 1,
    name: "Project 1",
    description: "This is a brief description of Project 1.",
    image: "/path/to/image1.jpg",
    link: "#",
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-400">My Projects</h1>
        <p className="text-gray-300">
          Here are a few of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-110 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6 bg-slate-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-700 hover:text-blue-400 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
