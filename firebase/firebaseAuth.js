import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import firebaseConfig from '@/firebase/firebaseConfig'

const app = initializeApp(firebaseConfig)

const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null))

export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL

      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('profilePic', profilePic)
    })
    .catch((error) => {
      console.log(error)
    })
}
// console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(')
