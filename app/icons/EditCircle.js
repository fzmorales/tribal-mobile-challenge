import React from "react";
import { SvgXml } from "react-native-svg";
export default function EditCircle(){
    const editCircle = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#B2E3D5"/>
    <path d="M7.75 16.0625V18.25H9.9375L16.3892 11.7983L14.2017 9.61083L7.75 16.0625ZM18.0808 10.1067C18.3083 9.87916 18.3083 9.51166 18.0808 9.28416L16.7158 7.91916C16.4883 7.69166 16.1208 7.69166 15.8933 7.91916L14.8258 8.98666L17.0133 11.1742L18.0808 10.1067V10.1067Z" fill="#3D9A7F"/>
    </svg>       
    `;
    const EditCircleSvg = () => <SvgXml xml={editCircle} width={32} height={32} />
    return <EditCircleSvg/>
}