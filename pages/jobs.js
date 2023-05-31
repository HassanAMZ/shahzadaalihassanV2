import CustomButton from '@/components/CustomButton'
import CustomLink from '@/components/CustomLink'
import { PageSEO } from '@/components/SEO'
import React from 'react'

export default function Modal() {
  return (
    <>
      <PageSEO title="Jobs" description="Jobs" />
      <div className="space-y-4 bg-gray-50 dark:bg-gray-900 rounded-lg h-[100vh] border-teal-700 flex flex-col items-center justify-center">
        <CustomLink href="/jobs/virtual-assistant" customClasses="w-full">
          <CustomButton>Virtual Assistant Job </CustomButton>
        </CustomLink>
        <CustomLink href="/jobs/web-analyst" customClasses="w-full">
          <CustomButton>Web Analyst </CustomButton>
        </CustomLink>
        <CustomLink href="/jobs/web-developer" customClasses="w-full">
          <CustomButton>Web Developer </CustomButton>
        </CustomLink>
      </div>
    </>
  )
}
