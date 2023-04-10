import React from 'react';
import Arr from './Arr';
import BenfCard from './BenfCard';

const Benifits = () => {
  return (
    <>

<div className='container mt-5'>
<h1 className='text-center font-weight-bold text-bg-success mb-5'>Benefits To Switch To Elecrtric Vehicles</h1>

</div>

     {Arr.map((e,i) => {
      return(
          <BenfCard
            key={i}
            id={e.id}
            title={e.title}
            data={e.data}
            img={e.img}
          />)
     }
     )};
    </>
  );
};

export default Benifits;