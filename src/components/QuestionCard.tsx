'use client'

import { Question } from '@/types'
import MathText from './MathText'
import { Heart, BookOpen, Star } from 'lucide-react'
import { useStore } from '@/stores/useStore'

interface QuestionCardProps {
  question: Question
  showAnswer?: boolean
  showAnalysis?: boolean
  onClick?: () => void
  compact?: boolean
}

const difficultyLabels = ['', '简单', '较易', '中等', '较难', '困难']
const difficultyColors = ['', 'difficulty-1', 'difficulty-2', 'difficulty-3', 'difficulty-4', 'difficulty-5']

export default function QuestionCard({
  question,
  showAnswer = false,
  showAnalysis = false,
  onClick,
  compact = false,
}: QuestionCardProps) {
  const { toggleFavorite, isFavorite } = useStore()
  const favorited = isFavorite(question.id)

  return (
    <div 
      className={`bg-white rounded-2xl shadow-card overflow-hidden card-hover ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* 头部信息 */}
      <div className="flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-stone-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="tag-primary text-xs">{question.type}</span>
          <span className="tag text-xs">{question.chapter}</span>
          <span className={`difficulty-badge ${difficultyColors[question.difficulty]}`}>
            {difficultyLabels[question.difficulty]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400">{question.year}年</span>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite(question.id)
            }}
            className={`p-1.5 rounded-full transition-colors ${
              favorited ? 'text-red-500 bg-red-50' : 'text-stone-400 hover:text-red-400 hover:bg-red-50'
            }`}
          >
            <Heart className="w-4 h-4" fill={favorited ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* 题目内容 - 纯文本 */}
      <div className="p-4">
        <div className="flex gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-white text-sm flex items-center justify-center font-bold shadow-sm">
            {question.id}
          </span>
          <div className="flex-1 min-w-0">
            <MathText 
              content={compact ? question.content.slice(0, 80) + (question.content.length > 80 ? '...' : '') : question.content} 
              className="text-stone-800 leading-relaxed"
            />
          </div>
        </div>

        {/* 选项（选择题） */}
        {question.options.length > 0 && !compact && (
          <div className="mt-4 space-y-2 ml-11">
            {question.options.map((option, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 p-3 rounded-xl bg-stone-50 text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-600 text-xs flex items-center justify-center font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <MathText content={option} className="flex-1" />
              </div>
            ))}
          </div>
        )}

        {/* 答案 */}
        {showAnswer && question.answer && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 ml-11">
            <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-2">
              <Star className="w-4 h-4" />
              <span>答案</span>
            </div>
            <MathText content={question.answer} className="text-emerald-700 font-medium text-lg" />
          </div>
        )}

        {/* 解析 */}
        {showAnalysis && question.analysis && (
          <div className="mt-3 p-4 rounded-xl bg-blue-50 border border-blue-200 ml-11">
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>解题思路</span>
            </div>
            <MathText content={question.analysis} className="text-stone-700 text-sm leading-relaxed whitespace-pre-line" />
          </div>
        )}
      </div>

      {/* 底部来源 */}
      {!compact && (
        <div className="px-4 py-2 bg-stone-50 border-t border-stone-100">
          <span className="text-xs text-stone-400">📚 来源：{question.source}</span>
        </div>
      )}
    </div>
  )
}
