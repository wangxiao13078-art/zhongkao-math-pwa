'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  X, 
  ChevronLeft,
  SlidersHorizontal
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import QuestionCard from '@/components/QuestionCard'
import { questions, getChapters, getTypes } from '@/data/questions'

const difficulties = [
  { value: 1, label: '简单' },
  { value: 2, label: '较易' },
  { value: 3, label: '中等' },
  { value: 4, label: '较难' },
  { value: 5, label: '困难' },
]

function QuestionsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [searchText, setSearchText] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    chapter: searchParams.get('chapter') || '',
    difficulty: searchParams.get('difficulty') ? parseInt(searchParams.get('difficulty')!) : 0,
  })

  const chapters = getChapters()
  const types = getTypes()

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      if (filters.type && q.type !== filters.type) return false
      if (filters.chapter && q.chapter !== filters.chapter) return false
      if (filters.difficulty && q.difficulty !== filters.difficulty) return false
      if (searchText && !q.content.includes(searchText)) return false
      return true
    })
  }, [filters, searchText])

  const clearFilters = () => {
    setFilters({ type: '', chapter: '', difficulty: 0 })
    setSearchText('')
  }

  const hasActiveFilters = filters.type || filters.chapter || filters.difficulty || searchText

  return (
    <div className="min-h-screen bg-surface-50 pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 safe-area-top">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-stone-800">题库</h1>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                showFilters || hasActiveFilters
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-stone-100 text-stone-600'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              筛选
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-primary-500" />
              )}
            </button>
          </div>
          
          {/* 搜索框 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="搜索题目内容..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="input pl-10"
            />
            {searchText && (
              <button 
                onClick={() => setSearchText('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* 筛选面板 */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-stone-100"
            >
              <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
                {/* 题型 */}
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-2 block">题型</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilters({ ...filters, type: '' })}
                      className={`tag ${!filters.type ? 'tag-primary' : ''}`}
                    >
                      全部
                    </button>
                    {types.map(type => (
                      <button
                        key={type}
                        onClick={() => setFilters({ ...filters, type })}
                        className={`tag ${filters.type === type ? 'tag-primary' : ''}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 章节 */}
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-2 block">章节</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilters({ ...filters, chapter: '' })}
                      className={`tag ${!filters.chapter ? 'tag-primary' : ''}`}
                    >
                      全部
                    </button>
                    {chapters.map(chapter => (
                      <button
                        key={chapter}
                        onClick={() => setFilters({ ...filters, chapter })}
                        className={`tag ${filters.chapter === chapter ? 'tag-primary' : ''}`}
                      >
                        {chapter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 难度 */}
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-2 block">难度</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilters({ ...filters, difficulty: 0 })}
                      className={`tag ${!filters.difficulty ? 'tag-primary' : ''}`}
                    >
                      全部
                    </button>
                    {difficulties.map(d => (
                      <button
                        key={d.value}
                        onClick={() => setFilters({ ...filters, difficulty: d.value })}
                        className={`tag ${filters.difficulty === d.value ? 'tag-primary' : ''}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary-600 flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    清除筛选
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 结果统计 */}
      <div className="max-w-lg mx-auto px-4 py-3">
        <p className="text-sm text-stone-500">
          共找到 <span className="font-medium text-stone-700">{filteredQuestions.length}</span> 道题目
        </p>
      </div>

      {/* 题目列表 */}
      <div className="max-w-lg mx-auto px-4 space-y-4">
        {filteredQuestions.map((question, index) => (
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

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-stone-500">没有找到匹配的题目</p>
            <button
              onClick={clearFilters}
              className="mt-4 btn btn-outline"
            >
              清除筛选条件
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

export default function QuestionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface-50 flex items-center justify-center"><div className="text-stone-500">加载中...</div></div>}>
      <QuestionsContent />
    </Suspense>
  )
}

