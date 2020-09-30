import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useProjects } from '../hooks';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {

  // retrieve the projects on the cloud db
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};