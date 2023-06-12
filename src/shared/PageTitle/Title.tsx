import { FC } from "react"

export const PageTitle:FC<{title:string}> = (props) => {
    const {title} = props;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}