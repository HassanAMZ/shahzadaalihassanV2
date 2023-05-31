import WebsiteLayout from '@/layouts/WebsiteLayout'
import SocialProfile from '@/components/SocialProfile'
import CustomHeading from '@/components/CustomHeading'
import { InlineWidget } from 'react-calendly'
import { PageSEO } from '@/components/SEO'

export default function LetsTalk() {
  return (
    <WebsiteLayout>
      <PageSEO
        title={`Let's talk - Shahzadaalihassan`}
        description={`Get In Touch with Shahzadaalihassan`}
      />

      <div className="">
        <CustomHeading heading={'h3'}>Schedule A Meeting</CustomHeading>
        <InlineWidget
          url="https://calendly.com/shahzadaalihassan"
          styles={{
            height: '652px',
            'min-width': '320px',
          }}
        />

        <SocialProfile title="Get In Touch" />
      </div>
    </WebsiteLayout>
  )
}
