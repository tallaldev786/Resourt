'use server'

import type { ServerFunctionArgs } from 'payload'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from './admin/importMap'

export const serverFunction = async function (args: ServerFunctionArgs) {
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}
