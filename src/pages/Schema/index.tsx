import { Outlet } from "react-router-dom";
import { PageTitle } from "../../shared/PageTitle/Title";
import { ImportSchema } from "./Sections/Import";
import { MapperList } from "./Sections/List";
import { MapSchema } from "./Sections/ManualMap";


export const buildSchemaPath = () => {
    return {
      path: "Schema",
      element: <Schema />,
      children: [
        {
          path: "",
          element: <MapperList />
        },
        {
          path: "import",
          element: <ImportSchema />
        },
        {
          path: "map",
          element: <MapSchema />
        }
      ]
    }
  };

export const Schema = () => {
    return (
       <>
        <PageTitle title={"Schema"} />
        <Outlet />
       </>
    )
};