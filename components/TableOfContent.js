const TableOfContent = ({ contents }) => (
  <>
    <details>
      <summary>Table Of Content</summary>
      <div className="flex flex-col m-0">
        {contents.map((content, index) => {
          const content_href = `#${content.toString().toLowerCase().split(' ').join('-')}`
          return (
            <a
              key={index}
              href={content_href}
              className="dark:text-teal capitalize px-4 py-1 hover:text-white hover:bg-teal-700 hover:rounded-full"
            >
              {content}
            </a>
          )
        })}
      </div>
    </details>
  </>
)

export default TableOfContent
