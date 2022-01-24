import React from "react";
import { SvgXml } from "react-native-svg";
export default function CalendarIcon(){
    const sourceSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.775 9.21668L12.8917 8.33334L8.825 12.4L7.05833 10.6333L6.175 11.5167L8.825 14.1667L13.775 9.21668ZM15.8333 2.50001H15V0.833344H13.3333V2.50001H6.66667V0.833344H5V2.50001H4.16667C3.24167 2.50001 2.50833 3.25001 2.50833 4.16668L2.5 15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16668C17.5 3.25001 16.75 2.50001 15.8333 2.50001ZM15.8333 15.8333H4.16667V6.66668H15.8333V15.8333Z" fill="#0C8864"/>
    </svg>                                   
    `;
    const ComponentSvg = () => <SvgXml xml={sourceSvg} width={20} height={20} />
    return <ComponentSvg/>
}