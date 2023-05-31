/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, customClasses, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const isExternal = `${href}?utm_source=ShahzadaAliHassan&utm_medium=affiliate&utm_campaign=HassanUpwork&utm_term=website&utm_content=${href}`

  let LinkClasses = 'text-teal-500 hover:bg-teal-100  hover:text-gray-900'
  let classes = `${LinkClasses}   ${customClasses}`
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={classes} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} className={classes} {...rest} />
  }

  classes = `${LinkClasses}   ${customClasses}`
  return (
    <a target="_blank" rel="noopener noreferrer" className={classes} href={isExternal} {...rest} />
  )
}

export default CustomLink
