import React from "react";
import { Row, Col } from 'antd';
import InitialWriter from './components/InitialWriter'
import InitialImg from './components/InitialImg'

function App() {
    return(
        <React.Fragment>
            <Row>
                <Col span={1} className="_ms"> 
                    <div className="_menu">
                        <ul>
                            <a className="_home"><li>HOME</li></a>
                            <a className="_about"><li>ABOUT</li></a>
                            <a className="_project"><li>PROJECTS</li></a>
                            <a className="_contact"><li>CONTACT</li></a>
                        </ul>
                    </div>                   
                </Col>
                <Col span={12} offset={1} className="_firstPart"> 
                    <InitialWriter/>
                </Col>
                <Col span={10}  className="_secondPart">
                    <InitialImg/>
                </Col>
            </Row>           

        </React.Fragment>
                             
        
    )
}

export default App;