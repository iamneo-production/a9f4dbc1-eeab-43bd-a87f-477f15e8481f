import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavigateBar from './NavigateBar'
import track1 from './track1.jpg'
import track2 from './track2.jpg'
import './App.css'

function Track() {

    let navi=useNavigate();

    const[data,setData] = useState({
        id :'',
      })
      const {id} = data;
      const changeHandler = e => {
        setData({[e.target.name]:[e.target.value]})
      }
      const submitHandler = e =>{
        e.preventDefault()
        console.log(data);
        navi('/applications');
      }

  return (
    <div>
        <NavigateBar/>
        <div className="approw" id="notificationBody">
            <div className="appcolumn square" style={{marginTop:"200px"}}>
                <img src={track1} alt="File track" className="inp3" style={{marginRight:"100px"}}/>
            </div>
            <div className="appcolumn" style={{marginTop:"200px",fontSize:'27px'}}>
                <p>Track Your Application</p><br/>
                <form onSubmit={submitHandler}>
                <input type="text" style={{border: "1px solid"}} className="inp1" id="enterApplicationId" name="id" value={id} onChange={changeHandler} placeholder="enter your application id" /><br/>
                <button type="submit" id="trackButton" className="asd2  " >Track</button>
                </form>
            </div>
            <div className="appcolumn square" style={{marginTop:"170px"}}>
                <img src={track2} alt="File track" className="inp3" style={{height:'50%',width:'50%',marginRight:"150px"}}/>
            </div>
            
        </div>
    </div>
  )
}

export default Track
