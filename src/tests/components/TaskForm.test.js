import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import TaskForm from '../../components/TaskForm';
import renderWithAllProviders from '../helpers/renderWithAllProviders';

const appState = {
  selectedDay: 12,
  selectedMonth: 'April',
  selectedYear: 2022,
  renderTaskForm: true,
  setRenderTaskForm: jest.fn(),
};

const taskForm = {
  title: 'Test',
  description: 'description task',
  time: '20:30',
  status: 'Programmed',
};

const taskState = {
  postNewTask: jest.fn(),
  edit: false,
  idSelected: 1,
  updateTask: jest.fn(),
  taskForm,
  setTaskForm: jest.fn(),
};

describe('Verifica a renderização e o funcionamento do componente TaskForm', () => {
  it('verifica a renderização de todos os elementos do formulário', () => {
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const title = screen.getByPlaceholderText('Title');
    const description = screen.getByPlaceholderText('Description');
    const time = screen.getByLabelText('Scheduled Time:');
    const status = screen.getByLabelText('Status:');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });

  it('verifica o  funcionamento de todos os elementos do formulário', () => {
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const title = screen.getByPlaceholderText('Title');
    const description = screen.getByPlaceholderText('Description');
    const status = screen.getByLabelText('Status:');

    userEvent.type(title, 'Task');

    expect(taskState.setTaskForm).toBeCalledTimes(4);

    userEvent.type(description, 'Task test');

    expect(taskState.setTaskForm).toBeCalledTimes(13);

    userEvent.selectOptions(status, 'In progress');

    expect(taskState.setTaskForm).toBeCalledTimes(14);
  });

  it('verifica o fucionamento do botão para salvar uma nova task', () => {
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const salvar = screen.getByText('Save');

    userEvent.click(salvar);

    expect(taskState.postNewTask).toBeCalled();
  });

  it('verifica o fucionamento do botão para salvar uma nova task', () => {
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const salvar = screen.getByText('Save');

    userEvent.click(salvar);

    expect(taskState.postNewTask).toBeCalled();
  });

  it('verifica o fucionamento do botão cancelar', () => {
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const cancelar = screen.getByText('Cancel');

    userEvent.click(cancelar);

    expect(appState.setRenderTaskForm).toBeCalled();
  });

  it('verifica ao editar os dados das tarefas estão nos elementos do formulário', () => {
    taskState.edit = true
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const title = screen.getByPlaceholderText('Title');
    const description = screen.getByPlaceholderText('Description');
    const time = screen.getByLabelText('Scheduled Time:');
    const status = screen.getByLabelText('Status:');

    expect(title).toHaveValue('Test');
    expect(description).toHaveValue('description task');
    expect(time).toHaveValue('20:30');
    expect(status).toHaveValue('Programmed');
  });

  it('verifica o fucionamento do botão para salvar uma tarefa editada', () => {
    renderWithAllProviders(<TaskForm />, appState, {}, {}, taskState);

    const salvar = screen.getByText('Save');

    userEvent.click(salvar);

    expect(taskState.updateTask).toBeCalled();
  });
});
