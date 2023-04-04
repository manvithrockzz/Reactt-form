import React from "react"
import Select from 'react-select'
const Coustomselect=()=>{

    
    const options =[
   
    {value:"HTML", label:"HTML"},
    {value:"CSS", label:"CSS"},
    {value:"JavaScript", label:"JavaScript"},
    {value:"Node JS", label:"Node JS"},
    ];
 
    const handleChange=selectedOption=>{
        console.log('handleChange',selectedOption)


    }   
    return <Select options={options} onChange={handleChange} isMulti />;
    
   
};

export default Coustomselect;

