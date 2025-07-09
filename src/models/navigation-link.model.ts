export type INavigationLink = {
  href: string;
  title: string;
  condition?: () => boolean; // Optional condition to determine if the link should be displayed
};
