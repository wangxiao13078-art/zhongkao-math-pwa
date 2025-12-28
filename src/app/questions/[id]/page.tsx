'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, 
  Heart, 
  Share2, 
  ChevronRight,
  Eye,
  EyeOff
} from 'lucide-react'
import { useState } from 'react'
import QuestionCard from '@/components/QuestionCard'
import { questions } from '@/data/questions'
import { useStore } from '@/stores/useStore'

export default function QuestionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [showAnswer, setShowAnswer] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)
  
  const questionId = parseInt(params.id as string)
  const question = questions.find(q => q.id === questionId)
  const currentIndex = questions.findIndex(q => q.id === questionId)
  
  const { toggleFavorite, isFavorite } = useStore()
  const favorited = question ? isFavorite(question.id) : false

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <p className="text-stone-500">题目不存在</p>
          <button
            onClick={() => router.push('/questions')}
            className="mt-4 btn btn-primary"
          >
            返回题库
          </button>
        </div>
      </div>
    )
  }

  const prevQuestion = currentIndex > 0 ? questions[currentIndex - 1] : null
  const nextQuestion = currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `中考数学题 #${question.original_num}`,
          text: question.content.slice(0, 100),
          url: window.location.href,
        })
      } catch {
        // 用户取消分享
      }
    }
  }

  return (
    <div className="min-h-screen bg-surface-50 pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 safe-area-top">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-1 text-stone-600"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          
          <span className="text-sm text-stone-500">
            {currentIndex + 1} / {questions.length}
          </span>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleFavorite(question.id)}
              className={`p-2 rounded-full transition-colors ${
                favorited ? 'text-red-500 bg-red-50' : 'text-stone-400 hover:text-red-400'
              }`}
            >
              <Heart className="w-5 h-5" fill={favorited ? 'currentColor' : 'none'} />
            </button>
            <button 
              onClick={handleShare}
              className="p-2 rounded-full text-stone-400 hover:text-stone-600"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 题目内容 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto px-4 py-4"
      >
        <QuestionCard
          question={question}
          showAnswer={showAnswer}
          showAnalysis={showAnalysis}
        />

        {/* 显示/隐藏控制 */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className={`flex-1 btn ${showAnswer ? 'btn-primary' : 'btn-secondary'}`}
          >
            {showAnswer ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {showAnswer ? '隐藏答案' : '查看答案'}
          </button>
          <button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className={`flex-1 btn ${showAnalysis ? 'btn-primary' : 'btn-secondary'}`}
          >
            {showAnalysis ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {showAnalysis ? '隐藏解析' : '查看解析'}
          </button>
        </div>
      </motion.div>

      {/* 底部导航 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 safe-area-bottom">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => prevQuestion && router.push(`/questions/${prevQuestion.id}`)}
            disabled={!prevQuestion}
            className={`flex items-center gap-1 px-4 py-2 rounded-xl ${
              prevQuestion 
                ? 'text-stone-600 hover:bg-stone-100' 
                : 'text-stone-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            上一题
          </button>
          
          <button
            onClick={() => router.push('/practice?start=' + question.id)}
            className="btn btn-primary"
          >
            开始做题
          </button>
          
          <button
            onClick={() => nextQuestion && router.push(`/questions/${nextQuestion.id}`)}
            disabled={!nextQuestion}
            className={`flex items-center gap-1 px-4 py-2 rounded-xl ${
              nextQuestion 
                ? 'text-stone-600 hover:bg-stone-100' 
                : 'text-stone-300 cursor-not-allowed'
            }`}
          >
            下一题
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

