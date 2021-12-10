import { RemixLinkProps } from "@remix-run/react/components"
import { RefAttributes } from "react";
import { Link } from "remix"

export const LinkButton = (props: Partial<RemixLinkProps> & { href?: any }) => {
    const className = `${props.className || ""} flex p-6 cursor-pointer select-none font-semibold items-center justify-center px-5 py-3 border border-black hover:bg-black hover:text-white transition-all duration-200`;

    if(!props.to) {
        return (
            <a {...props} className={className}>
                {props.children}
            </a>
        )
    }

    if(props.to && props.to.toString().startsWith("http")) {
        return (
            <a {...props} href={props.to.toString()} className={className}>
                {props.children}
            </a>
        )
    }

    return (
        <Link {...props as any} className={className}>
            {props.children}
        </Link>
    )
}