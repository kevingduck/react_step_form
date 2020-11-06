import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserForm } from './components/UserForm';
import { ProjectsTable } from './components/ProjectsTable'
import Button from '@material-ui/core/Button';


const App = () => {
  function refreshPage(e) {
    e.preventDefault();
    window.location.reload(false);
  };

  return (
    <div className="App">
      <h1>Converged Networks Project Tracker <b />
        <Button 
          color="primary"
          variant="contained"
          onClick={refreshPage}>New</Button> 
      </h1>
      <ProjectsTable></ProjectsTable>
      <UserForm />
    </div>
  );
}

export default App;
