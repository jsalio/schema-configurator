import React from "react";
import { IAppNavigation } from "../utils/Navigator";

export const ApplicationContext = React.createContext<IAppContext>({
    router: () => null,
    translate: (key:string) => key,
    changeLanguage: (language:string) => {}
});

/**
 * interface for application context operations
 */
export interface IAppContext {
    /**
     *  router operations
     * @returns IAppNavigation
     */
    router: () => IAppNavigation|null;
    /**
     *  translate a key to a string
     * @param key key to translate
     * @returns  translated string
     */
    translate: (key:string) => string;
    /**
     *  change language of the application
     * @param language change language
     * @returns  void
     */
    changeLanguage: (language:string) => void;
}