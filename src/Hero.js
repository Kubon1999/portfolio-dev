import SplineAnimation from "./SplineAnimation"
import HeroFront from "./HeroFront"
import { Stack } from '@mantine/core';

const Hero = () => {
    return (
        <Stack>
            <HeroFront/>
            <SplineAnimation></SplineAnimation>
        </Stack>
    )
}


export default Hero