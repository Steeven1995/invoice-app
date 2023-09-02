"use client"

import * as z from "zod"
import  { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button"
import { useEffect, useState } from "react";


const formSchema = z.object({
    name : z.string().min(1, {
        message : "Le nom de votre entreprise est obligatoire."
    }),
    logo : z.string().min(1, {
        message : "Le logo est obligatoire."
    }),
    numberNif : z.string().min(1, {
        message : "Votre numero NIF est obligatoire."
    }),
    address : z.string().min(1, {
        message : "Definissez une adresse à votre entreprise"
    }),
    phone : z.string().min(1, {
        message : "Numéro de téléphone de votre entreprise est obligatoire"
    })
})


export const InitialModal = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    const form = useForm({
        resolver : zodResolver(formSchema),
        defaultValues:{
            name :"",
            address : "",
            numberNif :"",
            logo : "",
            phone : ""
        }
    })

    const isLoading = form.formState.isSubmitted

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        console.log(values)
    }


    if(!isMounted){
        return null;
    }   

    return ( 
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Creer votre entreprise
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-500">
                        Renseigner les informations de entreprise Nom, logo, NIF, Adresse, Numero de téléphone. Vous pouvez
                        les modifiers plutard
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-7 px-6">
                            <div className="flex items-center justify-center text-center">
                                Ajouter une image
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field})=> (
                                    <FormItem className="text-xs font-bold text-zinc-700 dark:text-secondary/70">
                                        <FormLabel className="uppercase first-letter:text-zinc-500 dark:text-secondary/70 font-bold">
                                            Nom de l'entreprise
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className=" bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 uppercase"
                                                placeholder="Entrer le nom de votre entreprise"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({field})=> (
                                    <FormItem className="text-xs font-bold text-zinc-700 dark:text-secondary/70">
                                        <FormLabel className="uppercase first-letter:text-zinc-500 dark:text-secondary/70 font-bold">
                                            Adresse
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className=" bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 uppercase"
                                                placeholder="Entrer votre adresse"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between w-full flex-wrap">
                                <FormField
                                    control={form.control}
                                    name="numberNif"
                                    render={({field})=> (
                                        <FormItem className="text-xs font-bold text-zinc-700 dark:text-secondary/70">
                                            <FormLabel className="uppercase first-letter:text-zinc-500 dark:text-secondary/70 font-bold">
                                                NIF
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    className=" bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 uppercase"
                                                    placeholder="Entrer votre NIF"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                control={form.control}
                                name="phone"
                                render={({field})=> (
                                    <FormItem className="text-xs font-bold text-zinc-700 dark:text-secondary/70">
                                        <FormLabel className="uppercase first-letter:text-zinc-500 dark:text-secondary/70 font-bold">
                                            Numero de téléphone
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className=" bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 uppercase"
                                                placeholder="Votre numéro"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            </div>
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant="primary" disabled={isLoading}>
                                Creer votre entreprise
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
     );
};
 
