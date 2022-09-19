/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './CustomLink'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  code: (props) => {
    return <code className="whitespace-pre-wrap py-2 break-words">{props.children}</code>
  },
  h1: (props) => {
    return (
      <h1 className=" mb-4 text-5xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-6xl lg:text-7xl text-white">
        {props.children}
      </h1>
    )
  },
  h2: (props) => {
    return (
      <h2 className="mb-4 text-4xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-5xl text-white">
        {props.children}
      </h2>
    )
  },
  h3: (props) => {
    return (
      <h3 className="mb-4 text-3xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-4xl text-white">
        {props.children}
      </h3>
    )
  },
  h4: (props) => {
    return (
      <h3 className="mb-4 text-2xl font-bold capitalize tracking-tight leading-none dark:text-gray-900 sm:text-3xl text-white">
        {props.children}
      </h3>
    )
  },
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
