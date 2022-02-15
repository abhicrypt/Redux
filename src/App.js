import React from 'react';
//  import "./App.css" 
const App = () => {
  return <div>
    <div className='container'>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className='quantity'>
        <a className='quantity_minus' title="Decrement"><span>-</span></a>
        <input name ="quantity" type="text" class="quantity_input"value="0"/>
        <a className='quantity_plus' title="Increment"><span >+</span></a>
      </div>
    </div>

  </div>;
};

export default App;
