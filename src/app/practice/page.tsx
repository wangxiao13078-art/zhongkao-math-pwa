'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Shuffle, 
  List, 
  Target, 
  Star,
  Play,
  ChevronLeft,
  Clock,
  Zap
} from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import { questions, getRandomQuestions, getChapters, filterQuestions } from '@/data/questions'
import { useStore } from '@/stores/useStore'

const practiceTypes = [
  {
    id: 'sequential',
    icon: List,
    title: '顺序练习',
    desc: '按题目顺序逐题练习',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'random',
    icon: Shuffle,
    title: '随机练习',
    desc: '随机抽取题目练习',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'topic',
    icon: Target,
    title: '专题练习',
    desc: '按知识点专题练习',
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 'mistakes',
    icon: Star,
    title: '错题重练',
    desc: '复习之前的错题',
    color: 'from-red-500 to-pink-500',
  },
]

export default function PracticePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { startPractice, mistakes, favorites } = useStore()
  
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedChapter, setSelectedChapter] = useState('')
  const [questionCount, setQuestionCount] = useState(10)
  
  const chapters = getChapters()
  const initialChapter = searchParams.get('chapter') || ''

  const handleStartPractice = () => {
    let practiceQuestions = []
    
    switch (selectedType) {
      case 'sequential':
        practiceQuestions = questions.slice(0, questionCount)
        break
      case 'random':
        practiceQuestions = getRandomQuestions(questionCount)
        break
      case 'topic':
        const filtered = filterQuestions({ chapter: selectedChapter || initialChapter })
        practiceQuestions = filtered.slice(0, questionCount)
        break
      case 'mistakes':
        practiceQuestions = questions.filter(q => mistakes.includes(q.id)).slice(0, questionCount)
        break
      default:
        return
    }

    if (practiceQuestions.length === 0) {
      alert('没有可练习的题目')
      return
    }

    startPractice(practiceQuestions)
    router.push('/practice/doing')
  }

  return (
    <div className="min-h-screen bg-surface-50 pb-20">
      {/* 顶部 */}
      <header className="gradient-primary px-4 pt-12 pb-8 safe-area-top">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6" />
            刷题练习
          </h1>
          <p className="text-orange-100 mt-1 text-sm">
            选择练习模式，开始你的学习之旅
          </p>
        </div>
      </header>

      {/* 练习模式选择 */}
      <div className="max-w-lg mx-auto px-4 -mt-4">
        <div className="grid grid-cols-2 gap-3">
          {practiceTypes.map((type, index) => {
            const Icon = type.icon
            const isSelected = selectedType === type.id
            const isDisabled = type.id === 'mistakes' && mistakes.length === 0
            
            return (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isDisabled && setSelectedType(type.id)}
                disabled={isDisabled}
                className={`relative bg-white rounded-2xl p-4 text-left shadow-card transition-all ${
                  isSelected 
                    ? 'ring-2 ring-primary-500 shadow-lg' 
                    : isDisabled 
                      ? 'opacity-50 cursor-not-allowed'
                      : 'card-hover'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-stone-700">{type.title}</div>
                <div className="text-xs text-stone-400 mt-1">{type.desc}</div>
                {type.id === 'mistakes' && (
                  <div className="text-xs text-stone-400 mt-1">
                    {mistakes.length} 道错题
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* 练习配置 */}
      {selectedType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto px-4 mt-6"
        >
          <div className="bg-white rounded-2xl shadow-card p-4 space-y-4">
            <h3 className="font-semibold text-stone-700 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-500" />
              练习设置
            </h3>

            {/* 题目数量 */}
            <div>
              <label className="text-sm text-stone-600 mb-2 block">题目数量</label>
              <div className="flex gap-2">
                {[5, 10, 20, 30].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                      questionCount === count
                        ? 'gradient-primary text-white'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {count} 道
                  </button>
                ))}
              </div>
            </div>

            {/* 专题选择（仅专题练习模式） */}
            {selectedType === 'topic' && (
              <div>
                <label className="text-sm text-stone-600 mb-2 block">选择知识点</label>
                <select
                  value={selectedChapter || initialChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="input"
                >
                  <option value="">全部知识点</option>
                  {chapters.map(chapter => (
                    <option key={chapter} value={chapter}>{chapter}</option>
                  ))}
                </select>
              </div>
            )}

            {/* 开始按钮 */}
            <button
              onClick={handleStartPractice}
              className="w-full btn btn-primary py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              开始练习
            </button>
          </div>
        </motion.div>
      )}

      {/* 学习统计卡片 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-lg mx-auto px-4 mt-6"
      >
        <div className="bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-4 text-white">
          <h3 className="font-semibold mb-3">📊 练习统计</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{questions.length}</div>
              <div className="text-xs text-stone-300">题库总量</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{favorites.length}</div>
              <div className="text-xs text-stone-300">收藏题目</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{mistakes.length}</div>
              <div className="text-xs text-stone-300">待复习错题</div>
            </div>
          </div>
        </div>
      </motion.div>

      <BottomNav />
    </div>
  )
}

