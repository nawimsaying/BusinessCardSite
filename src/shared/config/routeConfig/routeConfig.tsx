import {RouteProps} from "react-router-dom";
import {PortfolioPage} from "page/PortfolioPage";
import {ContactPage} from "page/ContactPage";
import {ErrorPage} from "page/ErrorPage";
import {HomePage} from "page/HomePage";

export enum AppRoutes{
    MAIN = 'main',
    PORTFOLIO = 'portfolio',
    CONTACT = 'contact',
    ERROR = 'error'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PORTFOLIO]: '/portfolio',
    [AppRoutes.CONTACT]: '/contact',
    [AppRoutes.ERROR]: '*'
}


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage/>
    },
    [AppRoutes.PORTFOLIO]:{
        path: RoutePath.portfolio,
        element: <PortfolioPage/>
    },
    [AppRoutes.CONTACT]: {
        path: RoutePath.contact,
        element: <ContactPage/>
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.error,
        element: <ErrorPage/>
    }
}

