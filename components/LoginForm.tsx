"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/auth", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setError("Email ou senha inválidos");
      setLoading(false);
      return;
    }

    // login ok → redireciona
    window.location.href = "/tasks";
  }

  return (
    <Card className="bg-black">
      <CardHeader className="text-white">
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com seu email e senha</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="bg-none text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Senha
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="text-white"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            variant={"outline"}
            className="w-full cursor-pointer"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
