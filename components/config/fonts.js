import React from 'react'
import { Global } from '@emotion/react';

const Fonts = () => {
    return (
        <Global styles={`
            @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
        `} />
    )
}

export default Fonts;