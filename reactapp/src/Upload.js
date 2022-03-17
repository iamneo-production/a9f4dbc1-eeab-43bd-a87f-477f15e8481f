import React from 'react';

import './App.css';
import { Link } from 'react-router-dom';

const Upload = () =>{
return(
<div className='myDiv'>
<h3>APPLICATION FORM</h3>
<h2>Upload Documents(Mandatory To Upload)</h2>
<form>
  <label>Choose type of the file:</label>
  <select >
    <option value="pdf">PDF</option>
    <option value="jpg">JPG</option>
    <option value="png">PNG</option>
    
  </select>
</form>

<h2>Upload AdharCard</h2>
<input type="file" id="myFile"/>

<h2>Upload PanCard</h2>
<input type="file" id="myFile"/>

<h2>10 th class marksheet</h2>
<input type="file" id="myFile"/>


<button>
      <Link to="/track">Subit</Link>
      </button>
      </div>
)
}
export default Upload;
