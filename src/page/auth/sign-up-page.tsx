import { SignUp } from '@clerk/clerk-react'

export const SignUpPage = ({ redirectTo }: { redirectTo: string }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <SignUp redirectUrl={redirectTo} signInUrl="/sign-in" />
    </div>
  )
}
