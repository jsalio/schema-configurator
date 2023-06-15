import { Outlet } from "react-router-dom"
import { PageTitle } from "../../shared/PageTitle/Title"


export const buildSynchronizerPath = () => {
    return  {
        path: "syncronization",
        element: <Syncronization />,
        children: [
            {
                path: "capture",
                element: <div>Capture</div>,
            },
            {
                path: "prodoctivity",
                element: <div>Prodoctivity</div>,
            },
            {
                path: "locks",
                element: <div>Locks</div>,
            },
            {
                path: "errors",
                element: <div>Errors</div>,
            },
            {
                path: "logs",
                element: <div>Logs</div>,
            }
        ]
      }
}

export const Syncronization = () => {
    return(
       <>
        <PageTitle title={"Syncronization"} />
        <Outlet />
       </>
    )
}