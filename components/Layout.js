import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'
export default function Layout({children}) {
    const classes = useStyles()
  return (
    <div>
        <Head>
            <title>Next Amazona</title>
        </Head>
        <AppBar position='static' className={classes.navbar}>
            <Toolbar>
                <Typography>amazona</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className={classes.footer}>
            <Typography>
                All rights serverd. Next.js Amazona - Built by <a href='https://github.com/lucaspires-source'>Lucas Ribeiro Pires</a>
            </Typography>
        </footer>
    </div>
  )
}
