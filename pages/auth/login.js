import CustomLink from '@/components/CustomLink'
import SignInForm from '@/components/SignInForm'
import { signInWithGoogle } from '@/firebase/firebaseAuth'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import CustomButton from '@/components/CustomButton'

const LoginPage = () => {
  return (
    <>
      <PageSEO title={`Sign Up - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="container mx-auto flex items-center flex-col">
        <h2 className=" mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl lg:text-7xl text-white">
          Sign In
        </h2>
        <SignInForm />
        Or
        <CustomButton scheme={'solid'} customClasses="max-w-sm" onClick={signInWithGoogle}>
          SignIn with google
        </CustomButton>
        <p className="capitalize py-4">Doesn't have an account?</p>
        <CustomButton scheme={'solid'} customClasses="max-w-sm">
          <CustomLink href="/auth/signup">Sign Up</CustomLink>
        </CustomButton>
      </div>
    </>
  )
}
export default LoginPage
