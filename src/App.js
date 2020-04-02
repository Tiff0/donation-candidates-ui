import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DonationCandidates from "./components/DonationCandidates"

function App() {
  return (
    <Provider store={store}>
      <DonationCandidates />
    </Provider>
  );
}

export default App;
