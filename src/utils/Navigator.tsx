import { useNavigate } from "react-router-dom"

export interface IAppNavigation {
    navigateTo: (path: string) => void;
    navigateToParams: (path: string, params: any) => void;
}


export const useAppNavigation = ():IAppNavigation => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    }

    const navigateToParams = (path: string, params: any) => {
        navigate(path, params);
    }

    return {
        navigateTo,
        navigateToParams
    };
}