import React from 'react';
import Adminnavigate from '../../Adminnavigate';

function Applieddocument() {
  return (
    <div>
      <Adminnavigate/>
        <div className="tabrow">
            <div className="tabcolumn box1" id="appliedDocumentGrid1" >
                <table>
                    <tr>
                        <td><b>Applicant Name :</b> Arul</td>
                        <td><b>Applicant Phone no :</b> 12345</td>
                        <td><b>Applicant age :</b> 23</td>
                    </tr><br/>
                    <tr>
                        <td><b>Applicant address :</b> xxx</td>
                        <td><b>Applicant id :</b> 032882123</td>
                        
                    </tr><br/>
                    <tr>
                        <td><b>Applicant Email : </b>xxx@Gmail.com</td>
                        <td><b>Applicant Aadhar :</b> xxx</td>
                        <td>
                            <a href="/verification/1" id="adminApproveLoan" style={{textDecoration: "none"}}>View Documents</a>
                        </td>
                    </tr>
                    </table>
            </div>
            <div className="tabcolumn box1" id="appliedDocumentGrid2">
                <table>
                    <tr>
                        <td><b>Applicant Name :</b> Arul</td>
                        <td><b>Applicant Phone no :</b> 12345</td>
                        <td><b>Applicant age :</b> 23</td>
                    </tr><br/>
                    <tr>
                        <td><b>Applicant address :</b> xxx</td>
                        <td><b>Applicant id :</b> 032882123</td>
                        
                    </tr><br/>
                    <tr>
                        <td><b>Applicant Email : </b>xxx@Gmail.com</td>
                        <td><b>Applicant Aadhar :</b> xxx</td>
                        <td>
                            <a href="/verification/1" id="adminApproveLoan" style={{textDecoration: "none"}}>View Documents</a>
                        </td>
                    </tr>
                    </table>
            </div>
            <div className="tabcolumn box1" id="appliedDocumentGrid3">
                <table>
                    <tr>
                        <td><b>Applicant Name :</b> Arul</td>
                        <td><b>Applicant Phone no :</b> 12345</td>
                        <td><b>Applicant age :</b> 23</td>
                    </tr><br/>
                    <tr>
                        <td><b>Applicant address :</b> xxx</td>
                        <td><b>Applicant id :</b> 032882123</td>
                        
                    </tr><br/>
                    <tr>
                        <td><b>Applicant Email : </b>xxx@Gmail.com</td>
                        <td><b>Applicant Aadhar :</b> xxx</td>
                        <td>
                            <a href="/verification/1" id="adminApproveLoan" style={{textDecoration: "none"}}>View Documents</a>
                        </td>
                    </tr>
                    </table>
            </div>
            </div>
    </div>
  )
}

export default Applieddocument
