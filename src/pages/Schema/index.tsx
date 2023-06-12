import { Outlet } from "react-router-dom";
import { PageTitle } from "../../shared/PageTitle/Title";

export const Schema = () => {
    return (
       <>
        <PageTitle title={"Schema"} />
        <Outlet />
       </>
    )
};