import React from "react";
import { Space } from 'antd';
import { Button } from 'react-bootstrap';
import TypeWriter from 'typewriter-effect'

export default function InitialWriter(){
    return (
        <Space direction="vertical">                  
            <TypeWriter                
                onInit={(typewriter) => {
                typewriter
                    .typeString("Hello!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("My name is Rose :3")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("¡We're going for more!")
                    .start();
                }}
            />    
            <Button size="lg" className="_button" >Get Started</Button>   
        </Space>  
    )
}