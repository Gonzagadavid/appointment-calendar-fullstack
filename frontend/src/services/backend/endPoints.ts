const BASE_URL = process.env.REACT_APP_BACKENDAPP || 'http://localhost:3800';

export const POST_USER = `${BASE_URL}/users`;

export const LOGIN = `${BASE_URL}/users/login`;

export const SEND_PASSWORD = `${BASE_URL}/email/password`;

export const EMAIL_CODE = `${BASE_URL}/email`;

export const TASKS = `${BASE_URL}/tasks`;

export const TASK_BY_ID = (id: string) => `${BASE_URL}/tasks/${id}`;
