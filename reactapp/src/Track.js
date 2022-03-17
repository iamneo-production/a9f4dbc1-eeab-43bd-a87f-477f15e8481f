import React from 'react';
 
const Track  = () =>{
    return(
        <div>
      <div>
        <form>
          <h3 >
            Track Your Application
          </h3>
          <input
            type="number"
            id="enterApplicationID"
            placeholder="Enter Your application id"
          /><br />
          <button >Track
          </button>
        </form>
      </div>
    </div>
    )
}
export default Track;