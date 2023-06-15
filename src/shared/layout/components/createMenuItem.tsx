import React from "react";
import { useAppNavigation } from "../../../utils/Navigator";


export const createMenuItem = (label: string, icon: any, path: string,navigate:(path:string) => void , childre?: Array<{ label: string; icon: any; path: string; }>): any => {
    return {
        key: path,
        icon: React.createElement(icon),
        label,
        children: childre ? childre.map((item) => createMenuItem(item.label, item.icon, item.path,navigate)) : undefined,
        path: path,
        onClick: () => {
            if (!childre){
                navigate(path);
            } 
        }
    };
};

const generateGuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
