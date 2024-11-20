import {
  ADD_EMPLOYEE,
  SET_PAGE,
  DELETE_EMPLOYEE,
  SET_ITEMS_PER_PAGE,
} from './actionTypes';

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const deleteEmployee = (employeeId) => ({
  type: DELETE_EMPLOYEE,
  payload: employeeId,
});

export const setItemsPerPage = (itemsPerPage) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: itemsPerPage,
});
