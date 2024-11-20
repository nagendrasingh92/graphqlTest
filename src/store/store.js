import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { employeeReducer } from './employeeReducer';

// Configure redux-persist
const persistConfig = {
  key: 'root', // Key used to identify the persisted data
  storage, // Use localStorage as the storage engine
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, employeeReducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Create the persistor instance for managing persistence
const persistor = persistStore(store);

export { store, persistor };
