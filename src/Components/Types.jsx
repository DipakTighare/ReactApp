import React from 'react'
import { NavLink } from 'react-router-dom';


const Types = (props) => {
  return (
    <>
      <div className="col-10 col-md-4 gx-5 card-div"  >
        <div className="card m-2" style={{height:"26rem"}}>
<div className='card_img'>
         <NavLink to = {`../images ${props.img}`}><img src={props.img} className="card-img img-fluid" alt="img."style={{height:"9rem"}} />
</NavLink>
</div>

          <div className="card-body">
            <h5 className="card-title text-success">{props.title}</h5>
            <p className="card-text">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Types;