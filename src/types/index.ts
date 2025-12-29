// 题目类型
export interface Question {
  id: number
  original_num: string
  type: string  // 选择题/填空题/解答题/综合题
  chapter: string
  content: string
  options: string[]
  answer: string
  analysis: string
  difficulty: number  // 1-5
  source: string
  year: number
  image?: string  // 题目对应的图片路径
  imageUrl?: string  // 兼容旧字段
}

// 练习记录
export interface PracticeRecord {
  id: string
  questionId: number
  userAnswer: string
  isCorrect: boolean
  timeSpent: number // 秒
  createdAt: Date
}

// 用户统计
export interface UserStats {
  totalQuestions: number
  correctCount: number
  wrongCount: number
  accuracy: number
  todayCount: number
  streak: number // 连续天数
}

// 知识点分类
export interface KnowledgeCategory {
  id: string
  name: string
  parent?: string
  questionCount: number
  mastery: number // 0-100
}

// 筛选条件
export interface QuestionFilters {
  type?: string
  chapter?: string
  difficulty?: number
  year?: number
  search?: string
}

// 练习模式
export type PracticeMode = 
  | 'sequential'  // 顺序练习
  | 'random'      // 随机练习
  | 'topic'       // 专题练习
  | 'mistakes'    // 错题重练
  | 'favorites'   // 收藏练习

