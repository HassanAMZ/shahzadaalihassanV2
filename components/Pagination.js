import CustomLink from '@/components/CustomLink'
import CustomButton from '@/components/CustomButton'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <nav className="flex justify-between items-center py-6">
      {!prevPage && (
        <div className="w-1/3">
          <CustomButton scheme="disable">Previous</CustomButton>
        </div>
      )}
      {prevPage && (
        <CustomLink
          className="w-1/3"
          href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}
        >
          <CustomButton scheme="solid">Previous</CustomButton>
        </CustomLink>
      )}
      <span>
        {currentPage} of {totalPages}
      </span>
      {!nextPage && (
        <div className="w-1/3">
          <CustomButton scheme="disable">Next</CustomButton>
        </div>
      )}
      {nextPage && (
        <CustomLink href={`/blog/page/${currentPage + 1}`} className="w-1/3">
          <CustomButton scheme="solid">Next</CustomButton>
        </CustomLink>
      )}
    </nav>
  )
}
