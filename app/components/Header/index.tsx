import { Link } from "remix"
import { LinkButton } from "../LinkButton"

export const Header = () => {
    return (
        <header id="public-web-nav" className={"flex w-full h-20 bg-white border-b border-gray-200"}>
            <div className={"w-full flex items-center justify-between"}>
                <Link className={"flex p-6"} title={"Return Home"} to={"/"}>
                    <i className={"w-8 h-8 bg-black rounded-full"}></i>
                </Link>

                <LinkButton to={"https://www.dothq.co"} title={"Go Back to dothq.co"} className={"mr-4"}>
                    Go Back to dothq.co
                </LinkButton>
            </div>
        </header>
    )
}