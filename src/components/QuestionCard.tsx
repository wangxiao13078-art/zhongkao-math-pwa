'use client'

import { useState } from 'react'
import { Question } from '@/types'
import MathText from './MathText'
import { Heart, BookOpen, Star, ZoomIn, X } from 'lucide-react'
import { useStore } from '@/stores/useStore'

interface QuestionCardProps {
  question: Question
  showAnswer?: boolean
  showAnalysis?: boolean
  showImage?: boolean  // 是否显示题目图片
  onClick?: () => void
  compact?: boolean
}

const difficultyLabels = ['', '简单', '较易', '中等', '较难', '困难']
const difficultyColors = ['', 'difficulty-1', 'difficulty-2', 'difficulty-3', 'difficulty-4', 'difficulty-5']

export default function QuestionCard({
  question,
  showAnswer = false,
  showAnalysis = false,
  showImage = true,
  onClick,
  compact = false,
}: QuestionCardProps) {
  const { toggleFavorite, isFavorite } = useStore()
  const favorited = isFavorite(question.id)
  const [imageZoomed, setImageZoomed] = useState(false)

  // 获取图片路径
  const imagePath = question.image || question.imageUrl

  return (
    <>
    {/* 图片放大弹窗 */}
    {imageZoomed && imagePath && (
      <div 
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-auto"
        onClick={() => setImageZoomed(false)}
      >
        <button 
          className="fixed top-4 right-4 p-3 bg-white/20 rounded-full text-white hover:bg-white/30 z-10"
          onClick={() => setImageZoomed(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imagePath}
            alt="题目图片"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    )}
    <div 
      className={`bg-white rounded-2xl shadow-card overflow-hidden card-hover ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* 头部信息 */}
      <div className="flex items-center justify-between px-4 py-3 bg-stone-50 border-b border-stone-100">
        <div className="flex items-center gap-2">
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

      {/* 题目内容 */}
      <div className="p-4">
        {/* 紧凑模式 - 显示图片缩略图 */}
        {compact && imagePath && (
          <div className="flex gap-3 items-start">
            {/* 缩略图 */}
            <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-stone-200 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePath}
                alt="题目缩略图"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* 标题信息 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex-shrink-0 w-5 h-5 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-medium">
                  {question.id}
                </span>
                <span className="text-sm font-medium text-stone-700">{question.chapter}</span>
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                {question.source} · 第{question.original_num?.replace(/[^0-9]/g, '') || question.id}页
              </p>
              <div className="mt-2 flex items-center gap-1 text-primary-500 text-xs font-medium">
                <ZoomIn className="w-3 h-3" />
                <span>点击查看完整题目</span>
              </div>
            </div>
          </div>
        )}

        {/* 紧凑模式 - 无图片时显示文本 */}
        {compact && !imagePath && (
          <div className="flex gap-2">
            <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-medium">
              {question.id}
            </span>
            <div className="flex-1 min-w-0">
              <MathText 
                content={question.content.slice(0, 100) + (question.content.length > 100 ? '...' : '')} 
                className="text-stone-700"
              />
            </div>
          </div>
        )}

        {/* 详情模式 - 图片优先显示（主要内容） */}
        {!compact && showImage && imagePath && (
          <div 
            className="relative rounded-xl overflow-hidden border-2 border-stone-200 cursor-pointer group shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              setImageZoomed(true)
            }}
          >
            <div className="relative w-full min-h-[200px] sm:min-h-[300px] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePath}
                alt="题目图片"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 rounded-full p-3 shadow-lg">
                <ZoomIn className="w-6 h-6 text-primary-500" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-primary-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow">
              📷 点击放大
            </div>
          </div>
        )}
        
        {/* 详情模式 - 如果没有图片，显示OCR文本 */}
        {!compact && !imagePath && (
          <div className="flex gap-2">
            <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-medium">
              {question.original_num}
            </span>
            <div className="flex-1 min-w-0">
              <MathText 
                content={question.content} 
                className="text-stone-700"
              />
            </div>
          </div>
        )}

        {/* 选项 */}
        {question.options.length > 0 && !compact && (
          <div className="mt-4 space-y-2">
            {question.options.map((option, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 p-3 rounded-xl bg-stone-50 text-stone-600"
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
          <div className="mt-4 p-3 rounded-xl bg-success-50 border border-success-500/20">
            <div className="flex items-center gap-2 text-success-600 font-medium mb-1">
              <Star className="w-4 h-4" />
              <span>答案</span>
            </div>
            <MathText content={question.answer} className="text-success-700" />
          </div>
        )}

        {/* 解析 */}
        {showAnalysis && question.analysis && (
          <div className="mt-3 p-3 rounded-xl bg-primary-50 border border-primary-500/20">
            <div className="flex items-center gap-2 text-primary-600 font-medium mb-1">
              <BookOpen className="w-4 h-4" />
              <span>解析</span>
            </div>
            <MathText content={question.analysis} className="text-stone-600 text-sm" />
          </div>
        )}
      </div>

      {/* 底部来源 */}
      {!compact && (
        <div className="px-4 py-2 bg-stone-50 border-t border-stone-100">
          <span className="text-xs text-stone-400">来源：{question.source}</span>
        </div>
      )}
    </div>
    </>
  )
}

