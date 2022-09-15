import useSWR from 'swr'

const GAPageView = ({ slug }) => {
  const { data } = useSWR(
    `/api/page-views?slug=/blog/${encodeURIComponent(slug)}`,
    async (url) => {
      const res = await fetch(url)
      return res.json()
    },
    { revalidateOnFocus: false }
  )
  const views = data?.pageViews || 0
  return (
    <div className="flex justify-center items-center">
      <span className="pr-2">{views}</span>
      <p>Readers</p>
    </div>
  )
}
export default GAPageView
