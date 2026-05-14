import React from 'react'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from './admin/importMap'

type Args = {
  children: React.ReactNode
}

const Layout: React.FC<Args> = async ({ children }) => {
  return (
    <RootLayout config={config} importMap={importMap}>
      {children}
    </RootLayout>
  )
}

export default Layout
