import React from 'react'

function Box() {
  return (
    <div>
      <div className="smbox" style={{display:'flex', cursor:'pointer'}}>
        <div className="smallbox" style={{gap:'2px', }}>
          <div
            className="sm"
            style={{   height: "9.31px", width: "9.31px", background: "#4A4E54", borderRadius:'1px' }}
          ></div>
          <div
            className="sm"
            style={{ marginTop:'2px',  height: "9.31px", width: "9.31px", background: "#4A4E54", borderRadius:'1px' }}
          ></div>
          <div
            className="sm"
            style={{  marginTop:'2px', height: "9.31px", width: "9.31px", background: "#4A4E54", borderRadius:'1px' }}
          ></div>
          
        </div>
        <div className="smallbox" style={{gap:'2px',  marginLeft:'2px'}}>
          <div
            className="sm"
            style={{  height: "9.31px", width: "9.31px",background: "#4A4E54", borderRadius:'1px' }}
          ></div>
          <div
            className="sm"
            style={{ marginTop:'2px', height: "9.31px", width: "9.31px", background: "#4A4E54", borderRadius:'1px' }}
          ></div>
          <div
            className="sm"
            style={{ marginTop:'2px', height: "9.31px", width: "9.31px",background: "#4A4E54", borderRadius:'1px' }}
          ></div>
          
        </div>
        </div>
    </div>
  )
}

export default Box
