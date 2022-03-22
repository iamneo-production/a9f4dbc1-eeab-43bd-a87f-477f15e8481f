import {React,useState} from 'react';
import NavigateBar from './NavigateBar';
import pad from './pad.png';
import {useNavigate} from 'react-router-dom';

function Fileupload() {

  let navi=useNavigate();

  const[data,setData] = useState({
    DocumentType :'',
  })
  const {DocumentType} = data;
  const changeHandler = e => {
    setData({[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data);
    
  }
  const changeHandlerFiles = e => {
    let files=e.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload=(e)=>{
      console.log("img_data",e.target.result);
    }
  }


  return (
    <div className='main'>
        <NavigateBar/><br/>
        <div className="main-tag1" style={{height: '100%',width: '100%'}}>
        <div className="addrrow">
        <div className="addrcol">
        <form onSubmit={submitHandler}>
          <br/>
          <p style={{fontSize: '20px',padding:'20px',marginLeft:'40px'}}>Upload Documents (Mandatory Id proof)<br/>
          <select required name="DocumentType" value={DocumentType} id="selectDocumentType" onChange={changeHandler}>
            <option value="" disabled selected hidden>Please pick a type</option>
            <option value="aadhar">Aadhar</option><br/>
            <option value="DL">Driving Licence</option><br/>
            <option value="VoterId">Voter Id</option>
          </select><br/><br/><br/>
          <p style={{fontSize: '20px',padding:'20px'}}>Images or Documents (Upload below 2mb)</p>
          <input type="file" id="chooseFile"  onChange={(e)=>changeHandlerFiles(e)}/></p><br/>
          <button id="uploadDocumentsButton" className="asd2">Upload Documents</button><br/><br/>
          </form>
        </div>
        <div className="upcol"><img src={pad} alt="submit" width="40%" height="40%"/>
        
        <button onClick={()=>navi('/submission')} id="submitapplicationButton" style={{marginBottom:"20px"}} className="asd3">Submit</button>   
        </div>
        <div style={{marginBottom:"20px"}}><a href="/newcardform/1" className="asd3 nav-links">1</a>{" "}<a href="/newcardform/2" className="asd2 nav-links">2</a></div>
    
      </div>
      
    </div>  
    </div>
  )
}

export default Fileupload
