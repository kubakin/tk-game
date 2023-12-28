import {Col, Row} from "antd";
import styles from './index.module.scss';
import {useEffect, useState} from "react";

export const Cover = ({hasAccountAuth}: { hasAccountAuth: boolean }) => {
    const [classes, setClasses] = useState([styles.cover]);
    useEffect(() => {
        if (hasAccountAuth) {
            setClasses([styles.cover, styles.showUp])
        } else {
            setClasses([styles.cover, styles.showDown])
        }

    }, [hasAccountAuth])
    return (
        <Row className={classes.join(' ')}
             justify={'center'}
             align={'middle'}>
            <Col xs={5}>
                <img
                    style={{width: '100%'}}
                    alt={''}
                    src="/images/logo.png"/>
            </Col>
            {/*<Col>*/}
            {/*    Present*/}
            {/*</Col>*/}
        </Row>
    )
}