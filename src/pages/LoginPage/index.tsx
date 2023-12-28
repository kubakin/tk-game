import {Col, Row} from "antd";
import {Cover} from "../../components/Auth/Cover";
import AuthForm from "../../components/Auth/AuthWindow";
import styles from './index.module.scss'
import {useEffect, useState} from "react";

export const LoginPage = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
    const [hasAccountAuth, setHasAccountAuth] = useState(false)
    return (
        <Row className={styles.loginPage} style={{height: '90%', overflow: 'hidden'}} gutter={0}
             justify={'space-around'} align={'middle'}>
            <Cover hasAccountAuth={hasAccountAuth}/>
            <Col className={styles.authBlock} style={{height: '40%'}} offset={4} xs={20}>
                {!hasAccountAuth && <AuthForm hasAccountAuth={hasAccountAuth}/>}
            </Col>

            <Col className={styles.authBlock} style={{height: '40%'}} offset={4} xs={20}>
                {hasAccountAuth && <AuthForm hasAccountAuth={hasAccountAuth}/>}
            </Col>
        </Row>

    )
}