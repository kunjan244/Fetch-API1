import React, {useEffect, useState } from 'react';

const APIData =()=>{

    const[data, setData] =useState([]);

    const getCovidData = async ()=>{
        const res = await
        fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

    }
    useEffect(() => { getCovidData();
 }, []);
 return(
     <div>
         <h1>India Covid 19 Dashboard</h1>
         <table>
             <thead>s
             <tr>
                 <th>State</th>
                 <th>Confirmed</th>
                 <th>Recoverd</th>
                 <th>Deaths</th>
                 <th>Active</th>
                 <th>Update</th>
      </tr>
      </thead>
      <tbody>
          {
              data.map((curelemind) => {
                  return(
                      <tr>
                          <td>{curelemind.state}</td>
                          <td>{curelemind.confirmed} </td>

                        <td>{curelemind.recoverd}</td>
                            <td>{curelemind.deaths}</td>

                                <td>{curelemind.actives}</td>
                                <td>{curelemind.lastupdatedtime}</td>
</tr>
                  );
              })
          }
      </tbody>
         </table>
     </div>
 );


}
export default APIData;