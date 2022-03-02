import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';

function AddTask() {
  const appContext = useContext(AppContext);
  const { setRenderTaskForm } = appContext as DefaultState;
  return (
    <button type="button" onClick={() => setRenderTaskForm(true)}>
      Add Task
    </button>
  );
}

export default AddTask;
