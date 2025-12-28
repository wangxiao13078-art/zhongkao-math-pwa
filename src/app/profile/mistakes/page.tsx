'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, Target, Trash2, Play } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import QuestionCard from '@/components/QuestionCard'
import { questions } from '@/data/questions'
import { useStore } from '@/stores/useStore'

export default function MistakesPage() {
  const router = useRouter()
  const { mistakes, removeMistake, startPractice } = useStore()

  const mistakeQuestions = questions.filter(q => mistakes.includes(q.id))

  const handleClearAll = () => {
    if (confirm('确定要清空所有错题吗？')) {
      mistakes.forEach(id => removeMistake(id))
    }
  }

  const handlePracticeAll = () => {
    if (mistakeQuestions.length === 0) return
    startPractice(mistakeQuestions)
    router.push('/practice/doing')
  }

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
            <Target className="w-5 h-5 text-orange-500" />
            错题本
          </h1>
          {mistakes.length > 0 && (
            <button 
              onClick={handleClearAll}
              className="text-stone-400 hover:text-red-500"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* 操作栏 */}
      {mistakeQuestions.length > 0 && (
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between bg-orange-50 rounded-xl p-3">
            <div>
              <p className="font-medium text-orange-700">
                共 {mistakeQuestions.length} 道错题
              </p>
              <p className="text-sm text-orange-600">
                及时复习，巩固知识点
              </p>
            </div>
            <button
              onClick={handlePracticeAll}
              className="btn btn-primary py-2 px-4"
            >
              <Play className="w-4 h-4 mr-1" />
              重做错题
            </button>
          </div>
        </div>
      )}

      {/* 错题列表 */}
      <div className="max-w-lg mx-auto px-4 py-2">
        {mistakeQuestions.length > 0 ? (
          <div className="space-y-4">
            {mistakeQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <QuestionCard
                  question={question}
                  compact
                  onClick={() => router.push(`/questions/${question.id}`)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎉</div>
            <p className="text-stone-500 mb-2">太棒了！没有错题</p>
            <p className="text-sm text-stone-400 mb-4">
              继续保持，向满分进发！
            </p>
            <button
              onClick={() => router.push('/practice')}
              className="btn btn-primary"
            >
              继续刷题
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

