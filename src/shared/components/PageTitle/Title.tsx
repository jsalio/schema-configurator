import { FC } from "react"

export const PageTitle:FC<{title?:string, extra?:any}> = (props) => {
    const {title} = props;
    return (
        <div>
            <h1>{title}</h1>
            {props.extra}
        </div>
    )
}