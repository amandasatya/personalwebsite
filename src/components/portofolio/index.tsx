import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../../../constants";
import Link from "next/link";

const WorksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pt-10" id="portofolio">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold text-sky-600 flex justify-center items-center p-5">
            My Portofolio
          </h1>
          <div className="lg:grid lg:grid-cols-3 gap-2 xl:px-40">
            {currentProjects.map((project, index) =>
              project.source_code_link ? (
                <Link
                  className="xl:p-1  rounded-xl shadow-inner shadow-black "
                  key={index}
                  href={project.source_code_link}
                >
                  <img
                    src={project.image?.src}
                    alt={project.name || "Project Image"}
                    className="xl:rounded-t-xl object-cover"
                  />
                  <div className="bg-slate-700 sm:h-56 lg:h-56 rounded-b-lg">
                    <div className="p-5">
                      <label
                        htmlFor=""
                        className="text-center flex justify-center items-center text-xl font-bold"
                      >
                        {project.name}
                      </label>
                      <h1 className="text-center">{project.description}</h1>
                    </div>
                    <div className="p-2">
                      <label
                        htmlFor=""
                        className="text-center flex justify-center items-center"
                      >
                        <div key={index} className="flex gap-1">
                          {project?.tags?.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="flex flex-wrap gap-1 justify-center items-center text-center"
                            >
                              <img
                                src={tag.icon?.src}
                                alt=""
                                className="flex h-6 w-6"
                              />
                              <h1>{tag.name}</h1>{" "}
                            </div>
                          ))}
                        </div>
                      </label>
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>
          <div className="flex items-center justify-end xl:mt-4 xl:pr-40">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="mr-2 bg-sky-600 p-2 rounded-lg"
              >
                Previous
              </button>
            )}
            {projects.length > indexOfLastProject && (
              <button
                onClick={handleNextPage}
                className="mr-2 bg-sky-600 p-2 rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
