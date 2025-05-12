import type { NavigationMenuItem } from '@nuxt/ui';

enum SocmedCategory {
  Linkedin = 'linkedin',
  Github = 'github',
  Medium = 'medium',
}

type Socmed = {
  category: SocmedCategory;
};

type SocmedNavigationMenuItem = Socmed & NavigationMenuItem;

export const Socmeds: SocmedNavigationMenuItem[] = [
  {
    category: SocmedCategory.Linkedin,
    to: 'https://www.linkedin.com/in/kian-yang-lee/',
    icon: 'i-mdi:linkedin',
    target: '_blank',
  },
  {
    category: SocmedCategory.Github,
    to: 'https://github.com/KianYang-Lee',
    icon: 'i-mdi:github',
    target: '_blank',
  },
  {
    category: SocmedCategory.Github,
    to: 'https://medium.com/@kianyang_lee',
    icon: 'i-mdi:medium',
    target: '_blank',
  },
];
