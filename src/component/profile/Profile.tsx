import React from 'react';
import { useTranslation } from 'react-i18next';

import './profile.scss';

export const Profile = () => {
  const { t } = useTranslation();
  return <div className='profile'>{t('profile')}</div>;
};
