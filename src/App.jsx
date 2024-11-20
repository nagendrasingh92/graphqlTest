import { Provider } from 'react-redux';
import {store, persistor} from './store/store';
// import EmployeeForm from './pages/EmployeeForm';
// import EmployeeList from './pages/EmployeeList';
import { Container } from '@mui/material';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import TodoList from './pages/TodoList'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <TodoList />
      </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
