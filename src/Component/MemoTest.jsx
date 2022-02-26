import { memo } from "react";

const checkProps = (prev, next) => {
    console.log(prev);
    console.log(next);
    return false;
}

const MemoTest = ({sta1}) => {
    return (
        <h1>{sta1}</h1>
    )
}

export default memo(MemoTest, checkProps);

{/* <h5>{sta2}</h5> */}
{/* <button onClick={() => console.log(sta1)}>Click</button> */}
