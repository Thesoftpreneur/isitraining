//import React from 'react'
import {COMPOSITION_CONFIG} from "../config";
import styled from 'styled-components'

type VideoBackgroundProps = {
    backgroundColor: string
}

// export const VideoBackground: React.FunctionComponent<VideoBackgroundProps> = ({
//                                                                                    children,
//                                                                                backgroundColor}) => {
//     const {VIDEO} = COMPOSITION_CONFIG

//     return(<div
//     style={{
//         flex: 1,
//         backgroundColor: VIDEO.BACKGROUND_COLOR,
//     }}>
//         {children}
//     </div>)
// }

export const VideoBackground = styled.div<VideoBackgroundProps>`
flex:1;
background-color: ${props => props.backgroundColor};
`