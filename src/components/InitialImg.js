import React from "react";
import { useSpring, animated } from 'react-spring'
import me from '../images/mess.png'

const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function InitialImg(){

    const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })

    return (
        <animated.div className="script-bf-box" style={{ transform: radians.interpolate(interp(1)) }}>
            <img src={ me } className="_imgMe" /> 
        </animated.div>
    )
}