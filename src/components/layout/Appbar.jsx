import React from 'react'

const Appbar = () => {
  return (
    <div className="appbar">
      <div>
        <p className="appbar__title">STUDYPOD LIVE</p>
        <p className="appbar__title__tag">By askIITians</p>
      </div>
      <div>
        <button className="appbar__button">LOGOUT</button>
      </div>
    </div>
  );
}

export default Appbar
