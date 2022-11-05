import CustomLink from '@/components/CustomLink'
import SignUpForm from '@/components/SignUpForm'
import { signInWithGoogle } from '@/firebase/firebaseAuth'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import CustomButton from '@/components/CustomButton'

const SignUpPage = () => {
  return (
    <>
      <PageSEO title={`Sign Up - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="container mx-auto p-4 flex items-center flex-col">
        <h2 className=" mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl lg:text-7xl text-white">
          Signup
        </h2>
        <SignUpForm />
        Or
        <CustomButton scheme={'solid'} customClasses="max-w-sm" onClick={signInWithGoogle}>
          Sign Up with google
        </CustomButton>
        <p className="capitalize py-4">Already have an account?</p>
        <CustomButton scheme={'solid'} customClasses="max-w-sm">
          <CustomLink href="/auth/login">Sign In</CustomLink>
        </CustomButton>
      </div>
    </>
  )
}
export default SignUpPage
