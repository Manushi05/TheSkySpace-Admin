import React from 'react'
import "./admin.css"
function Admin() {
  return (
    <>
    <div className="admin_container">
    <div className="admin_myform">
      <form>
        <h2>ADD PRODUCT </h2>
        <input type="text" placeholder="Mobile Name"/>
        <input type="text" placeholder="Title"/>
        <input type="text " placeholder="Discounted Price"/>
        <input type="text " placeholder="Original Price"/>
        <input type="text" placeholder="RAM-1"/>
        <input type="text" placeholder="RAM-2"/>
        <input type="text" placeholder="Color-1"/>
        <input type="text" placeholder="Color-2"/>
        <label>Video</label>
        <input type="file" />
        
        <label>Image -1 </label>
        <input type="file" />
        <label>Image -2 </label>
        <input type="file"/>
        <label>Image -3 </label>
        <input type="file"/>
        <label>Image -4</label>
        <input type="file"/>

        <button type="submit">ADD</button>
      </form>
    </div>
    <div className="admin_image">
      <img src="image.jpg"/>
    </div>
  </div>
    
    </>
  )
}

export default Admin