import { Composition } from 'remotion';
import { IsItRaining } from './components';
import { VIDEO_CONFIG } from "./config";

export const RemotionVideo: React.FC = () => {
	const {
		FPS,
		VIDEO_ID,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_DURATION_IN_FRAMES,
	} = VIDEO_CONFIG

	return (
			<Composition
				fps={ FPS }
				id={ VIDEO_ID }
				width={ VIDEO_WIDTH }
				height={ VIDEO_HEIGHT }
				component={ IsItRaining }
				durationInFrames={ VIDEO_DURATION_IN_FRAMES }
			/>
	)
}
