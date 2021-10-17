import React from 'react';

import Figure from './components/Figure';




  class app extends React.Component {

   render () {
     return (
     <div>
          <h1 className='title'>Geometrizando</h1>
       <div className="content">   

          <Figure type="square"/><br/>         
          <Figure type="circle"/><br/>
          <Figure type="triangle"/><br/>         
          <Figure type="rectangle"/><br/>

       </div>
     </div>
     )
   }
  }
  export default app;