import react,{useState} from 'react'
import propType from 'prop-types';
function Calculate(props){
    const [value,setVal]=useState("");
    const b1=()=>{
        const val=value+'1';
        setVal(val);
    }
    const b2=()=>{
        // console.log(`the button u pressed is ${2}`);
        const val=value+'2';
        setVal(val);
    }
    const b3=()=>{
        const val=value+'3';
        setVal(val);

    }
    const clear=()=>{
    setVal("");
    }

    const b4=()=>{
        const val=value+'4';
        setVal(val);

    }
    const b5=()=>{
        const val=value+'5';
        setVal(val);

    }
    const b6=()=>{
        const val=value+'6';
        setVal(val);

    }
    const b7=()=>{
        const val=value+'7';
        setVal(val);

    }
    const add=()=>{
    
        const val=value+'+';
        setVal(val);

    }
    const b8=()=>{
        const val=value+'8';
        setVal(val);

    }
    const b9=()=>{
        const val=value+'9';
        setVal(val);

    }
    const b0=()=>{
    
        const val=value+'0';
        setVal(val);

    }
    const b00=()=>{
        const val=value+'00';
        setVal(val);

    }
    const dot=()=>{
        const val=value+'.';
        setVal(val);

    }
    const mod=()=>{
        const val=value+'%';
        setVal(val);

    }
    const divide=()=>{
        const val=value+'/';
        setVal(val);

    }
    const equal=()=>{
        let i=0;
        if(value.length===0)
        {
            return;
        }
        while(value.charAt(i)==='0')
        {
            i++;
        }
        const nvalue=value.substring(i);
        const val=eval(nvalue);
        setVal(val);

    }
    const sub=()=>{
        const val=value+'-';
        setVal(val);

    }
    const mul=()=>{
        const val=value+'*';
        setVal(val);

    }
    return (
<>
<div className="container my-3 d1">

<div className='d3 my-2 mb-2'>
    {value}
</div>
<div>
<table className='my-1'>
    <tr>
        <td><button className='b1' type='submit' onClick={b1}>1</button></td>
        <td><button className='b2' type='submit' onClick={b2}>2</button></td>
        <td><button className='b3'type='submit' onClick={b3} >3</button></td>
        <td><button className='b4'type='submit' onClick={clear} >Clear</button></td>
</tr>

    <tr>
        <td><button className='b5' type='submit' onClick={b4}>4</button></td>
        <td><button className='b6'type='submit' onClick={b5}>5</button></td>
        <td><button className='b7'type='submit' onClick={b6}>6</button></td>
        <td rowSpan={2}><button className='b8' onClick={add} type='submit'>+</button></td>
</tr>

    <tr>
        <td><button  className='b9' type='submit' onClick={b7}>7</button></td>
        <td><button  className='b10' type='submit' onClick={b8}>8</button></td>
        <td><button className='b11' type='submit' onClick={b9}>9</button></td>
        {/* <td><button type='submit'>Clear</button></td> */}
</tr>

    <tr>
        <td><button className='b12' type='submit' onClick={b0}>0</button></td>
        <td><button className='b13' type='submit' onClick={b00}>00</button></td>
        <td><button className='b14' type='submit' onClick={dot}>.</button></td>
        <td><button className='b15' type='submit' onClick={mod}>%</button></td>
</tr>

    <tr>

        <td><button className='b16 btn btn-success' type='submit' onClick={equal}>=</button></td>
        <td><button className='b17' type='submit' onClick={sub}>-</button></td>
        <td><button className='b18' type='submit' onClick={mul}>*</button></td>
        <td><button className='b19' type='submit' onClick={divide}>/</button></td>
</tr>
</table>
</div>
</div>
</>
    );
}
// Calculate.defaultProps={
// value:123,
// }
export {Calculate};