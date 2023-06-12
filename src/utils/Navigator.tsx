import { useNavigate } from "react-router-dom"

export const useAppNavigation = () => {
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