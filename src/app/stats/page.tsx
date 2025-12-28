'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Target, 
  Award, 
  Calendar,
  Flame,
  BarChart3,
  PieChart
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import { useStore } from '@/stores/useStore'
import { questions, getChapterStats, getDifficultyStats } from '@/data/questions'

export default function StatsPage() {
  const { stats, favorites, mistakes, practiceRecords } = useStore()
  const chapterStats = getChapterStats()
  const difficultyStats = getDifficultyStats()

  const difficultyLabels = ['', '简单', '较易', '中等', '较难', '困难']
  const difficultyColors = ['', '#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444']

  return (
    <div className="min-h-screen bg-surface-50 pb-20">
      {/* 顶部 */}
      <header className="gradient-primary px-4 pt-12 pb-8 safe-area-top">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            学习统计
          </h1>
          <p className="text-orange-100 mt-1 text-sm">
            追踪你的学习进度
          </p>
        </div>
      </header>

      {/* 总览卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto px-4 -mt-4"
      >
        <div className="bg-white rounded-2xl shadow-soft p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-stone-800">{stats.totalQuestions}</div>
              <div className="text-sm text-stone-500">总做题数</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-stone-800">{stats.accuracy}%</div>
              <div className="text-sm text-stone-500">正确率</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Flame className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-stone-800">{stats.streak}</div>
              <div className="text-sm text-stone-500">连续天数</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-stone-800">{stats.todayCount}</div>
              <div className="text-sm text-stone-500">今日做题</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 正确/错误分布 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-lg mx-auto px-4 mt-4"
      >
        <div className="bg-white rounded-2xl shadow-card p-4">
          <h3 className="font-semibold text-stone-700 mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary-500" />
            答题分布
          </h3>
          
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e7e5e4"
                  strokeWidth="15"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#10b981"
                  strokeWidth="15"
                  fill="none"
                  strokeDasharray={`${stats.accuracy * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-success-500" />
                  <span className="text-sm text-stone-600">正确</span>
                </div>
                <span className="font-medium text-stone-800">{stats.correctCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error-500" />
                  <span className="text-sm text-stone-600">错误</span>
                </div>
                <span className="font-medium text-stone-800">{stats.wrongCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-stone-300" />
                  <span className="text-sm text-stone-600">未做</span>
                </div>
                <span className="font-medium text-stone-800">
                  {questions.length - stats.totalQuestions}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 知识点分布 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-lg mx-auto px-4 mt-4"
      >
        <div className="bg-white rounded-2xl shadow-card p-4">
          <h3 className="font-semibold text-stone-700 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            知识点分布
          </h3>
          
          <div className="space-y-3">
            {Object.entries(chapterStats).map(([chapter, count], index) => {
              const percentage = Math.round((count / questions.length) * 100)
              return (
                <div key={chapter}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-stone-600">{chapter}</span>
                    <span className="text-xs text-stone-400">{count} 道 ({percentage}%)</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${['#f97316', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'][index % 5]}, ${['#ea580c', '#2563eb', '#059669', '#7c3aed', '#db2777'][index % 5]})` 
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* 难度分布 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-lg mx-auto px-4 mt-4 mb-4"
      >
        <div className="bg-white rounded-2xl shadow-card p-4">
          <h3 className="font-semibold text-stone-700 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-500" />
            难度分布
          </h3>
          
          <div className="flex items-end justify-around h-32">
            {[1, 2, 3, 4, 5].map((level) => {
              const count = difficultyStats[level] || 0
              const maxCount = Math.max(...Object.values(difficultyStats))
              const height = maxCount > 0 ? (count / maxCount) * 100 : 0
              
              return (
                <div key={level} className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: 0.4 + level * 0.1 }}
                    className="w-8 rounded-t-lg min-h-[4px]"
                    style={{ backgroundColor: difficultyColors[level] }}
                  />
                  <div className="text-center">
                    <div className="text-xs font-medium text-stone-600">{count}</div>
                    <div className="text-xs text-stone-400">{difficultyLabels[level]}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      <BottomNav />
    </div>
  )
}

