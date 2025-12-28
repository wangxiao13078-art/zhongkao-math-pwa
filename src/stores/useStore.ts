import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Question, PracticeRecord, UserStats } from '@/types'

interface AppState {
  // 用户统计
  stats: UserStats
  
  // 收藏的题目ID
  favorites: number[]
  
  // 错题ID列表
  mistakes: number[]
  
  // 练习记录
  practiceRecords: PracticeRecord[]
  
  // 当前练习
  currentPractice: {
    questions: Question[]
    currentIndex: number
    answers: Record<number, string>
    startTime: number
  } | null
  
  // Actions
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  toggleFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  
  addMistake: (id: number) => void
  removeMistake: (id: number) => void
  
  addPracticeRecord: (record: PracticeRecord) => void
  
  startPractice: (questions: Question[]) => void
  submitAnswer: (questionId: number, answer: string) => void
  nextQuestion: () => void
  prevQuestion: () => void
  endPractice: () => void
  
  updateStats: (correct: boolean) => void
  resetStats: () => void
}

const initialStats: UserStats = {
  totalQuestions: 0,
  correctCount: 0,
  wrongCount: 0,
  accuracy: 0,
  todayCount: 0,
  streak: 0,
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      stats: initialStats,
      favorites: [],
      mistakes: [],
      practiceRecords: [],
      currentPractice: null,
      
      addFavorite: (id) => set((state) => ({
        favorites: [...state.favorites, id]
      })),
      
      removeFavorite: (id) => set((state) => ({
        favorites: state.favorites.filter(f => f !== id)
      })),
      
      toggleFavorite: (id) => {
        const { favorites } = get()
        if (favorites.includes(id)) {
          get().removeFavorite(id)
        } else {
          get().addFavorite(id)
        }
      },
      
      isFavorite: (id) => get().favorites.includes(id),
      
      addMistake: (id) => set((state) => ({
        mistakes: state.mistakes.includes(id) 
          ? state.mistakes 
          : [...state.mistakes, id]
      })),
      
      removeMistake: (id) => set((state) => ({
        mistakes: state.mistakes.filter(m => m !== id)
      })),
      
      addPracticeRecord: (record) => set((state) => ({
        practiceRecords: [...state.practiceRecords, record]
      })),
      
      startPractice: (questions) => set({
        currentPractice: {
          questions,
          currentIndex: 0,
          answers: {},
          startTime: Date.now(),
        }
      }),
      
      submitAnswer: (questionId, answer) => set((state) => {
        if (!state.currentPractice) return state
        return {
          currentPractice: {
            ...state.currentPractice,
            answers: {
              ...state.currentPractice.answers,
              [questionId]: answer
            }
          }
        }
      }),
      
      nextQuestion: () => set((state) => {
        if (!state.currentPractice) return state
        const nextIndex = Math.min(
          state.currentPractice.currentIndex + 1,
          state.currentPractice.questions.length - 1
        )
        return {
          currentPractice: {
            ...state.currentPractice,
            currentIndex: nextIndex
          }
        }
      }),
      
      prevQuestion: () => set((state) => {
        if (!state.currentPractice) return state
        const prevIndex = Math.max(state.currentPractice.currentIndex - 1, 0)
        return {
          currentPractice: {
            ...state.currentPractice,
            currentIndex: prevIndex
          }
        }
      }),
      
      endPractice: () => set({ currentPractice: null }),
      
      updateStats: (correct) => set((state) => {
        const newStats = {
          ...state.stats,
          totalQuestions: state.stats.totalQuestions + 1,
          correctCount: state.stats.correctCount + (correct ? 1 : 0),
          wrongCount: state.stats.wrongCount + (correct ? 0 : 1),
          todayCount: state.stats.todayCount + 1,
        }
        newStats.accuracy = Math.round(
          (newStats.correctCount / newStats.totalQuestions) * 100
        )
        return { stats: newStats }
      }),
      
      resetStats: () => set({ stats: initialStats }),
    }),
    {
      name: 'zhongkao-math-storage',
      partialize: (state) => ({
        stats: state.stats,
        favorites: state.favorites,
        mistakes: state.mistakes,
        practiceRecords: state.practiceRecords,
      }),
    }
  )
)

