import React from "react";
import { SvgXml } from "react-native-svg";
export default function EmailIcon(){
    const sourceSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 3.33334H3.33332C2.41666 3.33334 1.67499 4.08334 1.67499 5.00001L1.66666 15C1.66666 15.9167 2.41666 16.6667 3.33332 16.6667H16.6667C17.5833 16.6667 18.3333 15.9167 18.3333 15V5.00001C18.3333 4.08334 17.5833 3.33334 16.6667 3.33334ZM16.6667 15H3.33332V6.66668L9.99999 10.8333L16.6667 6.66668V15ZM9.99999 9.16668L3.33332 5.00001H16.6667L9.99999 9.16668Z" fill="#0C8864"/>
    </svg>                          
    `;
    const ComponentSvg = () => <SvgXml xml={sourceSvg} width={20} height={20} />
    return <ComponentSvg/>
}