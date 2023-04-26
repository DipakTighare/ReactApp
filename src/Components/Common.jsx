import React from 'react'

const Common = (props) => {
  return (
    <>
      <section className="main  container ">
<div className='col-lg-12 col-12 col-sm-12'> 
<div className='row'>
<div className=' col-lg-6 col-md-6 col-12 col-sm-12'> 
        <div className="heading">
          <h1  className="head1 ">
            {props.title1}<br />
            <span className="head2">{props.title2}</span>
          </h1>
          <br />
          <p>
            <b>{props.para}</b>
          </p>
            {props.btn}
        </div>
</div>
        <div className="col-lg-6 col-12 col-sm-12 img1">
        <div className='row'>
          <img src={props.img} className="mainImg img-fluid" alt="image" />
</div>
        </div>
</div>
</div>
      </section>
    </>
  );
}

export default  Common;