"use client";

//Usamos client sólo en este componente, por lo que SOLO este componente se ejecuta del lado del servidor.

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props{
    path:string;
    text:string;
}


export const ActiveLink = ({path, text}:Props) => {

    const pathName = usePathname();
    console.log('pathName', pathName)


  return (
    <Link className={`${style.link} ${ (pathName === path) &&style['active-link']}`} href={path}>
        {text}
    </Link>

  )
}
