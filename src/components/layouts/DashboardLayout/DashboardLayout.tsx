import { AppShell, Container, Drawer, ScrollArea, Stack, useMantineTheme } from '@mantine/core'
import { useMediaQuery, useToggle } from '@mantine/hooks'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { NavbarBase, NavbarDrawer, NavbarMinimal } from './Navbar'
import { LoadingScreen } from '@/components/elements'
import { useAppDispatch } from '@/store'
import { logoutAction } from '@/features/auth/slice'
import { PATH } from '@/routes/path'

export function DashboardLayout({ navbarLinks }) {
  const theme = useMantineTheme()
  const [isDrawerOpened, toggleDrawerOpened] = useToggle(false, [true, false])
  const isSmallerThenMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await dispatch(logoutAction.request())
    navigate(`/${PATH.home}`, { replace: true })
  }

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      padding={0}
      navbar={
        isSmallerThenMd ? (
          <NavbarMinimal onLogout={handleLogout} data={navbarLinks} />
        ) : (
          <NavbarBase onLogout={handleLogout} data={navbarLinks} />
        )
      }
    >
      <Drawer
        opened={isDrawerOpened}
        onClose={() => toggleDrawerOpened(false)}
        padding="sm"
        size="md"
        withCloseButton={false}
      >
        <NavbarDrawer
          onLogout={handleLogout}
          closeDrawer={() => toggleDrawerOpened(false)}
          data={navbarLinks}
        />
      </Drawer>
      <Stack justify={'flex-start'} style={{ height: '100vh' }}>
        <Header toggleOpen={toggleDrawerOpened} opened={isDrawerOpened} />
        <ScrollArea style={{ flexGrow: 1 }}>
          <Container fluid pb={'md'}>
            <React.Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </React.Suspense>
          </Container>
        </ScrollArea>
      </Stack>
    </AppShell>
  )
}
