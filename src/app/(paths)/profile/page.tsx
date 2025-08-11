import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Camera, Mail, MapPin, Shield, Bell } from "lucide-react";

const ProfilePage = () => {
  const user = {
    name: "Ava Johnson",
    email: "ava.johnson@example.com",
    username: "avaj",
    location: "Lagos, Nigeria",
    bio: "Skin care enthusiast exploring the science behind glow.",
    avatarUrl: "",
  };

  return (
    <div className="py-6 px-4 sm:px-8 md:px-20 space-y-6">
      <div className="flex items-start gap-6 flex-wrap">
        <Card className="flex-1 w-full sm:w-auto">
          <CardContent className="pt-0">
            <div className="flex max-sm:flex-col items-center max-sm:items-stretch gap-6 p-6 max-sm:p-4">
              <div className="relative self-center">
                <Avatar className="size-20 sm:size-24 ring-4 ring-primary/10">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback className="text-lg">{user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</AvatarFallback>
                </Avatar>
                <button className="bg-primary text-primary-foreground p-2 rounded-full shadow-sm border border-border absolute -bottom-2 -right-2">
                  <Camera className="size-4" />
                </button>
              </div>
              <div className="space-y-1 max-sm:text-center">
                <h1 className="text-2xl font-semibold tracking-tight">{user.name}</h1>
                <div className="text-muted-foreground flex items-center gap-2 max-sm:justify-center">
                  <Mail className="size-4" />
                  <span>{user.email}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 max-sm:justify-center">
                  <MapPin className="size-4" />
                  <span>{user.location}</span>
                </div>
              </div>
              <div className="ml-auto max-sm:ml-0 max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 flex items-center gap-2">
                <Button variant="outline" className="max-sm:w-full">Message</Button>
                <Button className="max-sm:w-full">Edit profile</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="w-full overflow-x-auto justify-start [&>button]:shrink-0">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Bio</p>
                  <p className="mt-1">{user.bio}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Username</p>
                    <p className="font-medium">{user.username}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">{user.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Completed analyses</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Recommended products tried</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Member since</span>
                  <span className="font-semibold">Jan 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account details</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" defaultValue={user.name} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} placeholder="you@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue={user.username} placeholder="username" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" defaultValue={user.bio} placeholder="Tell us about you" rows={4} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={user.location} placeholder="City, Country" />
                </div>
                <div className="md:col-span-2 flex items-center gap-3">
                  <Button type="button" variant="outline">Cancel</Button>
                  <Button type="submit">Save changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="size-4" /> Password</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current password</Label>
                    <Input id="currentPassword" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New password</Label>
                    <Input id="newPassword" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm new password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit">Update password</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bell className="size-4" /> Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">Email alerts</p>
                    <p className="text-sm text-muted-foreground">Get updates about analyses and recommendations</p>
                  </div>
                  <Switch defaultChecked aria-label="Toggle email alerts" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">Product news</p>
                    <p className="text-sm text-muted-foreground">Occasional updates about new features</p>
                  </div>
                  <Switch aria-label="Toggle product news" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage; 