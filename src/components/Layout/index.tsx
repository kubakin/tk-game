import React from "react";
import {Layout} from "antd";

const {Header, Content, Footer} = Layout;

export const AppLayout = (props) => {
    return <>
        <Layout style={{minHeight: '100%', width: '100%'}}>
            <Header style={{display: 'flex'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img
                        style={{width: '30px', height: '30px'}}
                        alt={''}
                        src="/images/logo.png"/>
                </div>
                <div style={{color: 'white', paddingLeft: '10px'}}>Твой квест</div>
            </Header>
            <Layout>
                <Content style={{minHeight: '100%', width: '100%'}}>
                    {props.children}</Content>
            </Layout>
            <Footer>Contacts: tg - @daniapog</Footer>
        </Layout>
    </>
}