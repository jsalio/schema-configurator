import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createMenuItem } from "./createMenuItem";


export const menuItems = [
    createMenuItem('Dashboard', UserOutlined, '/dashboard'),
    createMenuItem('Schema', VideoCameraOutlined, '/schema', [
        { label: 'Maps', icon: UploadOutlined, path: '/schema/' },
        { label: 'Import', icon: UploadOutlined, path: '/schema/import' },
        { label: 'Map', icon: UploadOutlined, path: '/schema/map' },
    ]),
    createMenuItem('Sync', UploadOutlined, '/data', [
        { label: 'Capture', icon: UploadOutlined, path: '/data/Capture' },
        { label: 'ProDoctivity', icon: UploadOutlined, path: '/data/ProDoctivity' },
        { label: 'Locks', icon: UploadOutlined, path: '/data/Locks' },
        { label: 'Errors', icon: UploadOutlined, path: '/data/Errors' },
        { label: 'Logs', icon: UploadOutlined, path: '/data/Logs' },
    ]),
    createMenuItem('Service Config', UploadOutlined, '/service-config', [
        { label: 'Schedule', icon: UploadOutlined, path: '/service-config/schedule' },
        { label: 'Mailing', icon: UploadOutlined, path: '/service-config/mailing' },
        { label: 'Rules', icon: UploadOutlined, path: '/service-config/rules' },
        { label: 'Signature', icon: UploadOutlined, path: '/service-config/signature' },
        { label: 'Credentials', icon: UploadOutlined, path: '/service-config/credentials' },
        { label: 'WorkMode', icon: UploadOutlined, path: '/service-config/work-mode' },
        { label: 'Control keyword', icon: UploadOutlined, path: '/service-config/control-keyword' },
    ]),
    createMenuItem('Logout', UserOutlined, '/logout'),
];
