import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3, LazyPage4 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));
const Lazy4 = lazy(() => import(/* webpackChunkName: "LazyPage4" */'../01-lazyload/pages/LazyPage4'));




export const routes:Route[] = [
    {
        to: '/lazy1', 
        path: 'lazy1', 
        Component: Lazy1, 
        name: 'Compras'
    }, 
    {
        to: '/lazy2', 
        path: 'lazy2', 
        Component: Lazy2, 
        name: 'Inventarios'
    }, 
    {
        to: '/lazy3', 
        path: 'lazy3', 
        Component: Lazy3, 
        name: 'Cuentas por cobrar'
    }, 
    {
        to: '/lazy4', 
        path: 'lazy4', 
        Component: Lazy4, 
        name: 'Cuentas por pagar'
    }
];