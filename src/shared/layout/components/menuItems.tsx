import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createMenuItem } from "./createMenuItem";


export const menuItems = (navigate:(path:string) => void, translate:(key:string) => string) => [
    createMenuItem('Dashboard', UserOutlined, '/dashboard',navigate),
    createMenuItem('Schema', VideoCameraOutlined, '/schema',navigate, [
        { label: 'Maps', icon: UploadOutlined, path: '/schema/' },
        { label: 'Import', icon: UploadOutlined, path: '/schema/import' },
    ]),
    createMenuItem('Sync', UploadOutlined, '/syncronization',navigate, [
        { label: 'Capture', icon: UploadOutlined, path: '/syncronization/Capture' },
        { label: 'ProDoctivity', icon: UploadOutlined, path: '/syncronization/ProDoctivity' },
        { label: 'Locks', icon: UploadOutlined, path: '/syncronization/Locks' },
        { label: 'Errors', icon: UploadOutlined, path: '/syncronization/Errors' },
        { label: 'Logs', icon: UploadOutlined, path: '/syncronization/Logs' },
    ]),
    createMenuItem('Service Config', UploadOutlined, '/service-config',navigate, [
        { label: 'Schedule', icon: UploadOutlined, path: '/service-config/schedule' },
        { label: 'Mailing', icon: UploadOutlined, path: '/service-config/mailing' },
        { label: 'Rules', icon: UploadOutlined, path: '/service-config/rules' },
        { label: 'Signature', icon: UploadOutlined, path: '/service-config/signature' },
        { label: 'Credentials', icon: UploadOutlined, path: '/service-config/credentials' },
        { label: 'WorkMode', icon: UploadOutlined, path: '/service-config/workmode' },
        { label: 'Control keyword', icon: UploadOutlined, path: '/service-config/control-keyword' },
        { label: 'Queue', icon: UploadOutlined, path: '/service-config/queue' },
    ]),
    createMenuItem('Logout', UserOutlined, '/logout',navigate,),
];
