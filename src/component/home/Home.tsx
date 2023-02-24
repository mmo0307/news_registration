import React from 'react';
import { useTranslation } from 'react-i18next';

import './home.scss';

export const Home = () => {
  const { t } = useTranslation();
  return <div className='home'>{t('home')}</div>;
};
