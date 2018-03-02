import React, { Component } from "react";
import AppNavigator from "./Helper/Navigation";
import { Provider } from "react-redux";
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
  createTransform
} from "redux-persist";
import { Platform } from "react-native";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";
import reducer from "reducer";

function configureStore(initialState) {
  const persistReducers = persistReducer(
    {
      key: "root",
      storage
    },
    reducer
  );
  return createStore(persistReducers, initialState);
}
const store = configureStore({});
const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
