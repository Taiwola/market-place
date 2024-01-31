import MaxWidthWrapper from "@/app/components/MaxWidthWrapper"
import Link from "next/link"
import { Icons } from "../../components/Icon"
import NavItems from "./NavItems"
import { buttonVariants } from "@/components/ui/button"
import Cart from "./Cart";
import UserAcctNav from "./UserAccountNav"

const NavBar = () => {

    const user = {
        name: "seun olaniori",
        email: "seunolanitori@gmail.com"
    };

   // const user = false;
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                    <MaxWidthWrapper>
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">
                                {/* todo: mobile nav */}
                                <div className="ml-4 flex lg:ml-0">
                                    <Link href='/'>
                                        <Icons.logo className="h-18 w-10" />
                                    </Link>
                                </div>
                                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                    <NavItems />
                                </div>

                                <div className="ml-auto flex items-center">
                                    <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-end lg:space-x-6">
                                            {user ? 
                                                <UserAcctNav user={user} />
                                            : <Link href='/sign-in' className={buttonVariants({
                                                variant: "ghost"
                                            })}>Sign in</Link>}

                                            {user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>}

                                            {user ? <p></p> : <Link href="/sign-up" className={buttonVariants({
                                                variant: "ghost"
                                            })}>Create account</Link> }

                                            {user ?  <span className="h-6 w-px bg-gray-200" aria-hidden="true"/> : null}

                                            {user ? null : <div className="flex lg:ml-6">
                                            <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>
                                                </div>}
                                            <div className="ml-4 flow-root lg:ml-6">
                                                <Cart />
                                                </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default NavBar;