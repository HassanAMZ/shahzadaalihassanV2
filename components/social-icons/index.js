import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Instagram from './instagram.svg'
import CustomLink from '@/components/CustomLink'
// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
}

const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <CustomLink customClasses="text-sm text-gray-500 transition hover:text-gray-600" href={href}>
      {/* <span className="text-gray-50">{kind}</span> */}
      <SocialSvg width="30px" />
    </CustomLink>
  )
}

export default SocialIcon
