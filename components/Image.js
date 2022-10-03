import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <div className="flex items-center border-black dark:border-white border-2 rounded-lg justify-center p-2">
    <NextImage {...rest} />
  </div>
)

export default Image
