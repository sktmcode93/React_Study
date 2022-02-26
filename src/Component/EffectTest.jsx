import { memo } from "react";

const EffectTest = memo(() => {
    return(
        <div>
            나는 왜?
        </div>
    )
})

export default memo(EffectTest);