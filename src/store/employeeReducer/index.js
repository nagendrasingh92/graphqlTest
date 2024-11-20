const initialState = {
  employees: [],
  currentPage: 1,
  itemsPerPage: 6,
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return { ...state, employees: [...state.employees, action.payload] };

    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_ITEMS_PER_PAGE':
      return { ...state, itemsPerPage: action.payload };

    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter((employee) => {
          return employee.employeeUniqueId !== action.payload;
        }),
      };
    default:
      return state;
  }
};
