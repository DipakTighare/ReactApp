import React from 'react'
import elect1 from '../images/bike.png';

const Common = (props) => {
  return (
    <>
      <section className=" main  container d-flex col-lg-10 col-12 col-sm-12">
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
        <div className="col-lg-6 col-12 col-sm-12 order-1 order-lg-2 img1">
          <img src={props.img} className="mainImg img-fluid" alt="image" />
        </div>
      </section>
    </>
  );
}

export default  Common;