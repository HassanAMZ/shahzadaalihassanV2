/* eslint-disable jsx-a11y/anchor-has-content */

const CustomButton = ({ scheme, customClasses, ...rest }) => {
  let ButtonScheme =
    'inline-flex w-full justify-center items-center py-3 px-5  font-medium text-center text-gray-50 rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'

  if (scheme === 'solid') {
    ButtonScheme =
      'inline-flex w-full justify-center items-center py-3 px-5  font-medium text-center text-gray-50 rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
  } else if (scheme === 'ghost') {
    ButtonScheme =
      'inline-flex w-full justify-center items-center py-3 px-5  font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-gray-50 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800'
  } else if (scheme === 'disable') {
    ButtonScheme =
      'inline-flex w-full cursor-not-allowed justify-center items-center py-3 px-5  font-medium text-center  text-gray-900 rounded-lg border border-gray-300 dark:text-gray-50 dark:border-gray-600 focus:ring-gray-800'
  } else if (scheme === 'ghost-xs') {
    ButtonScheme =
      'inline-flex w-full justify-center  items-center p-2 text-sm font-medium text-center  text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-gray-50 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800'
  } else if (scheme === 'ghost-solid') {
    ButtonScheme =
      'dark:text-gray-50 w-full dark:hover:text-gray-50 border dark:border-teal-700 dark:hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-teal-500 text-gray-900 hover:text-gray-50 hover:bg-teal-600 dark:focus:ring-teal-800'
  } else if (scheme === 'solid-sm') {
    ButtonScheme =
      'inline-flex w-full justify-center items-center p-2 text-sm font-medium text-center text-gray-50 rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
  }
  let classes = `${ButtonScheme}   ${customClasses}`

  return <button {...rest} className={classes} />
}

export default CustomButton
