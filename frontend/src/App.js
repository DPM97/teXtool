import React from 'react';
import './App.css';
import ConvertBtn from './components/ConvertBtn';
import Side from './components/Side';
import { Toaster } from 'react-hot-toast';
import logo from './logo.png'
const fromOpts = [
  {
    value: 'excel',
    label: 'Excel'
  }
]

const toOpts = [
  {
    value: 'texTable',
    label: 'laTeX Table'
  }
]

function App() {
  return (
    <div id="app" className="App">
      <Toaster />
      <img style={{ marginTop: '50px', height: '50px' }} src={logo} alt="logo" />
      <div class="main">
        <Side options={fromOpts} identifier="from" placeholder="Select Input Format" />
        <ConvertBtn />
        <Side options={toOpts} identifier="to" placeholder="Select Output Format" />
      </div>
    </div>
  );
}

export default App;
