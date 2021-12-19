import React from "react";
import {APP_CONFIG, COMPOSITION_CONFIG} from '../config';
import {useTranslations} from "../hooks";
import {VideoBackground} from "./VideoBackground";
import {Cloud} from "./Cloud";

export const IsItRaining = () => {
    const {CITY} = APP_CONFIG
    const { TEXT, VIDEO } = COMPOSITION_CONFIG
    const T = useTranslations();
    return (
        <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>

            <h1
                style={{
                    fontSize: TEXT.FONT_SIZE.LARGE,
                    color: TEXT.COLOR.REGULAR
                }}>
                {T.intro.question}
            </h1>
            <Cloud/>
        </VideoBackground>
    )
}