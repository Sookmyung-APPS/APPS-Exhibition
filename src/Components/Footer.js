import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const footer = {
    marginTop: "40px",
    marginBottom: "40px",
    opacity: "0.5",
}
const copy = {
    marginTop: "60px",
    marginLeft: "25px"
}
const context = {
    marginTop:"20px"
}
const type = {
    marginLeft:"40px",
    marginRight: "-55vw"
}

function Footer(props){
    return (
        <Container style={footer}>
            <hr/>
                <Row style={copy}>Copyright ⓒ APPS Since 2021 All Rights Reserved.</Row>
                <Row style={context}>
                    <Col style={type}>
                        <Row>Designers</Row>
                        <Row>Developers</Row>
                        <Row>Department</Row>
                    </Col>
                    <Col>
                        <Row>심채영 | 김혜수</Row>
                        <Row>유정현 | 정제인 | 최은형 | 홍희수</Row>
                        <Row>APPS of SMWU</Row>
                    </Col>
                </Row>
        </Container>
    )
}

export default Footer;