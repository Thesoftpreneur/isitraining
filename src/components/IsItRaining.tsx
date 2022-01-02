import React from "react";
import {APP_CONFIG, COMPOSITION_CONFIG} from '../config';
import {useTranslations} from "../hooks";
import {VideoBackground} from "./VideoBackground";
import {Cloud} from "./Cloud";
import { Title } from "./typography";

export const IsItRaining = () => {
    const {CITY} = APP_CONFIG
    const { TEXT, VIDEO } = COMPOSITION_CONFIG
    const T = useTranslations();
    return (
        <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>

            <Title>
                {T.intro.question}
            </Title>
            <Cloud
            translateX={20}
            translateY={-20}
            scale={2}
            rotate={-10}/>
            <Cloud
            translateX={150}
            translateY={-100}/>
        </VideoBackground>
    )
}