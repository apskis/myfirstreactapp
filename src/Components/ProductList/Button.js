import React from 'react';

export default function Button(props) {
    console.log('Button Component executed');
    return (
        <buttom onClick={props.eventHandler} className="btn btn-primary">{props.children}</buttom>
    )
}