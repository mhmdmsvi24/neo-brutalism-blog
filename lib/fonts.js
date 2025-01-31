import localFont from "next/font/local";

export const workSans = localFont({
  src: [
    {
      path: '../public/fonts/WorkSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-worksans', // Optional CSS variable for usage
});