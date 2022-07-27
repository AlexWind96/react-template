import { createStyles } from '@mantine/core'

export default createStyles((theme, _params, getRef) => {
  // const icon = getRef('icon')
  return {
    header: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
    title: {},

    inner: {
      height: 56,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    links: {
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },

    search: {
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },

    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },
  }
})
