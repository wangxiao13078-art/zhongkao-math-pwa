'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, Heart, Trash2 } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import QuestionCard from '@/components/QuestionCard'
import { questions } from '@/data/questions'
import { useStore } from '@/stores/useStore'

export default function FavoritesPage() {
  const router = useRouter()
  const { favorites, removeFavorite } = useStore()

  const favoriteQuestions = questions.filter(q => favorites.includes(q.id))

  const handleClearAll = () => {
    if (confirm('确定要清空所有收藏吗？')) {
      favorites.forEach(id => removeFavorite(id))
    }
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
            <Heart className="w-5 h-5 text-red-500" />
            我的收藏
          </h1>
          {favorites.length > 0 && (
            <button 
              onClick={handleClearAll}
              className="text-stone-400 hover:text-red-500"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* 收藏列表 */}
      <div className="max-w-lg mx-auto px-4 py-4">
        {favoriteQuestions.length > 0 ? (
          <div className="space-y-4">
            {favoriteQuestions.map((question, index) => (
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
            <div className="text-6xl mb-4">💝</div>
            <p className="text-stone-500 mb-2">还没有收藏任何题目</p>
            <p className="text-sm text-stone-400 mb-4">
              浏览题库时点击❤️收藏感兴趣的题目
            </p>
            <button
              onClick={() => router.push('/questions')}
              className="btn btn-primary"
            >
              去浏览题库
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

