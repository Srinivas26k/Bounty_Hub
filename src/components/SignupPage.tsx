"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Mail, Terminal, Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-blue-900/10 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <Card className="w-full max-w-md bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm relative z-10">
        <CardHeader className="text-center">
          <Link to="/" className="mx-auto mb-4 flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-emerald-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              OSHub
            </h1>
          </Link>
          <CardTitle className="text-2xl text-white">Join OSHub</CardTitle>
          <CardDescription className="text-gray-400">
            Connect with the developer community and start earning bounties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700/50 bg-transparent"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700/50 bg-transparent"
            >
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-800 px-2 text-gray-400">Or create account</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Rajesh"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Kumar"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="developer@example.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-emerald-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="userType" className="text-white font-medium">
                Account Type
              </Label>
              <Select value={formData.userType} onValueChange={(value) => updateFormData("userType", value)}>
                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="developer">Developer (Solve technical challenges)</SelectItem>
                  <SelectItem value="client">Client (Post bounties)</SelectItem>
                  <SelectItem value="both">Both (Developer & Client)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Password Field */}
            <div className="relative space-y-2">
              <Label htmlFor="password" className="text-white font-medium">
                Password
              </Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-emerald-500 pr-10"
                required
              />
              <div
                className="absolute right-3 top-[60%] -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="relative space-y-2">
              <Label htmlFor="confirmPassword" className="text-white font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-emerald-500 pr-10"
                required
              />
              <div
                className="absolute right-3 top-[60%] -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-200"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-gray-600" />
              <Label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{" "}
                <Link to="/terms" className="text-emerald-400 hover:text-emerald-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" className="border-gray-600" />
              <Label htmlFor="newsletter" className="text-sm text-gray-300">
                Subscribe to developer updates and new bounty notifications
              </Label>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
            size="lg"
          >
            Create Developer Account
          </Button>

          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-emerald-400 hover:text-emerald-300">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
