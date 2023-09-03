import React from 'react';
import classes from './Post.module.css';

type PropsType = {
    name: string
    title: string
    post: string
    img: string
}

export const Post = (props: PropsType) => {
    return (
        <div className={classes.post}>
            <img src={props.img}/>
            <span>{props.name}</span>
            <div>{props.title}</div>
            <p>{props.post}</p>
            <div><span>like</span></div>
        </div>
    );
};

