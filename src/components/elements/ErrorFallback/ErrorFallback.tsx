import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mantine/core'

export const ErrorFallback = () => {
  const { t } = useTranslation()
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">{t('message.error-fallback')}</h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        {t('refresh')}
      </Button>
    </div>
  )
}
