import React, { useState } from "react";

const WrappedComponent = (OriginalComponent) => {

    function NewComponent(){

        const [count, setCount] = useState(0)

        const handleClick = () => {
            setCount(count+1);
        }

        return <OriginalComponent count={count} handleClick={handleClick} />

    }

    return NewComponent;
}

export default WrappedComponent;