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
  p: ({ ...rest }) => {
    return <p className="py-2" {...rest} />
  },

  ol: ({ ...rest }) => {
    return <ol type="1" className="list-decimal list-outside my-1 pl-[40px] mx-0" {...rest} />
  },
  h1: (props) => {
    return (
      <h1
        className=" py-2 text-5xl font-bold capitalize tracking-tight leading-none text-gray-900 sm:text-6xl lg:text-7xl dark:text-white"
        {...props}
      >
        {props.children}
      </h1>
    )
  },
  h2: (props) => {
    return (
      <h2
        className="py-2 text-4xl font-bold capitalize tracking-tight leading-none text-gray-900 sm:text-5xl dark:text-white"
        {...props}
      >
        {props.children}
      </h2>
    )
  },
  h3: (props) => {
    return (
      <h3
        className="py-2 text-3xl font-bold capitalize tracking-tight leading-none text-gray-900 sm:text-4xl dark:text-white"
        {...props}
      >
        {props.children}
      </h3>
    )
  },
  h4: (props) => {
    return (
      <h4
        className="py-2 text-2xl font-bold capitalize tracking-tight leading-none text-gray-900 sm:text-3xl dark:text-white"
        {...props}
      >
        {props.children}
      </h4>
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
