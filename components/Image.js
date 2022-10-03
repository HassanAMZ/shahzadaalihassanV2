import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <div className="flex items-center w-full justify-center py-2">
    <NextImage {...rest} />
  </div>
)

export default Image
