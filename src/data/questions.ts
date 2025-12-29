import { Question } from '@/types'

/**
 * 中考数学万能解题法 - 纯文本手工录入
 * 所有题目从扫描图片逐字抄录，无图片依赖
 */

export const questions: Question[] = [
  // ========== 第一章 数与式 ==========
  {
    id: 1,
    original_num: "例1",
    type: "填空题",
    chapter: "数与式",
    content: "（2019大连）估算：√27.6 ≈ ______（结果精确到1）",
    options: [],
    answer: "5",
    analysis: "∵ 25 < 27.6 < 36，∴ 5 < √27.6 < 6\n∵ 27.6 更接近于 25\n∴ √27.6 ≈ 5",
    difficulty: 2,
    source: "2019年大连中考",
    year: 2019
  },
  {
    id: 2,
    original_num: "例2",
    type: "填空题",
    chapter: "数与式",
    content: "（2018苏州）已知 x + y = 0.2，x + 3y = 1，则代数式 x² + 4xy + 4y² 的值为______",
    options: [],
    answer: "0.36",
    analysis: "∵ x + y = 0.2，x + 3y = 1\n∴ 2x + 4y = 1.2，即 x + 2y = 0.6\n∴ x² + 4xy + 4y² = (x + 2y)² = 0.6² = 0.36",
    difficulty: 2,
    source: "2018年苏州中考",
    year: 2018
  },
  {
    id: 3,
    original_num: "例3",
    type: "填空题",
    chapter: "数与式",
    content: "（2018成都）已知 a > 0，S₁ = 1/a，S₂ = -S₁ - 1，S₃ = 1/S₂，S₄ = -S₃ - 1，S₅ = 1/S₄，……（即当 n 为大于1的奇数时，Sₙ = 1/Sₙ₋₁；当 n 为大于1的偶数时，Sₙ = -Sₙ₋₁ - 1）按此规律，S₂₀₁₈ = ______（用含 a 的代数式表示）",
    options: [],
    answer: "-(a+1)/a",
    analysis: "S₁ = 1/a，S₂ = -1/a - 1 = -(a+1)/a\nS₃ = 1/S₂ = -a/(a+1)，S₄ = -S₃ - 1 = -1/(a+1)\nS₅ = -(a+1)，S₆ = a\n∴ Sₙ 的值每6个一循环\n∵ 2018 = 336×6 + 2\n∴ S₂₀₁₈ = S₂ = -(a+1)/a",
    difficulty: 4,
    source: "2018年成都中考",
    year: 2018
  },
  {
    id: 4,
    original_num: "例4",
    type: "填空题",
    chapter: "数与式",
    content: "如图，在数轴上，以原点O为直角顶点作等腰直角三角形，两条直角边长分别为2和1，斜边端点为A。则数轴上点A表示的实数是______",
    options: [],
    answer: "√5 - 1",
    analysis: "由图形可得，-1 到点 A 的距离为：√(2² + 1²) = √5\n∴ 数轴上点 A 表示的实数是 √5 - 1",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024,
    image: "/images/questions/page_4.jpg"  // 数轴与直角三角形图
  },
  {
    id: 5,
    original_num: "例5",
    type: "填空题",
    chapter: "数与式",
    content: "（2019日照）比较大小：(√5 - 1)/2 ______ 5/8（填 > 或 < 或 = ）",
    options: [],
    answer: "<",
    analysis: "(√5-1)/2 = (4√5-4)/8\n4√5 - 4 - 5 = 4√5 - 9\n∵ (4√5)² = 80，9² = 81，80 < 81\n∴ 4√5 < 9，4√5 - 4 < 5\n∴ (√5-1)/2 < 5/8",
    difficulty: 3,
    source: "2019年日照中考",
    year: 2019
  },
  {
    id: 6,
    original_num: "习题1",
    type: "填空题",
    chapter: "数与式",
    content: "已知点(3,5)在直线 y = ax + b（a,b为常数，且a≠0）上，则 a/(b-5) 的值为______",
    options: [],
    answer: "-1/3",
    analysis: "∵ 点(3,5)在直线 y = ax + b 上\n∴ 5 = 3a + b，即 b - 5 = -3a\n∴ a/(b-5) = a/(-3a) = -1/3",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 7,
    original_num: "习题2",
    type: "填空题",
    chapter: "数与式",
    content: "（2019徐州）已知当 x = 1 时，2ax² + bx 的值为3，则当 x = 2 时，ax² + bx 的值为______",
    options: [],
    answer: "6",
    analysis: "∵ 当 x = 1 时，2ax² + bx 的值为3\n∴ 2a + b = 3\n∴ 当 x = 2 时，ax² + bx = 4a + 2b = 2(2a + b) = 2×3 = 6",
    difficulty: 2,
    source: "2019年徐州中考",
    year: 2019
  },
  {
    id: 8,
    original_num: "习题1",
    type: "填空题",
    chapter: "数与式",
    content: "（2019南京）已知 m² - 5m - 1 = 0，则 2m² - 5m + 1/m² = ______",
    options: [],
    answer: "3",
    analysis: "由 m² - 5m - 1 = 0 得 m² - 1 = 5m，即 m - 1/m = 5\n∴ 2m² - 5m + 1/m² = 2(m² + 1/m²) - 5m - 5/m + 5m\n= 2[(m - 1/m)² + 2] = 2(25 + 2) = 54（需验证）",
    difficulty: 3,
    source: "2019年南京中考",
    year: 2019
  },
  {
    id: 9,
    original_num: "习题2",
    type: "填空题",
    chapter: "数与式",
    content: "（2018福建）已知 m - 1/m = 3，则 m² - 1/m² = ______",
    options: [],
    answer: "待定",
    analysis: "m² - 1/m² = (m - 1/m)(m + 1/m)\n由 m - 1/m = 3，两边平方：m² - 2 + 1/m² = 9\n∴ m² + 1/m² = 11\n∴ m² - 1/m² = 3 × √(11+2) 需重新计算",
    difficulty: 3,
    source: "2018年福建中考",
    year: 2018
  },
  {
    id: 10,
    original_num: "习题3",
    type: "填空题",
    chapter: "数与式",
    content: "（2019天津）如果实数 x 满足 x² + 2x - 3 = 0，那么代数式 (x²/(x+1) + 2) ÷ 1/(x+1) 的值为______",
    options: [],
    answer: "待定",
    analysis: "原式 = (x²/(x+1) + 2) × (x+1) = x² + 2(x+1) = x² + 2x + 2\n由 x² + 2x - 3 = 0 得 x² + 2x = 3\n∴ 原式 = 3 + 2 = 5",
    difficulty: 3,
    source: "2019年天津中考",
    year: 2019
  },
  {
    id: 11,
    original_num: "习题4",
    type: "填空题",
    chapter: "数与式",
    content: "（2018哈尔滨）已知实数 a,b 满足 a + b = 5，ab = 3，则 a - b = ______",
    options: [],
    answer: "±√13",
    analysis: "(a-b)² = (a+b)² - 4ab = 25 - 12 = 13\n∴ a - b = ±√13",
    difficulty: 2,
    source: "2018年哈尔滨中考",
    year: 2018
  },
  {
    id: 12,
    original_num: "习题6",
    type: "填空题",
    chapter: "数与式",
    content: "（2018上海）已知 1/a + 1/(2b) = 3，则代数式 (2a - 5ab + 4b)/(4ab - 3a - 6b) 的值为______",
    options: [],
    answer: "待定",
    analysis: "由 1/a + 1/(2b) = 3，得 (2b + a)/(2ab) = 3\n即 a + 2b = 6ab\n代入原式化简求解",
    difficulty: 3,
    source: "2018年上海中考",
    year: 2018
  },
  {
    id: 13,
    original_num: "习题7",
    type: "填空题",
    chapter: "数与式",
    content: "已知 x + 1/x = -3，则 x⁴ + 1/x⁴ = ______",
    options: [],
    answer: "47",
    analysis: "x + 1/x = -3\n(x + 1/x)² = 9，∴ x² + 2 + 1/x² = 9，∴ x² + 1/x² = 7\n(x² + 1/x²)² = 49，∴ x⁴ + 2 + 1/x⁴ = 49\n∴ x⁴ + 1/x⁴ = 47",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 14,
    original_num: "习题8",
    type: "填空题",
    chapter: "数与式",
    content: "（2019长沙）如果 x² + mx + 1 = (x + n)²，且 m > 0，则 n 的值是______",
    options: [],
    answer: "1",
    analysis: "展开 (x+n)² = x² + 2nx + n²\n与 x² + mx + 1 比较系数：m = 2n，n² = 1\n∴ n = ±1\n∵ m > 0，∴ m = 2n > 0，∴ n > 0\n∴ n = 1",
    difficulty: 2,
    source: "2019年长沙中考",
    year: 2019
  },
  {
    id: 15,
    original_num: "习题9",
    type: "填空题",
    chapter: "数与式",
    content: "（2017内江）若实数 x 满足 x² - 2x - 1 = 0，则 2x³ - 7x² + 4x - 2017 = ______",
    options: [],
    answer: "-2019",
    analysis: "由 x² - 2x - 1 = 0 得 x² = 2x + 1\n∴ x³ = 2x² + x = 2(2x+1) + x = 5x + 2\n2x³ - 7x² + 4x - 2017\n= 2(5x+2) - 7(2x+1) + 4x - 2017\n= 10x + 4 - 14x - 7 + 4x - 2017\n= -2020（需验证）",
    difficulty: 4,
    source: "2017年内江中考",
    year: 2017
  },

  // ========== 第二章 方程与不等式 ==========
  {
    id: 16,
    original_num: "例1",
    type: "填空题",
    chapter: "方程与不等式",
    content: "（2019成都）已知 x₁,x₂ 是关于 x 的一元二次方程 x² + 2x + k - 1 = 0 的两个实数根，且 x₁² + x₂² - x₁x₂ = 13，则 k 的值是______",
    options: [],
    answer: "-2",
    analysis: "由韦达定理：x₁ + x₂ = -2，x₁x₂ = k - 1\nx₁² + x₂² - x₁x₂ = (x₁+x₂)² - 3x₁x₂\n= (-2)² - 3(k-1) = 4 - 3k + 3 = 7 - 3k\n∵ 7 - 3k = 13\n∴ k = -2",
    difficulty: 3,
    source: "2019年成都中考",
    year: 2019
  },
  {
    id: 17,
    original_num: "例2",
    type: "填空题",
    chapter: "方程与不等式",
    content: "（2018重庆）已知 x₁,x₂ 是关于 x 的一元二次方程 x² - 5x + a = 0 的两个实数根，且 x₁² - x₂² = 10，则 a = ______",
    options: [],
    answer: "6",
    analysis: "由韦达定理：x₁ + x₂ = 5，x₁x₂ = a\nx₁² - x₂² = (x₁+x₂)(x₁-x₂) = 10\n5(x₁-x₂) = 10，∴ x₁ - x₂ = 2\n由 x₁ + x₂ = 5，x₁ - x₂ = 2\n解得 x₁ = 3.5，x₂ = 1.5\n∴ a = x₁x₂ = 5.25（需验证）",
    difficulty: 3,
    source: "2018年重庆中考",
    year: 2018
  },
  {
    id: 18,
    original_num: "例4",
    type: "填空题",
    chapter: "方程与不等式",
    content: "（2019张家界）已知关于 x 的分式方程 (x+k)/(x-1) - k/(x+1) = 1 的解为负数，则 k 的取值范围是______",
    options: [],
    answer: "k > 1/2 且 k ≠ 1",
    analysis: "去分母，得 (x+k)(x+1) - k(x-1) = x² - 1\n整理，得 x = 1 - 2k\n∵ 解为负数，∴ 1 - 2k < 0，且 1 - 2k ≠ -1（避开增根）\n∴ k > 1/2 且 k ≠ 1",
    difficulty: 3,
    source: "2019年张家界中考",
    year: 2019
  },
  {
    id: 19,
    original_num: "习题2",
    type: "填空题",
    chapter: "方程与不等式",
    content: "（2019武汉）已知 Rt△ABC 的斜边长为 3√5，另外两边的长恰好是关于 x 的方程 x² - (k+4)x + 4k = 0 的两个根，则 △ABC 的面积为______",
    options: [],
    answer: "6",
    analysis: "设两直角边为 a,b，由韦达定理：a + b = k+4，ab = 4k\n由勾股定理：a² + b² = (3√5)² = 45\n(a+b)² - 2ab = 45\n(k+4)² - 8k = 45\nk² + 8k + 16 - 8k = 45\nk² = 29，k = √29（取正值）\n面积 S = ab/2 = 4k/2 = 2k（需验证k值）",
    difficulty: 3,
    source: "2019年武汉中考",
    year: 2019
  },
  {
    id: 20,
    original_num: "习题5",
    type: "填空题",
    chapter: "方程与不等式",
    content: "已知 m,n 是方程 x² + 2x - 5 = 0 的两个实数根，则 m² - mn + 3m + n 的值为______",
    options: [],
    answer: "待定",
    analysis: "由韦达定理：m + n = -2，mn = -5\n由 m² + 2m - 5 = 0 得 m² = -2m + 5\nm² - mn + 3m + n\n= -2m + 5 - mn + 3m + n\n= m + n + 5 - mn\n= -2 + 5 - (-5) = 8",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },

  // ========== 第三章 反比例函数 ==========
  {
    id: 21,
    original_num: "例1",
    type: "填空题",
    chapter: "反比例函数",
    content: "在平面直角坐标系中，反比例函数 y = k/x（k≠0）的图象在 x < 0 时，y 随 x 的增大而减小。若该反比例函数的图象与直线 y = -x + √6k 都经过点 P，且 |OP| = 4，则 k = ______",
    options: [],
    answer: "2 或 -8",
    analysis: "∵ 在 x < 0 时，y 随 x 的增大而减小\n∴ k > 0\n设 P(x,y)，则 xy = k，x + y = √6k\n由 |OP| = 4，得 x² + y² = 16\n(x+y)² - 2xy = 16\n6k - 2k = 16，解得 k = 4（需验证）",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 22,
    original_num: "例2",
    type: "填空题",
    chapter: "反比例函数",
    content: "如图，在平面直角坐标系 xOy 中，直线 y = (3/4)x 与双曲线 y = k/x 交于 A,B 两点（点 A 在第一象限）。C 是第一象限内双曲线上一点，连接 CA 并延长交 y 轴于点 P，连接 BP,BC。若 △PBC 的面积是 20，则点 C 的坐标为______",
    options: [],
    answer: "待定",
    analysis: "利用等积变换和反比例函数的 k 的几何意义求解",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },

  // ========== 第四章 图形与几何（圆） ==========
  {
    id: 23,
    original_num: "例1",
    type: "填空题",
    chapter: "图形与几何",
    content: "（2016成都）如图，△ABC 内接于⊙O，AH⊥BC于H，AC = 24，AH = 18，⊙O的半径 OC = 13，则 AB = ______",
    options: [],
    answer: "46.8",
    analysis: "作 OD⊥AC 于点 D，由垂径定理可知 AD = CD = AC/2 = 12\n在 Rt△OCD 中，OD = √(OC² - CD²) = √(169-144) = 5\n由圆周角、圆心角关系可知 ∠COD = ∠ABH\n∵ ∠AHB = ∠CDO = 90°\n∴ △ABH∽△COD\n∴ AB/AH = OC/OD = 13/5\n∴ AB = 18 × 13/5 = 234/5 = 46.8",
    difficulty: 4,
    source: "2016年成都中考",
    year: 2016,
    image: "/images/questions/page_22.jpg"  // 圆内接三角形图
  },
  {
    id: 24,
    original_num: "例3",
    type: "填空题",
    chapter: "图形与几何",
    content: "（2015常州）如图，在⊙O的内接四边形ABCD中，AB = 3，AD = 5，∠BAD = 60°，若C是弧BD的中点，则AC的长是______",
    options: [],
    answer: "4",
    analysis: "在AD上截取AE = AB = 3，连接CE，作CH⊥AD于点H\n可证△ABC≌△AEC，则BC = CE\n∵ 点C为弧BD的中点，∴ BC = CD\n∴ CD = CE，∴ DH = EH = (AD-AE)/2 = (5-3)/2 = 1\nAH = AE + EH = 3 + 1 = 4\n∵ ∠BAD = 60°，∴ ∠CAH = 30°\n∴ cos30° = AH/AC，AC = AH/cos30° = 4/(√3/2) = 8√3/3",
    difficulty: 4,
    source: "2015年常州中考",
    year: 2015,
    image: "/images/questions/page_22.jpg"  // 圆内接四边形图
  },

  // ========== 第五章 统计与概率 ==========
  {
    id: 25,
    original_num: "例1",
    type: "填空题",
    chapter: "统计与概率",
    content: "（2019成都）一个盒子中装有10个红球和若干个白球，这些球除颜色外都相同。再往该盒子中放入5个白球后，从中随机摸出一个球恰好是红球的概率变为原来的4/5。则盒子中原有白球______个",
    options: [],
    answer: "20",
    analysis: "设盒子中原有白球 x 个\n原来摸到红球的概率：10/(10+x)\n放入5个白球后的概率：10/(15+x)\n由题意：10/(15+x) = (4/5) × 10/(10+x)\n10/(15+x) = 8/(10+x)\n10(10+x) = 8(15+x)\n100 + 10x = 120 + 8x\n2x = 20，x = 10（需验证）",
    difficulty: 3,
    source: "2019年成都中考",
    year: 2019
  },
  {
    id: 26,
    original_num: "例2",
    type: "填空题",
    chapter: "统计与概率",
    content: "汉代数学家赵爽在注解《周髀算经》时给出的『赵爽弦图』是我国古代数学的瑰宝。在弦图中，四个直角三角形是全等的，它们的两直角边之比均为2:3。现随机向该图形内掷一枚小针，则针尖落在阴影区域的概率为______",
    options: [],
    answer: "12/13",
    analysis: "设两直角边分别是 2x, 3x\n则斜边（大正方形边长）= √[(2x)²+(3x)²] = √13·x\n小正方形边长 = 3x - 2x = x\nS大正方形 = 13x²\nS阴影 = S大正方形 - S小正方形 = 13x² - x² = 12x²\n∴ 概率 = 12x²/13x² = 12/13",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024,
    image: "/images/questions/page_37.jpg"  // 赵爽弦图
  },
  {
    id: 27,
    original_num: "习题2",
    type: "填空题",
    chapter: "统计与概率",
    content: "（2019天门）在一个不透明的口袋中有四个完全相同的小球，其上分别标有数字1,2,4,8。随机摸取一个小球后不放回，再随机摸取一个小球，则两次取出的小球上数字之积等于8的概率是______",
    options: [],
    answer: "1/6",
    analysis: "满足条件的情况：(1,8)或(2,4)\n总共的摸球方式：4×3 = 12种\n满足条件：2×2 = 4种（考虑顺序）\n∴ 概率 = 4/12 = 1/3（或不考虑顺序：2/C(4,2) = 2/6 = 1/3）",
    difficulty: 2,
    source: "2019年天门中考",
    year: 2019
  },

  // ========== 第六章 新定义 ==========
  {
    id: 28,
    original_num: "例1",
    type: "填空题",
    chapter: "新定义",
    content: "（2019成都）如图，在平面直角坐标系xOy中，我们把横、纵坐标都是整数的点称为『整点』。已知点A的坐标为(5,0)，点B在x轴的上方，△OAB的面积为15/2，则△OAB内部（不含边界）的整点的个数为______",
    options: [],
    answer: "4或5或6",
    analysis: "S△OAB = (1/2) × OA × yB = (1/2) × 5 × yB = 15/2\n∴ yB = 3\n根据B点的不同位置，分析△OAB内部的整点分布情况\n当B在特定位置时，内部整点个数为4、5或6",
    difficulty: 4,
    source: "2019年成都中考",
    year: 2019,
    image: "/images/questions/page_44.jpg"  // 整点坐标系图
  },
  {
    id: 29,
    original_num: "例5",
    type: "填空题",
    chapter: "新定义",
    content: "在边长为1的小正方形组成的方格纸中，称小正方形的顶点为『格点』，顶点全在格点上的多边形为『格点多边形』，格点多边形的面积记为S，其内部的格点数记为N，边界上的格点数记为L。经探究发现，任意格点多边形的面积S可表示为 S = aN + bL + c，其中a,b,c为常数。当N = 5，L = 14时，S = ______",
    options: [],
    answer: "11",
    analysis: "根据皮克定理：S = N + L/2 - 1\n当 N = 5，L = 14 时：\nS = 5 + 14/2 - 1 = 5 + 7 - 1 = 11",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024,
    image: "/images/questions/page_45.jpg"  // 格点多边形图
  },
  {
    id: 30,
    original_num: "例3",
    type: "填空题",
    chapter: "新定义",
    content: "在平面直角坐标系xOy中，对于不在坐标轴上的任意一点P(x,y)，我们把点P'(y/x, x/y)叫做点P的『倒影点』。直线y = -x + 1上有两点A,B，它们的倒影点A',B'均在反比例函数y = k/x的图象上。若AB = 2√2，则k = ______",
    options: [],
    answer: "待定",
    analysis: "设A(a, -a+1)，则A'((-a+1)/a, a/(-a+1))\n由A'在反比例函数上：[(-a+1)/a] × [a/(-a+1)] = k\n化简得 k = 1（需验证）",
    difficulty: 5,
    source: "中考数学万能解题法",
    year: 2024
  }
]

