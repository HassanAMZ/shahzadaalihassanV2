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
        <li key={heading.value} className={`${heading.depth >= indentDepth && 'ml-6'} flex`}>
          <CustomLink
            href={heading.url}
            className="dark:text-teal capitalize flex-1 px-4 py-1 hover:text-white hover:bg-teal-700 hover:rounded-lg"
          >
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
          <details className="dark:bg-gray-800 bg-gray-100 p-2 rounded-lg border-gray-200 shadow-md">
            <summary className="dark:text-teal capitalize flex-1 px-4 py-1 hover:text-white hover:bg-teal-700 hover:rounded-lg">
              Table Of Content
            </summary>
            <ul className="flex flex-col m-0">{tocList}</ul>
          </details>
        </>
      ) : (
        tocList
      )}
    </>
  )
}

export default TOCInline
