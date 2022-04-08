import React from "react";
import "./Grid.css";
import NavigateBar from "./NavigateBar";
import approve from "./approve.jpg";
import reject from "./reject.jpg";
import progress from "./progress.jpg";

function Applications() {
  return (
    <div>
      <NavigateBar />
      <div className="img">
        <div className="tabrow" id="statusGrid1">
          <div className="tabcolumn left box">
            <table>
              <tr>
                <td>
                  <b>Applicant Name :</b> Arul
                </td>
                <td>
                  <b>Applicant Phone no :</b> 12345
                </td>
                <td>
                  <b>Applicant age :</b> 23
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <b>Applicant address :</b> xxx
                </td>
                <td>
                  <b>Applicant id :</b> 032882123
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <b>Applicant Email : </b>xxx@Gmail.com
                </td>
                <td>
                  <b>Applicant Aadhar :</b> xxx
                </td>
                <td
                  style={{
                    backgroundColor: "green",
                    textAlign: "center",
                    borderRadius: "50px",
                    width: "70px",
                    color: "white",
                  }}
                >
                  Approved
                </td>
              </tr>
            </table>
          </div>
          <div className="tabcolumn right">
            <img
              src={approve}
              alt="Approved"
              className="inp3"
              style={{
                height: "55%",
                width: "55%",
                marginRight: "150px",
                marginTop: "50px",
              }}
            />
          </div>
        </div>

        <div className="tabrow" id="statusGrid2">
          <div className="tabcolumn left box">
            <table>
              <tr>
                <td>
                  <b>Applicant Name :</b> Arul
                </td>
                <td>
                  <b>Applicant Phone no :</b> 12345
                </td>
                <td>
                  <b>Applicant age :</b> 23
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <b>Applicant address :</b> xxx
                </td>
                <td>
                  <b>Applicant id :</b> 032882123
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <b>Applicant Email : </b>xxx@Gmail.com
                </td>
                <td>
                  <b>Applicant Aadhar :</b> xxx
                </td>
                <td
                  style={{
                    backgroundColor: "red",
                    textAlign: "center",
                    borderRadius: "50px",
                    width: "70px",
                    color: "white",
                  }}
                >
                  Rejected
                </td>
              </tr>
            </table>
          </div>
          <div className="tabcolumn right" id="statusGrid3">
            <img
              src={reject}
              alt="Rejected"
              className="inp3"
              style={{
                height: "50%",
                width: "50%",
                marginRight: "150px",
                marginTop: "50px",
              }}
            />
          </div>
        </div>

        <div className="tabrow">
          <div className="tabcolumn left box">
            <table>
              <tr>
                <td>
                  <b>Applicant Name :</b> Arul
                </td>
                <td>
                  <b>Applicant Phone no :</b> 12345
                </td>
                <td>
                  <b>Applicant age :</b> 23
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <b>Applicant address :</b> xxx
                </td>
                <td>
                  <b>Applicant id :</b> 032882123
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <b>Applicant Email : </b>xxx@Gmail.com
                </td>
                <td>
                  <b>Applicant Aadhar :</b> xxx
                </td>
                <td
                  style={{
                    backgroundColor: "orange",
                    textAlign: "center",
                    borderRadius: "50px",
                    width: "auto",
                    color: "white",
                  }}
                >
                  In Progress
                </td>
              </tr>
            </table>
          </div>
          <div className="tabcolumn right">
            <img
              src={progress}
              alt="In Progress"
              className="inp3"
              style={{
                height: "50%",
                width: "45%",
                marginRight: "150px",
                marginTop: "50px",
                transform: `rotate(3deg)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
