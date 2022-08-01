import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppShell, Container, Drawer, ScrollArea, Stack, useMantineTheme } from '@mantine/core'
import { useMediaQuery, useToggle } from '@mantine/hooks'
import { LoadingScreen } from '@/components/elements'
import { logout } from '@/features/auth'
import { PATH } from '@/routes/path'
import { useAppDispatch } from '@/store'
import { Header } from './Header'
import { NavbarBase, NavbarDrawer, NavbarMinimal } from './Navbar'

export function DashboardLayout({ navbarLinks }) {
  const theme = useMantineTheme()
  const [isDrawerOpened, toggleDrawerOpened] = useToggle([false, true])
  const isSmallerThenMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await dispatch(logout.request())
    navigate(`/${PATH.login}`, { replace: true })
  }

  return (
    <AppShell
      fixed={false}
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
