"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/ui/card";
import RegisterForm from "../components/register/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/modules/ui/tabs";
import LoginForm from "../components/login/form";
import { useSearchParams } from "next/navigation";

export default function AuthTemplate() {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "register";

  return (
    <main className="flex h-full min-h-screen flex-row">
      <div className="w-full p-5 sm:max-w-xl sm:p-10">
        <Tabs defaultValue={tab}>
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="register">
              Register
            </TabsTrigger>
            <TabsTrigger className="w-full" value="login">
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register a new account.</CardTitle>
                <CardDescription>Create a new NEXTV account.</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login to your account.</CardTitle>
                <CardDescription>
                  Login to an existing NEXTV account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
