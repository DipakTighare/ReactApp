import React, { Fragment } from 'react';

const BenfCard = (props) => {

  return (
    <>
   <div className="container">
        <div className="card-1 m-3 ">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={props.img}
                style={{ height: "150px"}}
                className="mx-5 img-fluid"
                alt="images"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-success "> <b>{props.title} </b></h5>
                <p className="card-text mt-2">{props.data}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default BenfCard;