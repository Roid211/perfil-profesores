"use client";
import { useState } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import { Button } from "./ui/Button";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google"); // Asegúrate de tener configurado `signIn` de tu autenticación
    } catch (error) {
      console.error("Error during Google sign-in", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Welcome back
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          Si continúas, aceptas los términos y condiciones.
        </p>
        <div className="px-2">
          {/* Sign in form */}
          <Link href="/home">
          <Button size="sm" className="w-full">
          <Icons.google className="h-4 w-4 mr-2" />
          Google
          </Button>
         </Link>
        </div>
        <p className="px-8 text-center text-sm text-zinc-700">
          ¿Nuevo en Catp?{" "}
          <Link
            href="/"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
