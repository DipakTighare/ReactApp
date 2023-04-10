import React from 'react';
import Array from './Array.jsx';
import Benifits from './Benifits.jsx';
import Types from './Types';

const CardTy = () => {
  return (
    <>
      <div className=" mt-2 container">
        <h1 className="text-center font-weight-bold text-bg-success">How EVs Works?</h1>
        <div className="text-center types">
          <p className="mt-5 mb-3">
            The electric motor gets energy from a controller, which regulates
            the amount of power—based on the driver's use of an accelerator
            pedal. The electric car (also known as electric vehicle or EV) uses
            energy stored in its rechargeable batteries, which are recharged by
            common household electricity.
          </p>
          <p>
        
            <b>There are three main types of electric vehicles (EV):=</b>
            <div className='m-3'>
           
            1) Fully Electric 2) Plug-in Hybrids 3) Fuel cell Vehicles
 </div >
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row gx-4">
                {Array.map((element, index) => {
                  return (
                    <Types
                      key={index}
                      id={element.id}
                      title={element.title}
                      para={element.para}
                      img={element.img}
                    />
                  );
                })}

                    <Benifits/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTy;