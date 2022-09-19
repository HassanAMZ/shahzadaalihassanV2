/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const isExternal = `${href}?utm_source=ShahzadaAliHassan&utm_medium=affiliate&utm_campaign=HassanUpwork&utm_term=website&utm_content=${href}`
  if (isInternalLink) {
    return (
      <Link href={href} className="text-teal-900 underline">
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={isExternal} {...rest} />
}

export default CustomLink
