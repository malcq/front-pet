import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'navbar.main',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'navbar.about',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.profile}${userData?.id}`,
          Icon: ProfileIcon,
          text: 'navbar.profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'navbar.article',
          authOnly: true,
        },
      );
    }
    return sidebarItemsList;
  },

);
