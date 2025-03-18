import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './tasks/contactsSlice';
import { filterReducer } from './tasks/filterSlice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Only persist the token field
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // Persisted auth reducer
    contacts: contactsReducer, // Contacts reducer
    filter: filterReducer, // Filter reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore these actions for serializable check
      },
    }),
  devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools in development mode
});

// Create a persistor for the store
export const persistor = persistStore(store);
