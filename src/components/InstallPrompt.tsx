'use client'

import { useState, useEffect } from 'react'
import { Download, X, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // 检测是否是 iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // 检测是否已经安装
    const standalone = window.matchMedia('(display-mode: standalone)').matches
    setIsStandalone(standalone)

    // 检查是否已经关闭过提示
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) {
      return // 7天内不再显示
    }

    // 监听 beforeinstallprompt 事件
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // iOS 用户显示手动安装提示
    if (iOS && !standalone) {
      setTimeout(() => setShowPrompt(true), 3000)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-install-dismissed', Date.now().toString())
  }

  if (isStandalone || !showPrompt) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-20 left-4 right-4 z-50"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-4 max-w-md mx-auto">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-stone-800">添加到主屏幕</h3>
              <p className="text-sm text-stone-500 mt-0.5">
                {isIOS 
                  ? '点击底部分享按钮，然后选择"添加到主屏幕"'
                  : '将应用安装到手机，随时随地刷题'}
              </p>
            </div>
            <button 
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 text-stone-400 hover:text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {!isIOS && deferredPrompt && (
            <button
              onClick={handleInstall}
              className="mt-3 w-full btn btn-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              立即安装
            </button>
          )}
          
          {isIOS && (
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-stone-500">
              <span>点击</span>
              <span className="inline-flex items-center justify-center w-6 h-6 bg-stone-100 rounded">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L8 6h3v8h2V6h3L12 2zm8 14v4H4v-4H2v6h20v-6h-2z"/>
                </svg>
              </span>
              <span>→ 添加到主屏幕</span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

