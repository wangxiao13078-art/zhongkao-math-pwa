'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  User, 
  Heart, 
  Target, 
  History, 
  Settings,
  ChevronRight,
  Moon,
  Bell,
  HelpCircle,
  Share2,
  Download
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import { useStore } from '@/stores/useStore'

export default function ProfilePage() {
  const { stats, favorites, mistakes, resetStats } = useStore()

  const menuItems = [
    {
      icon: Heart,
      label: '我的收藏',
      href: '/profile/favorites',
      count: favorites.length,
      color: 'text-red-500 bg-red-50',
    },
    {
      icon: Target,
      label: '错题本',
      href: '/profile/mistakes',
      count: mistakes.length,
      color: 'text-orange-500 bg-orange-50',
    },
    {
      icon: History,
      label: '练习历史',
      href: '/profile/history',
      count: null,
      color: 'text-blue-500 bg-blue-50',
    },
  ]

  const settingsItems = [
    {
      icon: Moon,
      label: '深色模式',
      action: 'toggle',
    },
    {
      icon: Bell,
      label: '学习提醒',
      action: 'toggle',
    },
    {
      icon: Download,
      label: '离线缓存',
      action: 'link',
    },
    {
      icon: HelpCircle,
      label: '帮助与反馈',
      action: 'link',
    },
    {
      icon: Share2,
      label: '分享应用',
      action: 'share',
    },
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '中考数学全面解析',
          text: '助你轻松备战中考的数学刷题神器！',
          url: window.location.origin,
        })
      } catch {
        // 用户取消
      }
    }
  }

  return (
    <div className="min-h-screen bg-surface-50 pb-20">
      {/* 用户信息区 */}
      <header className="gradient-primary px-4 pt-12 pb-20 safe-area-top">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">中考加油学子</h1>
              <p className="text-orange-100 text-sm mt-0.5">
                已坚持学习 {stats.streak} 天
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 统计卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto px-4 -mt-12"
      >
        <div className="bg-white rounded-2xl shadow-soft p-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2">
              <div className="text-2xl font-bold text-stone-800">{stats.totalQuestions}</div>
              <div className="text-xs text-stone-500">做题数</div>
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-success-600">{stats.accuracy}%</div>
              <div className="text-xs text-stone-500">正确率</div>
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-primary-600">{favorites.length}</div>
              <div className="text-xs text-stone-500">收藏</div>
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-orange-500">{mistakes.length}</div>
              <div className="text-xs text-stone-500">错题</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 功能入口 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-lg mx-auto px-4 mt-4"
      >
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between p-4 ${
                  index !== menuItems.length - 1 ? 'border-b border-stone-100' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-stone-700">{item.label}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  {item.count !== null && (
                    <span className="text-sm">{item.count}</span>
                  )}
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* 设置项 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-lg mx-auto px-4 mt-4"
      >
        <h3 className="text-sm font-medium text-stone-500 mb-2 px-1">设置</h3>
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          {settingsItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={item.action === 'share' ? handleShare : undefined}
                className={`w-full flex items-center justify-between p-4 ${
                  index !== settingsItems.length - 1 ? 'border-b border-stone-100' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-stone-700">{item.label}</span>
                </div>
                <div className="text-stone-400">
                  {item.action === 'toggle' ? (
                    <div className="toggle-switch off" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* 版本信息 */}
      <div className="max-w-lg mx-auto px-4 mt-6 text-center">
        <p className="text-xs text-stone-400">
          中考数学全面解析 v1.0.0
        </p>
        <p className="text-xs text-stone-400 mt-1">
          📚 万能解题法 · 轻松备战中考
        </p>
      </div>

      <BottomNav />
    </div>
  )
}

