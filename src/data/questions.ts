import { Question } from '@/types'

// 从 scripts/data/questions_structured.json 导入的题目数据
// 这里我们使用简化版本，实际可以直接导入 JSON 文件

export const questions: Question[] = [
  {
    id: 1,
    original_num: "1",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，AB是⊙O的直径，点C是弧AB的中点，点D是弧BC上的一点。AC、BD的延长线相交于点E。若BD=12，DE=5，则⊙O的半径为____。",
    options: [],
    answer: "13/2",
    analysis: "利用圆的性质和相似三角形求解。由于C是弧AB的中点，AC⊥BC。设半径为r，利用相似三角形和勾股定理可得方程，解得r=13/2。",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 2,
    original_num: "2",
    type: "选择题",
    chapter: "数与式",
    content: "估算 √27.6 ≈ ____（结果精确到1）",
    options: ["A. 5", "B. 6", "C. 5.5", "D. 4"],
    answer: "A",
    analysis: "因为25<27.6<36，所以5<√27.6<6。又因为27.6更接近于25，所以√27.6≈5。",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 3,
    original_num: "3",
    type: "填空题",
    chapter: "数与式",
    content: "已知 x+y=0.2，x+3y=1，则代数式 x²+4xy+4y² 的值为____。",
    options: [],
    answer: "0.36",
    analysis: "由x+y=0.2，x+3y=1，解得2x+4y=1.2，即x+2y=0.6。所以x²+4xy+4y²=(x+2y)²=0.6²=0.36。",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 4,
    original_num: "4",
    type: "选择题",
    chapter: "方程与不等式",
    content: "已知 x₁, x₂ 是关于x的一元二次方程 x²+2x+k-1=0 的两个实数根，且 x₁²+x₂²-x₁x₂=13，则k的值为____。",
    options: ["A. -2", "B. 2", "C. -3", "D. 3"],
    answer: "A",
    analysis: "由韦达定理，x₁+x₂=-2，x₁x₂=k-1。x₁²+x₂²-x₁x₂=(x₁+x₂)²-3x₁x₂=4-3(k-1)=7-3k=13，解得k=-2。",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 5,
    original_num: "5",
    type: "解答题",
    chapter: "统计与概率",
    content: "一个盒子中装有10个红球和若干个白球，这些球除颜色外都相同。再往该盒子中放入5个红球后，从中随机摸取一个球，摸到红球的概率为1/2。求盒子中原有白球的个数。",
    options: [],
    answer: "20",
    analysis: "设盒子中原有白球的个数为x个。根据题意，放入5个红球后共有10+5+x=15+x个球，其中红球15个。由概率公式：15/(15+x)=1/2，解得x=20。",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 6,
    original_num: "6",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，在平行四边形ABCD中，∠ABC=120°，AB=5，BC=10。E为BC上一点，BE=2，F为AD边上一动点。将四边形ABEF沿EF翻折得到四边形A'B'EF，连接B'D。当B'D最小时，AF的长为____。",
    options: [],
    answer: "4",
    analysis: "利用翻折的性质，B'D最小时，B'、E、D共线。设AF=x，利用平行四边形的性质和三角函数求解。",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 7,
    original_num: "7",
    type: "选择题",
    chapter: "反比例函数",
    content: "如图，在平面直角坐标系xOy中，直线y=x与双曲线y=k/x（k>0）交于A、B两点。C是第一象限内双曲线上一点，连接CA并延长交y轴于点P，连接BP、BC。若△PBC的面积是20，则点C的坐标为____。",
    options: ["A. (2,10)", "B. (4,5)", "C. (5,4)", "D. (10,2)"],
    answer: "C",
    analysis: "利用反比例函数k的几何意义和面积关系求解。",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 8,
    original_num: "8",
    type: "填空题",
    chapter: "二次函数",
    content: "已知抛物线y=x²-2x-3与x轴交于A、B两点，顶点为C。则△ABC的面积为____。",
    options: [],
    answer: "8",
    analysis: "令y=0，得x²-2x-3=0，解得x=-1或x=3，所以A(-1,0)，B(3,0)，AB=4。顶点C(1,-4)，到x轴距离为4。面积=1/2×4×4=8。",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 9,
    original_num: "9",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，⊙O的半径为5，弦AB的长为8。点D是弧AB所对的优弧上的动点，连接AP，过点A作AP的垂线交弧线PB于点C。当△APB为等腰三角形时，线段BC的长为____。",
    options: [],
    answer: "8或56/9或40√5/9",
    analysis: "分三种情况讨论：①若BA=BP，②若AB=AP，③若PA=PB。分别利用等腰三角形和圆的性质求解。",
    difficulty: 5,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 10,
    original_num: "10",
    type: "填空题",
    chapter: "新定义",
    content: "定义：有一组对角互余的四边形叫作「对角互余四边形」。如图，在对角互余四边形ABCD中，∠ABC+∠ADC=90°，AB=BC，AD=8，BD=13，CD=6，则四边形ABCD的面积为____。",
    options: [],
    answer: "60",
    analysis: "利用对角互余的性质和三角形面积公式求解。设∠ABC=α，则∠ADC=90°-α，利用余弦定理和面积公式计算。",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  }
]

// 获取所有章节
export function getChapters(): string[] {
  const chapters = new Set(questions.map(q => q.chapter))
  return Array.from(chapters)
}

// 获取所有年份
export function getYears(): number[] {
  const years = new Set(questions.map(q => q.year))
  return Array.from(years).sort((a, b) => b - a)
}

// 获取题目类型
export function getTypes(): string[] {
  const types = new Set(questions.map(q => q.type))
  return Array.from(types)
}

// 根据条件筛选题目
export function filterQuestions(filters: {
  type?: string
  chapter?: string
  difficulty?: number
  year?: number
  search?: string
}): Question[] {
  return questions.filter(q => {
    if (filters.type && q.type !== filters.type) return false
    if (filters.chapter && q.chapter !== filters.chapter) return false
    if (filters.difficulty && q.difficulty !== filters.difficulty) return false
    if (filters.year && q.year !== filters.year) return false
    if (filters.search && !q.content.includes(filters.search)) return false
    return true
  })
}

// 获取随机题目
export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// 按难度分组统计
export function getDifficultyStats() {
  const stats: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  questions.forEach(q => {
    stats[q.difficulty]++
  })
  return stats
}

// 按章节分组统计
export function getChapterStats() {
  const stats: Record<string, number> = {}
  questions.forEach(q => {
    stats[q.chapter] = (stats[q.chapter] || 0) + 1
  })
  return stats
}

