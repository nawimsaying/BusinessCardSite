// @ts-ignore
import React from 'react';
import '/src/index.css'
import classes from "./InfoBlock.module.css";

class InfoBlock extends React.Component<{
    spanText: any,
    description: any,
    circle1Color: any,
    circle2Color: any,
    framePictureSrc: any
}> {
    render() {
        let {spanText, description, circle1Color, circle2Color, framePictureSrc} = this.props;
        return (
            <div className={classes.BlockContainer}>
                <p className={classes.p}>
                    <span>{spanText}</span> {description}
                </p>
                <div className={classes.circleContainer}>
                    <div className={classes.circle1} style={{backgroundColor: circle1Color}}></div>
                    <div className={classes.circle2} style={{backgroundColor: circle2Color}}></div>
                </div>
                <div className={classes.containerPictures}>
                    <img className={classes.framePicture} src={framePictureSrc} alt="Frame"/>
                </div>
            </div>
        );
    }
}

export default InfoBlock;