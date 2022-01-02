import styled from 'styled-components'
import {Img} from 'remotion'
import {Images} from '../assets'

// export const Cloud: React.FunctionComponent = () => {
//     return(
//         <Img src={Images.Cloud}
//         style={{
//             width: '495px',
//             height: '295px'
//         }}/>
//     )
// }

type CloudProps = {
    translateX?: number,
    translateY?: number,
    scale?: number,
    rotate?: number,
}

//<CloudProps> wstrzyknięcie propsa typu CloudProps
//przypisane wartości to są domyslne i jest tu cos jak destructoring
export const Cloud: React.FunctionComponent<CloudProps> = ({
    translateX = 0,
    translateY = 0,
    scale = 1,
    rotate = 0,
}) => (
        <BaseCloud src={Images.Cloud}
        style={{transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
    }}/>
)

export const BaseCloud = styled(Img)`
            width: '457px';
            height: '295px';
`