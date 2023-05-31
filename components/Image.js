import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <div className="flex my-2 items-center border-gray-900 dark:border-gray-50 border-2 rounded-lg justify-center p-2">
    <NextImage {...rest} />
  </div>
)

export default Image
