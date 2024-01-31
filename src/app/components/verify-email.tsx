'use client'

import { buttonVariants } from "@/components/ui/button";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { number } from "zod";

interface PropsToken {
    token: string
};

const VerifyEmail = ({token}: PropsToken) => {
    const isLoading = true;
    const isError = false;

     if (isError) {
        return (
            <div className="flex flex-col items-center gap-1">
                <XCircle className="h-8 w-8 text-red-600" />
                <h3>There was a problem</h3>
                <p className="text-muted-foreground">
                    This token is not valid or might be exipred.
                    please try again.
                </p>
            </div>
        )
     }

     if (token) {
        return (
            <div className="flex flex-col h-full items-center justify-center">
                <div className="relative mb-4 w-60 text-muted-foreground">
                    <Image src="/email.jpg" width={250} height={250} alt="...sent" />
                </div>
                
                <h3 className="font-semibld text-2xl">
                    you&apos;re all set
                </h3>
                
                <p className="text-muted-foreground text-center mt-1">Your email has being verified</p>
                
                <Link href='/sign-in' className={buttonVariants({
                    className: 'mt-4',
                    
                })}>
                    Sign In
                </Link>
            </div>
        )
     }

     if (isLoading) {
        return (
            <div className="flex flex-col items-center gap-1">
                <Loader2 className="animate-spin h-8 w-8 text-red-600" />
                <h3>Verifying...</h3>
                <p className="text-muted-foreground">
                  this won't take long
                </p>
            </div>
        )
     }
}

export default VerifyEmail;