import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'navbar.main',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'navbar.about',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData?.id),
          Icon: ProfileIcon,
          text: 'navbar.profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'navbar.article',
          authOnly: true,
        },
      );
    }
    return sidebarItemsList;
  },

);
