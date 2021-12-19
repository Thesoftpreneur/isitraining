import {Img} from 'remotion'
import {Images} from '../assets'

export const Cloud: React.FunctionComponent = () => {
    return(
        <Img src={Images.Cloud}
        style={{
            width: '495px',
            height: '295px'
        }}/>
    )
}