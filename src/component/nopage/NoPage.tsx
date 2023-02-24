import React from 'react';
import { useTranslation } from 'react-i18next';

export const NoPage = () => {
  const { t } = useTranslation();
  return <div>{t('no_page')}</div>;
};
