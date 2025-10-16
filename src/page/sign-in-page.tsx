import { SignIn } from '@clerk/clerk-react'

const SignInPage = ({ redirectTo }: { redirectTo: string }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <SignIn redirectUrl={redirectTo} signUpUrl="/sign-up" />
    </div>
  )
}

export default SignInPage
