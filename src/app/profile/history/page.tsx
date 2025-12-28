'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, History, Calendar, Clock, CheckCircle2 } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import { useStore } from '@/stores/useStore'

export default function HistoryPage() {
  const router = useRouter()
  const { practiceRecords, stats } = useStore()

  // 按日期分组
  const groupByDate = () => {
    const groups: Record<string, typeof practiceRecords> = {}
    
    practiceRecords.forEach(record => {
      const date = new Date(record.createdAt).toLocaleDateString('zh-CN')
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(record)
    })
    
    return groups
  }

  const groupedRecords = groupByDate()
  const dates = Object.keys(groupedRecords).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  )

  return (
    <div className="min-h-screen bg-surface-50 pb-20">
      {/* 顶部 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 safe-area-top">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-1 text-stone-600"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="font-semibold text-stone-800 flex items-center gap-2">
            <History className="w-5 h-5 text-blue-500" />
            练习历史
          </h1>
          <div className="w-10" />
        </div>
      </header>

      {/* 总览统计 */}
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
          <h3 className="font-semibold mb-3">📊 学习概览</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.totalQuestions}</div>
              <div className="text-xs text-white/80">总做题数</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.accuracy}%</div>
              <div className="text-xs text-white/80">平均正确率</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.streak}</div>
              <div className="text-xs text-white/80">连续天数</div>
            </div>
          </div>
        </div>
      </div>

      {/* 历史记录列表 */}
      <div className="max-w-lg mx-auto px-4">
        {dates.length > 0 ? (
          <div className="space-y-4">
            {dates.map((date) => {
              const records = groupedRecords[date]
              const correctCount = records.filter(r => r.isCorrect).length
              const accuracy = Math.round((correctCount / records.length) * 100)
              
              return (
                <motion.div
                  key={date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-card overflow-hidden"
                >
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-stone-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{date}</span>
                    </div>
                    <span className="text-sm text-stone-400">
                      {records.length} 道题
                    </span>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-success-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm">{correctCount} 正确</span>
                        </div>
                        <div className="text-sm text-stone-400">
                          正确率 {accuracy}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-success rounded-full"
                        style={{ width: `${accuracy}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-stone-500 mb-2">还没有练习记录</p>
            <p className="text-sm text-stone-400 mb-4">
              开始你的第一次刷题练习吧
            </p>
            <button
              onClick={() => router.push('/practice')}
              className="btn btn-primary"
            >
              开始练习
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

