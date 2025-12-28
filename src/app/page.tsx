'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  PenTool, 
  BarChart2, 
  Bookmark,
  TrendingUp,
  Target,
  Zap,
  ChevronRight,
  Flame
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import InstallPrompt from '@/components/InstallPrompt'
import { useStore } from '@/stores/useStore'
import { questions, getChapterStats } from '@/data/questions'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function HomePage() {
  const { stats, favorites, mistakes } = useStore()
  const chapterStats = getChapterStats()

  const quickActions = [
    { 
      href: '/questions', 
      icon: BookOpen, 
      label: '题库浏览', 
      color: 'from-orange-500 to-amber-500',
      count: questions.length
    },
    { 
      href: '/practice', 
      icon: PenTool, 
      label: '开始刷题', 
      color: 'from-blue-500 to-cyan-500',
      count: null
    },
    { 
      href: '/profile/favorites', 
      icon: Bookmark, 
      label: '我的收藏', 
      color: 'from-pink-500 to-rose-500',
      count: favorites.length
    },
    { 
      href: '/profile/mistakes', 
      icon: Target, 
      label: '错题本', 
      color: 'from-purple-500 to-violet-500',
      count: mistakes.length
    },
  ]

  return (
    <div className="min-h-screen pb-20">
      {/* 顶部区域 */}
      <header className="gradient-primary px-4 pt-12 pb-8 safe-area-top">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto"
        >
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-3xl">🧮</span>
            中考数学全面解析
          </h1>
          <p className="text-orange-100 mt-1 text-sm">
            万能解题法 · 轻松备战中考
          </p>
        </motion.div>
      </header>

      {/* 今日统计卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 -mt-4"
      >
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-soft p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-stone-700">今日学习</span>
            </div>
            <Link 
              href="/stats" 
              className="text-sm text-primary-600 flex items-center gap-1"
            >
              查看详情 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-stone-800">
                {stats.todayCount}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">已做题目</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success-600">
                {stats.accuracy || 0}%
              </div>
              <div className="text-xs text-stone-500 mt-0.5">正确率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">
                {stats.streak || 0}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">连续天数</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 快捷入口 */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-4 mt-6"
      >
        <div className="max-w-lg mx-auto">
          <h2 className="font-semibold text-stone-700 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            快捷入口
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <motion.div key={action.href} variants={item}>
                  <Link
                    href={action.href}
                    className="block bg-white rounded-2xl p-4 shadow-card card-hover"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-medium text-stone-700">{action.label}</div>
                    {action.count !== null && (
                      <div className="text-sm text-stone-400 mt-0.5">
                        {action.count} 道题
                      </div>
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* 知识点分布 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-4 mt-6"
      >
        <div className="max-w-lg mx-auto">
          <h2 className="font-semibold text-stone-700 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            知识点分布
          </h2>
          
          <div className="bg-white rounded-2xl shadow-card p-4 space-y-3">
            {Object.entries(chapterStats).slice(0, 5).map(([chapter, count]) => {
              const percentage = Math.round((count / questions.length) * 100)
              return (
                <Link
                  key={chapter}
                  href={`/questions?chapter=${encodeURIComponent(chapter)}`}
                  className="block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-stone-600">{chapter}</span>
                    <span className="text-xs text-stone-400">{count} 道</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="h-full gradient-primary rounded-full"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* 学习建议 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-4 mt-6 mb-4"
      >
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">💡 今日建议</h3>
                <p className="text-sm text-white/80 mt-1">
                  建议今天重点练习"图形与几何"相关题目，这是中考的高频考点哦！
                </p>
                <Link 
                  href="/practice?chapter=图形与几何"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-2 text-white"
                >
                  开始练习 <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <BottomNav />
      <InstallPrompt />
    </div>
  )
}

