import { Outlet } from "react-router-dom"
import { PageTitle } from "../../shared/PageTitle/Title"
import { CredentialList } from "./Section/Credentials"
import { MailingList } from "./Section/Mailing"
import { RulesList } from "./Section/Rules"
import { Signature } from "./Section/Signature"
import { Workmode } from "./Section/Workmode"
import { Schedule } from "./Section/schedule"


export const buildSettingSectionsPaths = () => {
    return {
        path: "service-config",
        element: <Configuration />,
        children: [
            {
                path: "workmode",
                element: <Workmode />
            },
            {
                path: "schedule",
                element: <Schedule />
            },
            {
                path: "signature",
                element: <Signature />
            } ,
            {
                path: 'mailing',
                element: <MailingList />
            },
            {
                path: 'rules',
                element: <RulesList />
            },
            {
                path: 'credentials',
                element: <CredentialList />
            },
            {
                path: 'control-keyword',
                element: <div>Control Keyword</div>
            },
            {
                path: 'queue',
                element: <div>Queue</div>
            }  
        ]
      }
}

export const Configuration = () => {
    return (
       <>
       <PageTitle title={"Configuration"} />
       <Outlet />
       </>
    )
}