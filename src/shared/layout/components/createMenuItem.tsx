import React from "react";


export const createMenuItem = (label: string, icon: any, path: string, childre?: Array<{ label: string; icon: any; path: string; }>): any => {
    return {
        key: generateGuid(),
        icon: React.createElement(icon),
        label,
        children: childre ? childre.map((item) => createMenuItem(item.label, item.icon, item.path)) : undefined,
        path: path,
    };
};

const generateGuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
