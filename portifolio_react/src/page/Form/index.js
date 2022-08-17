import React from 'react';
import Chart2 from '../../components/Chart2';
import FormList from '../../components/FormList';
import FormQuestion from '../../components/FormQuestion';

// import { Container } from './styles';

function Form() {
  return (<>
  <div className='container text-white mt-4'>
   
    <div className='d-flex flex-wrap '>
      <FormQuestion/>
      <Chart2/>
    </div>
    
    
    <FormList/>
  </div>
  
  </>);
}

export default Form;