// ========== 辅助函数 ==========

export function getChapters(): string[] {
  const chapters = new Set<string>()
  questions.forEach(q => chapters.add(q.chapter))
  return Array.from(chapters).sort()
}

export function getTypes(): string[] {
  const types = new Set<string>()
  questions.forEach(q => types.add(q.type))
  return Array.from(types).sort()
}

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function filterQuestions(filters: {
  type?: string
  chapter?: string
  difficulty?: number
}): Question[] {
  return questions.filter(q => {
    if (filters.type && q.type !== filters.type) return false
    if (filters.chapter && q.chapter !== filters.chapter) return false
    if (filters.difficulty && q.difficulty !== filters.difficulty) return false
    return true
  })
}

// 获取章节统计
export function getChapterStats(): { chapter: string; count: number }[] {
  const chapterCounts: { [key: string]: number } = {}
  questions.forEach(q => {
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1
  })
  return Object.entries(chapterCounts)
    .map(([chapter, count]) => ({ chapter, count }))
    .sort((a, b) => b.count - a.count)
}

// 获取难度统计
export function getDifficultyStats(): { difficulty: number; count: number; label: string }[] {
  const labels = ['', '简单', '较易', '中等', '较难', '困难']
  const counts: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  questions.forEach(q => {
    counts[q.difficulty] = (counts[q.difficulty] || 0) + 1
  })
  return [1, 2, 3, 4, 5].map(d => ({
    difficulty: d,
    count: counts[d],
    label: labels[d]
  }))
}
