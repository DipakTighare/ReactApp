import React, { useState } from 'react'

const Contact = () => {

const [data , setData] = useState({
      name:"",
      email:"",
      feedback:""
});
const saveData = (event) =>{
   const {value, name} =  event.target
    setData((preVal)=>{
return{
    ...preVal,
    [name]:value}
});
}
const addData = (e) =>{
e.preventDefault();
if (!e.data ){
alert(`Thanks for visit ${data.name }`)}
else{alert(`Please enter Data`)}
setData({
      name:"",
      email:"",
      feedback:""
});
}

  return (
    <>
      <div>
        <h1 className="text-center text-success mt-4"> <b> Contact us </b></h1>
        <div className="contact_div ">
            <form onSubmit={addData}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1 text-capatalize " className="form-label">
                  User Name
                </label>
              
                <input
                  type="text"
                  onChange={saveData}
                  name="name"
                  value={data.name}
                  className="form-control mb-3 text-capitalize"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={saveData}
                  name="email"
                  value={data.email}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
<label htmlFor="exampleInputEmail1" className="form-label">
                  Feedback
                </label>
                <textarea
                  onChange={saveData}
                  name="feedback"
                  value={data.feedback}
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              <button type='submit' className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      
    </>
  );
}

export default Contact