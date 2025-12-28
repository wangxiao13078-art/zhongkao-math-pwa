'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Heart,
  CheckCircle2,
  XCircle,
  Flag
} from 'lucide-react'
import MathText from '@/components/MathText'
import { useStore } from '@/stores/useStore'

export default function DoingPage() {
  const router = useRouter()
  const { 
    currentPractice, 
    submitAnswer, 
    nextQuestion, 
    prevQuestion, 
    endPractice,
    toggleFavorite,
    isFavorite,
    addMistake,
    removeMistake,
    updateStats
  } = useStore()
  
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)

  // 计时器
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // 如果没有当前练习，返回练习页
  if (!currentPractice || currentPractice.questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-50">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-stone-500 mb-4">没有进行中的练习</p>
          <button
            onClick={() => router.push('/practice')}
            className="btn btn-primary"
          >
            开始新练习
          </button>
        </div>
      </div>
    )
  }

  const { questions, currentIndex, answers } = currentPractice
  const currentQuestion = questions[currentIndex]
  const isLast = currentIndex === questions.length - 1
  const favorited = isFavorite(currentQuestion.id)
  
  // 获取已保存的答案
  const savedAnswer = answers[currentQuestion.id]
  
  // 当切换题目时重置状态
  useEffect(() => {
    setSelectedAnswer(savedAnswer || '')
    setShowResult(!!savedAnswer)
  }, [currentIndex, savedAnswer])

  // 提交答案
  const handleSubmit = () => {
    if (!selectedAnswer) return
    
    submitAnswer(currentQuestion.id, selectedAnswer)
    setShowResult(true)
    
    // 判断对错
    const isCorrect = selectedAnswer === currentQuestion.answer
    updateStats(isCorrect)
    
    if (!isCorrect) {
      addMistake(currentQuestion.id)
    } else {
      removeMistake(currentQuestion.id)
    }
  }

  // 下一题
  const handleNext = () => {
    if (isLast) {
      // 完成练习
      router.push('/practice/result')
    } else {
      nextQuestion()
      setSelectedAnswer('')
      setShowResult(false)
    }
  }

  // 退出练习
  const handleExit = () => {
    if (confirm('确定要退出练习吗？进度将会丢失')) {
      endPractice()
      router.push('/practice')
    }
  }

  // 判断选项是否正确
  const isCorrectAnswer = (option: string) => {
    return currentQuestion.answer.includes(option.charAt(0))
  }

  // 获取选项样式
  const getOptionStyle = (option: string, index: number) => {
    const optionLetter = String.fromCharCode(65 + index)
    const isSelected = selectedAnswer === optionLetter
    
    if (!showResult) {
      return isSelected ? 'selected' : ''
    }
    
    // 显示结果时
    if (optionLetter === currentQuestion.answer || currentQuestion.answer.includes(optionLetter)) {
      return 'correct'
    }
    if (isSelected && selectedAnswer !== currentQuestion.answer) {
      return 'wrong'
    }
    return ''
  }

  return (
    <div className="min-h-screen bg-surface-50 pb-24">
      {/* 顶部进度条 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 safe-area-top">
        <div className="max-w-lg mx-auto">
          <div className="px-4 py-3 flex items-center justify-between">
            <button 
              onClick={handleExit}
              className="flex items-center gap-1 text-stone-600"
            >
              <ChevronLeft className="w-5 h-5" />
              退出
            </button>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-stone-700">
                {currentIndex + 1} / {questions.length}
              </span>
              <div className="flex items-center gap-1 text-stone-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-mono">{formatTime(timeElapsed)}</span>
              </div>
            </div>
            
            <button 
              onClick={() => toggleFavorite(currentQuestion.id)}
              className={`p-2 rounded-full transition-colors ${
                favorited ? 'text-red-500 bg-red-50' : 'text-stone-400'
              }`}
            >
              <Heart className="w-5 h-5" fill={favorited ? 'currentColor' : 'none'} />
            </button>
          </div>
          
          {/* 进度条 */}
          <div className="h-1 bg-stone-100">
            <motion.div
              className="h-full gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* 题目内容 */}
      <div className="max-w-lg mx-auto px-4 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {/* 题目标签 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="tag-primary text-xs">{currentQuestion.type}</span>
              <span className="tag text-xs">{currentQuestion.chapter}</span>
              <span className={`difficulty-badge difficulty-${currentQuestion.difficulty}`}>
                {['', '简单', '较易', '中等', '较难', '困难'][currentQuestion.difficulty]}
              </span>
            </div>

            {/* 题目内容 */}
            <div className="bg-white rounded-2xl shadow-card p-4 mb-4">
              <div className="flex gap-2">
                <span className="flex-shrink-0 w-7 h-7 rounded-full gradient-primary text-white text-sm flex items-center justify-center font-bold">
                  {currentQuestion.original_num}
                </span>
                <MathText 
                  content={currentQuestion.content} 
                  className="text-stone-700 flex-1"
                />
              </div>
            </div>

            {/* 选项列表（选择题） */}
            {currentQuestion.options.length > 0 && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const optionLetter = String.fromCharCode(65 + index)
                  const optionStyle = getOptionStyle(option, index)
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && setSelectedAnswer(optionLetter)}
                      disabled={showResult}
                      className={`option-card w-full text-left ${optionStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                          optionStyle === 'correct' 
                            ? 'bg-success-500 text-white' 
                            : optionStyle === 'wrong'
                              ? 'bg-error-500 text-white'
                              : optionStyle === 'selected'
                                ? 'bg-primary-500 text-white'
                                : 'bg-stone-100 text-stone-600'
                        }`}>
                          {optionStyle === 'correct' ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : optionStyle === 'wrong' ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            optionLetter
                          )}
                        </span>
                        <MathText content={option.replace(/^[A-D]\.\s*/, '')} className="flex-1" />
                      </div>
                    </button>
                  )
                })}
              </div>
            )}

            {/* 填空题/解答题输入框 */}
            {currentQuestion.options.length === 0 && (
              <div className="bg-white rounded-2xl shadow-card p-4">
                <label className="text-sm text-stone-600 mb-2 block">请输入你的答案：</label>
                <textarea
                  value={selectedAnswer}
                  onChange={(e) => !showResult && setSelectedAnswer(e.target.value)}
                  disabled={showResult}
                  placeholder="在此输入答案..."
                  className="input min-h-[100px] resize-none"
                />
              </div>
            )}

            {/* 结果显示 */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                {/* 正确答案 */}
                <div className="bg-success-50 border border-success-500/20 rounded-xl p-4 mb-3">
                  <div className="flex items-center gap-2 text-success-600 font-medium mb-1">
                    <CheckCircle2 className="w-5 h-5" />
                    正确答案
                  </div>
                  <MathText content={currentQuestion.answer} className="text-success-700" />
                </div>
                
                {/* 解析 */}
                {currentQuestion.analysis && (
                  <div className="bg-primary-50 border border-primary-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary-600 font-medium mb-1">
                      <Flag className="w-5 h-5" />
                      解析
                    </div>
                    <MathText content={currentQuestion.analysis} className="text-stone-600 text-sm" />
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 safe-area-bottom">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className={`p-3 rounded-xl ${
              currentIndex === 0 
                ? 'text-stone-300 bg-stone-50' 
                : 'text-stone-600 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex-1">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className={`w-full btn py-3 ${
                  selectedAnswer ? 'btn-primary' : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                确认提交
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full btn btn-primary py-3"
              >
                {isLast ? '完成练习' : '下一题'}
                {!isLast && <ChevronRight className="w-5 h-5 ml-1" />}
              </button>
            )}
          </div>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1 && !showResult}
            className={`p-3 rounded-xl ${
              currentIndex === questions.length - 1 && !showResult
                ? 'text-stone-300 bg-stone-50' 
                : 'text-stone-600 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

