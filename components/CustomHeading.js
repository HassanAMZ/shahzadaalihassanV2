/* eslint-disable jsx-a11y/anchor-has-content */

const CustomHeading = ({ heading, children, customClasses, ...rest }) => {
  let Heading =
    'mb-4 text-3xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-4xl lg:text-5xl text-white'

  if (heading === 'title') {
    Heading =
      ' mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl lg:text-7xl text-white'
    let classes = `${Heading}   ${customClasses}`
    return (
      <h1 {...rest} className={classes}>
        {children}
      </h1>
    )
  } else if (heading === 'h1') {
    Heading =
      ' mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl lg:text-7xl text-white'
    let classes = `${Heading}   ${customClasses}`
    return (
      <h1 {...rest} className={classes}>
        {children}
      </h1>
    )
  } else if (heading === 'h2') {
    Heading =
      ' mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl lg:text-7xl text-white'
    let classes = `${Heading}   ${customClasses}`
    return (
      <h2 {...rest} className={classes}>
        {children}
      </h2>
    )
  } else if (heading === 'h3') {
    Heading =
      'mb-4 text-3xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-4xl lg:text-5xl text-white'
    let classes = `${Heading}   ${customClasses}`
    return (
      <h3 {...rest} className={classes}>
        {children}
      </h3>
    )
  } else if (heading === 'h4') {
    Heading =
      'mb-4 text-2xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 text-white'
    let classes = `${Heading}   ${customClasses}`
    return (
      <h4 {...rest} className={classes}>
        {children}
      </h4>
    )
  }

  let classes = `${Heading}   ${customClasses}`

  return (
    <h3 {...rest} className={classes}>
      {children}
    </h3>
  )
}

export default CustomHeading
