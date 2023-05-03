import React, { useEffect, useState } from 'react';

const ChefsInfo = () => {
    const [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=> res.json())
        .then(data=> setChefs(data))
        .catch(error=> console.log(error))
    },[])
    return (
        <div>
            {
                chefs.map(chef=> <p>{chef.Chef_Name}</p>)
            }
        </div>
    );
};

export default ChefsInfo;