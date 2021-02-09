import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout'

export default class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props
        return (
            <>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    />
                </Head>
                <Layout currentPathName={router.pathname}>
                    <Component {...pageProps} />
                </Layout>
            </>
        )
    }
}
