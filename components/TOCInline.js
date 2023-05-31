/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */

import CustomLink from './CustomLink'
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = true,
  exclude = '',
}) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const tocList = (
    <>
      {filteredToc.map((heading) => (
        <li key={heading.value} className={`${heading.depth >= indentDepth && 'ml-3'} flex`}>
          <CustomLink href={heading.url} customClasses="capitalize flex-1 py-1 hover:rounded-md">
            {heading.value}
          </CustomLink>
        </li>
      ))}
    </>
  )

  return (
    <>
      {asDisclosure ? (
        <>
          <details className="dark:bg-gray-800 bg-gray-100 py-1 px-2 my-2 rounded-lg border-gray-200 shadow-md">
            <summary className="dark:text-teal dark:bg-gray-700 bg-gray-200 capitalize rounded-md my-2 flex-1 p-2 hover:text-gray-50 hover:bg-teal-700 hover:rounded-lg">
              Table Of Content
            </summary>
            <ul className="flex flex-col dark:bg-gray-700 bg-gray-200 rounded-md p-2">{tocList}</ul>
          </details>
        </>
      ) : (
        tocList
      )}
    </>
  )
}

export default TOCInline
