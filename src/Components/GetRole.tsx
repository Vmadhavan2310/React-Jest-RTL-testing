import React from 'react'

function GetRole() {
  return (
    <>
    <div>GetRole</div>
    <form action="">
    <input type="radio" hidden/>
    <label htmlFor="Namest">Name</label>
        <input type="checkbox" defaultChecked  id='Namest' placeholder='defaultCheck' value='Rafiya Muskan'/>
        <button type='submit'>Submit</button>
        <button type='submit'>Onsubmit</button>
        <label htmlFor="terms">Terms & Condition</label>
        <input type="checkbox" id='terms'/>
        <p>Hello Vinoth</p>
        <img src="" alt="dummyImage" title='dummy-title'/>
    </form>
    </>
  )
}

export default GetRole