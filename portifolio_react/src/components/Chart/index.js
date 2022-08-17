import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";



// import { Container } from './styles';

function Charts() {
    const [options, setOptions] = useState({title: 'Interesses Informados:<br/> Total Informado: 230'})
    const [data, setData] = useState ([
        ['Linguagens', 'Quantidade'],
        ['Front-end', 100],
        ['Back-end', 80],
        ['Full-Stack', 50]
    ]);

    useEffect(()=>{
        console.log(data);
        console.log(options);
      }, []);
    
    
  return (
    <>
        <div className='container border border-info m-1 border-2 rounded col-lg-5 col-sm-12 col-md-12'>
            <h3 className='text-info'>Gráfico</h3>
            <Chart
                backgroundColor={'red'}
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={data}
                options={options}
            />
        </div>
       
    </>
  );
}

export default Charts;