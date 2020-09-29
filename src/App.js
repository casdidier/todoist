import React, { useState } from 'react';

import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';

import { ProjectsProvider, SelectedProjectProvider } from './context';

const App = ({ darkModeDefault = false }) => {

  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
            <Content></Content>
          </main>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
