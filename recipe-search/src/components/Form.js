import React from 'react';

const Form = props => (


  <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
  </form>

  
);

export default Form;

{/* <div id="cover">
<form method="get" action="">
   <div class="tb">
      <div class="td"><input type="text" placeholder="Search" required /></div>
      <div class="td" id="s-cover">
      <button type="submit">
         <div id="s-circle"></div>
         <span></span>
      </button>
      </div>
   </div>
</form>
</div> */}