import React, { useState } from 'react'

const Copy = () => {
  const [,setText] = useState('');

  const handleCopyClick = (e) => {
    const copyText = document.getElementById('myInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    e.preventDefault();
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";

  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const outFunc = () => {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  }
  return (
    <div className='text-center' style={{ marginTop: '100px' }}>
      <form className="d-flex form-style">
        <input onChange={handleOnChange} id='myInput' className="form-control me-2 input-style" placeholder="Enter Text" aria-label="Copy" />
        <div className='copy'>
          <button onClick={handleCopyClick} className="btn btn-outline-primary" onMouseOut={outFunc}>
            <span className='copyText' id='myTooltip'>Copy to Clipboard</span>
            Copy Text</button>
        </div>
      </form>
    </div>
  )
}

export default Copy
