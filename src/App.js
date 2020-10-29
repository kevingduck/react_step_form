import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserForm } from './components/UserForm';
import { ProjectsTable } from './components/ProjectsTable'

const App = () => {
  return (
    <div className="App">
      <h1>Converged Networks Project Tracker</h1>
      <ProjectsTable></ProjectsTable>
      <UserForm />
    </div>
  );
}

export default App;
