import React from "react";
import { SvgXml } from "react-native-svg";
export default function PersonIcon(){
    const person = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 9.99999C11.8417 9.99999 13.3333 8.50833 13.3333 6.66666C13.3333 4.82499 11.8417 3.33333 10 3.33333C8.15834 3.33333 6.66668 4.82499 6.66668 6.66666C6.66668 8.50833 8.15834 9.99999 10 9.99999ZM10 11.6667C7.77501 11.6667 3.33334 12.7833 3.33334 15V16.6667H16.6667V15C16.6667 12.7833 12.225 11.6667 10 11.6667Z" fill="#0C8864"/>
    </svg>                          
    `;
    const PersonSvg = () => <SvgXml xml={person} width={20} height={20} />
    return <PersonSvg/>
}