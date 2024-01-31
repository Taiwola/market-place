import { AuthCredentialsValidator } from "@/lib/validators/account-credentials";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const authRouter = router({
    createPayLoadUser: publicProcedure.input(AuthCredentialsValidator).mutation(async ({input}) => {
        const {email, password} = input;

        // check if the user exist  
    }),


    verifyEmail: publicProcedure.input(z.object({token: z.string()}))
                                .query(({input}) => {
                                    const { token } = input;

                                    // implement logic  
                                })
})