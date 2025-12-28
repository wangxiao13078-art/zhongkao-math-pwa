import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '中考数学全面解析',
  description: '中考数学真题库、刷题练习、知识点归纳、学习统计 - 助你轻松备战中考',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '中考数学',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: '中考数学全面解析',
    description: '中考数学真题库、刷题练习、知识点归纳',
    siteName: '中考数学全面解析',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#f97316',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" 
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-50 text-stone-800 antialiased">
        {children}
      </body>
    </html>
  )
}

