import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';

function AddTask() {
  const appContext = useContext(AppContext);
  const { setRenderTaskForm, setRenderLogin, connected } = appContext as DefaultState;
  const callback = connected ? setRenderTaskForm : setRenderLogin;
  return (
    <button className="AddTask" type="button" onClick={() => callback(true)}>
      Add Task
    </button>
  );
}

export default AddTask;
