import React from "react";

export default function Button({children,onClick}:{children:React.ReactNode,onClick?:any }){

    return <>
    <div onClick={onClick} className="bg-teal-500 w-32 h-15">

        <span  className="text-center text-whilte">{children}</span>
        </div>
    </>
}