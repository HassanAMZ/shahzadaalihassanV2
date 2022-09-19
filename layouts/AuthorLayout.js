import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="py-4 px-3">
        <h2 className=" mb-4 text-5xl pt-4 font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl  text-white">
          A Quick Introduction
        </h2>
        <div>{children}</div>
      </div>
    </>
  )
}
