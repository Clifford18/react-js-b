 import React from 'react'

 const Hello = () => {
   // return(
	//    <div>
	// 	   <h1>Hello CJX</h1>
	//    </div>
   // )

	 return React.createElement(
		 'div',
		 null,
		 React.createElement(
			 'h2',
			 null,
			 'Hello CJX'))
 }
 export default Hello