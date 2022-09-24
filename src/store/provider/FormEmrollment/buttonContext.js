import React, { useState } from 'react';

export const ButtonIsDesableContext = React.createContext();

export const ButtonIsDesableProvider = (props) => {
    const [buttonIsDesable, setButtonIsDesable] = useState();

    return(
        <ButtonIsDesableContext.Provider value={{buttonIsDesable, setButtonIsDesable}}>
            {props.children}
        </ButtonIsDesableContext.Provider>
    )
} 