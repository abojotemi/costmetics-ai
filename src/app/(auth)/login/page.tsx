"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock } from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function LoginPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Integrate with auth action here
  }

  return (
    <div className="py-6 px-4 sm:px-8 md:px-20">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              <h1 className="text-center e text-3xl mb-3">Glow<span className="text-primary">Scan</span></h1>
              <p>Welcome back</p>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Sign in to your account
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-9" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-9" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Sign in</Button>
            </form>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">or continue with</span>
                <Separator className="flex-1" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

                <Button variant="outline" className="w-full gap-2" aria-label="Continue with GitHub">
                  <FaFacebook />
                  Facebook
                </Button>
                <Button variant="outline" className="w-full gap-2" aria-label="Continue with Google">
                  <FaGoogle />
                  Google
                </Button>
                <Button variant="outline" className="w-full gap-2" aria-label="Continue with Apple">
                  <FaApple />
                  Apple ID
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary underline-offset-4 hover:underline">Sign up</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 