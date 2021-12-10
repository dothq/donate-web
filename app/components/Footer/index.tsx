import { Link } from "remix"

export const Footer = () => {
    return (
        <footer className={`w-full flex justify-center md:px-8 sm:px-8 px-4 bg-gray7 text-black z-50`}>
            <div className={"max-w-7xl w-full py-28"}>
                <ul className={"flex gap-24 flex-wrap"}>
                    <li className={"w-64 md:w-48"}>
                        <ul className={"flex flex-col gap-2"}>
                            <li className={"mb-2"}>
                                <span className={"font-bold text-xl"}>Explore</span>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Home</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/about"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>About</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/blog"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Blog</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://donate.dothq.co"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Donate</a>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className={"w-64 md:w-48"}>
                        <ul className={"flex flex-col gap-2"}>
                            <li className={"mb-2"}>
                                <span className={"font-bold text-xl"}>Learn</span>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/faq"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>FAQ</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/support"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Support</a>
                                </a>
                            </li>
                            <li>
                                <a target={"_blank"} href={"https://docs.dothq.co"} className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Documentation</a>
                            </li>
                        </ul>
                    </li>

                    <li className={"w-64 md:w-48"}>
                        <ul className={"flex flex-col gap-2"}>
                            <li className={"mb-2"}>
                                <span className={"font-bold text-xl"}>Products</span>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/browser"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Desktop</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/android"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Android</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/one"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Dot One</a>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className={"w-64 md:w-48"}>
                        <ul className={"flex flex-col gap-2"}>
                            <li className={"mb-2"}>
                                <span className={"font-bold text-xl"}>Legal</span>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/about/privacy"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Privacy</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/about/terms"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>Terms</a>
                                </a>
                            </li>
                            <li>
                                <a href={"https://www.dothq.co/about/gdpr"}>
                                    <a className={"text-lg text-blue font-medium hover:bg-blue hover:text-blue-600"}>GDPR</a>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={"w-full flex justify-between pt-14 mt-14 flex-wrap gap-10 border-t border-gray6"}>
                    <div className={"flex flex-col gap-6 items-start"}>
                        <Link className={"flex p-6"} title={"Return Home"} to={"/"}>
                            <i className={"w-8 h-8 bg-black rounded-full"}></i>
                        </Link>
                        <span className={"text-sm"}>© {new Date().getFullYear()} Dot HQ.</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}