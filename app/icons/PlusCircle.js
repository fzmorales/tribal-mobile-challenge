import React from "react";
import { SvgXml } from "react-native-svg";
export default function PlusCircle(props){
    let colorFill = "#FEE502";
    if(props.colorFill){
        colorFill = props.colorFill;
    }
    const plusCircle = `<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36.5" cy="36.5" r="36.5" fill="${colorFill}"/>
    <path d="M49.625 38.375H38.375V49.625H34.625V38.375H23.375V34.625H34.625V23.375H38.375V34.625H49.625V38.375Z" fill="black"/>
    </svg>    
    `;
    const PlusCircleSvg = () => <SvgXml xml={plusCircle} width={80} height={80} />
    return <PlusCircleSvg/>
}