'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp,
  RotateCcw,
  Home,
  BookOpen,
  Star,
  Flame
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { useStore } from '@/stores/useStore'

export default function ResultPage() {
  const router = useRouter()
  const { currentPractice, endPractice, stats } = useStore()
  const [showConfetti, setShowConfetti] = useState(false)

  // 计算结果
  const calculateResults = () => {
    if (!currentPractice) {
      return {
        total: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0,
        timeSpent: 0,
      }
    }

    const { questions, answers, startTime } = currentPractice
    let correct = 0
    let wrong = 0

    questions.forEach(q => {
      const userAnswer = answers[q.id]
      if (userAnswer === q.answer) {
        correct++
      } else if (userAnswer) {
        wrong++
      }
    })

    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    const accuracy = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0

    return {
      total: questions.length,
      correct,
      wrong,
      accuracy,
      timeSpent,
    }
  }

  const results = calculateResults()

  // 播放庆祝动画
  useEffect(() => {
    if (results.accuracy >= 80 && !showConfetti) {
      setShowConfetti(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }, [results.accuracy, showConfetti])

  // 格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}分${secs}秒`
  }

  // 获取评价
  const getEvaluation = (accuracy: number) => {
    if (accuracy >= 90) return { emoji: '🏆', text: '太棒了！', color: 'text-yellow-500' }
    if (accuracy >= 80) return { emoji: '🎉', text: '表现优秀！', color: 'text-green-500' }
    if (accuracy >= 60) return { emoji: '👍', text: '继续加油！', color: 'text-blue-500' }
    return { emoji: '💪', text: '再接再厉！', color: 'text-orange-500' }
  }

  const evaluation = getEvaluation(results.accuracy)

  const handleRestart = () => {
    endPractice()
    router.push('/practice')
  }

  const handleGoHome = () => {
    endPractice()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-500 to-primary-600 safe-area-top safe-area-bottom">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* 头部 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-2">{evaluation.emoji}</div>
          <h1 className="text-2xl font-bold text-white">{evaluation.text}</h1>
          <p className="text-primary-100 mt-1">练习完成</p>
        </motion.div>

        {/* 主要分数 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-4"
        >
          <div className="text-center mb-6">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#e7e5e4"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke={results.accuracy >= 60 ? '#10b981' : '#f97316'}
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: '0 352' }}
                  animate={{ strokeDasharray: `${results.accuracy * 3.52} 352` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-stone-800">{results.accuracy}%</span>
                <span className="text-sm text-stone-500">正确率</span>
              </div>
            </div>
          </div>

          {/* 详细数据 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="flex items-center justify-center text-blue-500 mb-1">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-stone-800">{results.total}</div>
              <div className="text-xs text-stone-500">总题数</div>
            </div>
            <div className="text-center p-3 bg-success-50 rounded-xl">
              <div className="flex items-center justify-center text-success-500 mb-1">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-success-600">{results.correct}</div>
              <div className="text-xs text-stone-500">答对</div>
            </div>
            <div className="text-center p-3 bg-error-50 rounded-xl">
              <div className="flex items-center justify-center text-error-500 mb-1">
                <Star className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-error-600">{results.wrong}</div>
              <div className="text-xs text-stone-500">答错</div>
            </div>
          </div>

          {/* 用时 */}
          <div className="mt-4 flex items-center justify-center gap-2 text-stone-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">用时 {formatTime(results.timeSpent)}</span>
          </div>
        </motion.div>

        {/* 累计统计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6"
        >
          <div className="flex items-center gap-2 text-white mb-3">
            <Flame className="w-5 h-5" />
            <span className="font-medium">累计学习</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{stats.totalQuestions}</div>
              <div className="text-xs text-primary-100">总做题数</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats.accuracy}%</div>
              <div className="text-xs text-primary-100">总正确率</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats.streak}</div>
              <div className="text-xs text-primary-100">连续天数</div>
            </div>
          </div>
        </motion.div>

        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <button
            onClick={handleRestart}
            className="w-full btn bg-white text-primary-600 py-4"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            再练一组
          </button>
          
          {results.wrong > 0 && (
            <button
              onClick={() => {
                endPractice()
                router.push('/profile/mistakes')
              }}
              className="w-full btn bg-white/20 text-white py-4"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              查看错题 ({results.wrong}道)
            </button>
          )}
          
          <button
            onClick={handleGoHome}
            className="w-full btn bg-transparent border-2 border-white/50 text-white py-4"
          >
            <Home className="w-5 h-5 mr-2" />
            返回首页
          </button>
        </motion.div>
      </div>
    </div>
  )
}

