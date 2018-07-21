import React from 'react'
import Store from './Store';
import Header from '../containers/Header';

const App = () => {
  return (
    <div className="container">
      <Header />
       <Store />
    </div>
  )
}

export default App;