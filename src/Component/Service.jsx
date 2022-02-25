import { useState } from "react";
import EffectTest from "./EffectTest";
import MemoTest from "./MemoTest";

const Service = ()=> {
    const [sta1, setSta1] = useState("sta1");
    return(
       <div>
           <MemoTest sta1={sta1}/>
           <input type="text" value={sta1} onChange={(e) => setSta1(e.target.value)} />
           <EffectTest />
       </div>
   ) 
}

export default Service;


    // const [sta2, setSta2] = useState("sta2");
           {/* <button onClick={() => console.log(sta1)}>눌러주세요</button> */}
           {/* <input type="text" value={sta2} onChange={(e) => setSta2(e.target.value)} /> */}
