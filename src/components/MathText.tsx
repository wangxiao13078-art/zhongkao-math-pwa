'use client'

import { useEffect, useRef } from 'react'

interface MathTextProps {
  content: string
  className?: string
}

export default function MathText({ content, className = '' }: MathTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // 动态加载 KaTeX 并渲染
      import('katex').then((katex) => {
        if (!containerRef.current) return
        
        // 处理行内公式 $...$
        let html = content.replace(/\$\$(.+?)\$\$/g, (_, latex) => {
          try {
            return katex.default.renderToString(latex.trim(), { 
              displayMode: true,
              throwOnError: false 
            })
          } catch {
            return `<span class="text-red-500">[公式错误]</span>`
          }
        })
        
        html = html.replace(/\$(.+?)\$/g, (_, latex) => {
          try {
            return katex.default.renderToString(latex.trim(), { 
              displayMode: false,
              throwOnError: false 
            })
          } catch {
            return `<span class="text-red-500">[公式错误]</span>`
          }
        })
        
        // 处理换行
        html = html.replace(/\n/g, '<br/>')
        
        containerRef.current.innerHTML = html
      })
    }
  }, [content])

  return (
    <div 
      ref={containerRef}
      className={`question-content ${className}`}
    >
      {/* 初始显示纯文本，等待 KaTeX 渲染 */}
      {content}
    </div>
  )
}

