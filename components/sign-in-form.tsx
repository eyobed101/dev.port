"use client"

import { signInWithGoogle } from "@/actions/authAction"
import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { signInFormSchema } from "@/lib/auth-schema"

import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


export default function SignInForm() {
   const form = useForm<z.infer<typeof signInFormSchema>>({
      resolver: zodResolver(signInFormSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   })

   async function onSubmit(values: z.infer<typeof signInFormSchema>) {
      const { email, password } = values;
      await authClient.signIn.email({
         email,
         password,
      }, {
         onRequest: () => {
            toast("Signing in...")
         },
         onSuccess: () => {
            form.reset()
            redirect("/dashboard")
         },
         onError: (ctx) => {
            toast.error(ctx.error.message);
         },
      });
   }

   return (
      <Card>
         <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
               Enter your credentials to sign in to your account
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
            
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
               <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
               </span>
            </div>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input placeholder="m@example.com" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Password</FormLabel>
                           <FormControl>
                              <Input type="password" placeholder="********" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit" className="w-full">
                     Sign In
                  </Button>
               </form>
            </Form>
         </CardContent>
         <CardFooter className="mx-auto">
            <div className="text-center text-sm">
               Don&apos;t have an account?{" "}
               <a href="sign-up" className="underline underline-offset-4">
                  Sign up
               </a>
            </div>
         </CardFooter>
      </Card>
   )
}
