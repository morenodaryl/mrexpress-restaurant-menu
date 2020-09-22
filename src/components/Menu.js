import React, { Component } from 'react';
import MrExpressLogo from '../assets/mr-express-logo.svg';
import MenuList from '../assets/menu.json';
import { Container, Row, Col } from 'reactstrap';
import ItemModal from './ItemModal';

export default class Menu extends Component {
    render() {
        return (
            <div className='container'>
                <img src={MrExpressLogo} alt="React Logo" className='mrexpresslogo'/>
                {
                    MenuList.map(( menu) => 
                        <div className="menu-container">
                            <h3 className="menu-title">{menu.category}</h3>
                            <Row className="items justify-content-center">
                                {menu.menu.map(item =>
                                    <Col xs='12' sm='3' className="menu-item">
                                        <ItemModal item={item}>
                                            <img src="https://baconmockup.com/200/200" alt=""/>
                                            <div className="item-desc">
                                                <p className="item-name">{item.name}</p>
                                                <p className="item-price">C$ {item.price}</p>
                                            </div>
                                        </ItemModal>
                                    </Col>
                                )}
                            </Row>
                        </div>   
                    )
                }
            </div>
        )
    }
}
