import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {useState} from 'react';

import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
  );
  

// import { Container } from './styles';

function Chart2() {
    // const [data, setData] = useState([10,20,30]);
    // const [labels, setLabels] = useState(['Red','Yellow','Blue'])
    const data = {
        datasets: [{
            data: [10, 10, 30],
            backgroundColor:[
                'red',
                'blue',
                'yellow'
              ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Back-End',
            'Front-End',
            'FullStalk'
        ]
    };
  return <>
    <div className='container border border-info m-1 border-2 rounded col-lg-6 col-sm-12 col-md-12 text-light'>
        <h3 className='text-info'>Opções Selecionadas - Total: 2000</h3>        
        <Doughnut 
        type= 'doughnut' 
        data={data} 
        // options={
        //     Legend:{
        //         labels:{fontSize:2}}} 
                />
    </div>
  </>;
}

export default Chart2;