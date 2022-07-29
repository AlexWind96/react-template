import React from 'react'
import { useTranslation } from 'react-i18next'

export const Dashboard = () => {
  const { t } = useTranslation()
  return <>{t('dashboard')}</>
}
