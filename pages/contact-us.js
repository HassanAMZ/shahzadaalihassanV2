import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import WebsiteLayout from '@/layouts/WebsiteLayout'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function ContactUs({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <WebsiteLayout>
      <div className="container mx-auto p-4">
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      </div>
    </WebsiteLayout>
  )
}
