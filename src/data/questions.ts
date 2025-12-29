import { Question } from '@/types'

// 从 questions_structured.json 导入的60道题目
export const questions: Question[] = [
  {
    id: 1,
    original_num: "1",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，AB是⊙O的直径，点C是弧AB的中点，点D是弧BC上的一点。AC、BD的延长线相交于点E。若BD=12，DE=5，则⊙O的半径为____。",
    options: [],
    answer: "6.5",
    analysis: "利用圆周角定理和相似三角形求解。由于C是弧AB的中点，∠ACB=90°。利用切割线定理：DE×DB=DC²",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 2,
    original_num: "2", 
    type: "选择题",
    chapter: "图形与几何",
    content: "如图，⊙O是△ABC的外接圆，AD是⊙O的切线，CD⊥AC，CD=AC，连接BD。若AB=4，BC=3，则BD=",
    options: ["A. 5", "B. 4", "C. 3", "D. 2.5"],
    answer: "A",
    analysis: "利用切线性质和勾股定理求解",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 3,
    original_num: "3",
    type: "选择题", 
    chapter: "图形与几何",
    content: "如图，⊙O是△ABC的外接圆，AB是⊙O的直径，CD平分∠ACB交⊙O于点D。AE是⊙O的切线，与DC的延长线交于点E。设tan∠ADE=x，tan∠ABE=y，则y关于x的函数关系式为",
    options: ["A. y=x", "B. y=2x", "C. y=x/2", "D. y=x²"],
    answer: "A",
    analysis: "利用圆周角定理和切线性质推导",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 4,
    original_num: "4",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，⊙O是△ABC的外接圆，AD⊥BC于点D，BE⊥AC于点E，AD、BE交于点F。若AF=2，BC=6，则⊙O的半径为____。",
    options: [],
    answer: "3",
    analysis: "利用垂心性质和外接圆半径公式求解",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 5,
    original_num: "5",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，AB是⊙O的直径，C是⊙O上一点，D是半径OB上一点，OD=2DB，CD延长线交⊙O于点E。若CA=CE，BC=2，则AE=____。",
    options: [],
    answer: "√5",
    analysis: "利用圆的性质和相似三角形求解",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 6,
    original_num: "6",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，⊙O是△ABC的外接圆，∠BAC=30°，BC=2。点D是AC上一动点，点E是CD延长线上一点，且AE=AD，则CE的最大值为____。",
    options: [],
    answer: "4",
    analysis: "利用动点分析和三角形性质求最值",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 7,
    original_num: "7",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，在平行四边形ABCD中，∠ABC=120°，AB=5，BC=10。E为BC上一点，BE=2，F为AD边上一动点，将四边形ABEF沿EF折叠得到四边形A'B'EF，连接B'D，当B'D最小时，AF的长为____。",
    options: [],
    answer: "4",
    analysis: "利用折叠性质和最短路径原理求解",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 8,
    original_num: "8",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，在Rt△ABC中，∠ACB=90°，∠BAC=30°，BC=4。D是AB边上的一个动点，连接CD，将CD绕点C顺时针旋转60°得到线段CE，连接AE。若AE=√13，则BD的长为____。",
    options: [],
    answer: "2",
    analysis: "利用旋转变换和勾股定理求解",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 9,
    original_num: "9",
    type: "选择题",
    chapter: "图形与几何",
    content: "如图，在菱形纸片ABCD中，AB=4，∠BAD=60°。第一步：将菱形ABCD折叠，使点A的对应点A'恰好落在边CD上；第二步：再将四边形纸片BCA'F折叠，使点C的对应点C'恰好落在A'F上。连接GC'，则GC'=",
    options: ["A. 2", "B. √3", "C. 2√3", "D. 4"],
    answer: "B",
    analysis: "利用菱形性质和折叠变换求解",
    difficulty: 5,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 10,
    original_num: "10",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，在矩形ABCD中，AB=3，AD=4，点E是AD的中点，将四边形BCDE沿直线BE折叠得到四边形BCD'E。若△ACD'的面积为矩形ABCD面积的1/4，则△AD'F的面积为____。",
    options: [],
    answer: "3/2",
    analysis: "利用矩形性质和折叠变换求面积",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 11,
    original_num: "11",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，△ABC中，∠ACB=90°，BC=2，AC=4。将△ABC绕点C逆时针旋转得到△DEC，点F在AD上，连接BF。求△ABF面积的最大值。",
    options: [],
    answer: "4",
    analysis: "利用旋转变换和面积公式求最值",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 12,
    original_num: "12",
    type: "选择题",
    chapter: "数与式",
    content: "计算：(-2)³ + |−5| - 2⁰ =",
    options: ["A. -4", "B. -2", "C. 2", "D. 4"],
    answer: "A",
    analysis: "(-2)³=-8，|−5|=5，2⁰=1，所以-8+5-1=-4",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 13,
    original_num: "13",
    type: "选择题",
    chapter: "数与式",
    content: "下列计算正确的是",
    options: ["A. a²·a³=a⁶", "B. (a²)³=a⁵", "C. a⁶÷a²=a³", "D. a³+a³=2a³"],
    answer: "D",
    analysis: "A错：a²·a³=a⁵；B错：(a²)³=a⁶；C错：a⁶÷a²=a⁴；D正确",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 14,
    original_num: "14",
    type: "填空题",
    chapter: "数与式",
    content: "分解因式：x²-4x+4 = ____",
    options: [],
    answer: "(x-2)²",
    analysis: "这是完全平方公式：a²-2ab+b²=(a-b)²",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 15,
    original_num: "15",
    type: "选择题",
    chapter: "数与式",
    content: "若√(x-2)有意义，则x的取值范围是",
    options: ["A. x>2", "B. x≥2", "C. x<2", "D. x≤2"],
    answer: "B",
    analysis: "根号内的数必须大于等于0，即x-2≥0，所以x≥2",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 16,
    original_num: "16",
    type: "选择题",
    chapter: "方程与不等式",
    content: "一元二次方程x²-3x+2=0的解是",
    options: ["A. x=1", "B. x=2", "C. x=1或x=2", "D. x=-1或x=-2"],
    answer: "C",
    analysis: "因式分解：(x-1)(x-2)=0，所以x=1或x=2",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 17,
    original_num: "17",
    type: "填空题",
    chapter: "方程与不等式",
    content: "解不等式组：{x+1>0, 2x-1<3}，解集为____",
    options: [],
    answer: "-1<x<2",
    analysis: "x+1>0得x>-1；2x-1<3得x<2。取交集得-1<x<2",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 18,
    original_num: "18",
    type: "解答题",
    chapter: "方程与不等式",
    content: "已知关于x的一元二次方程x²+2x+k=0有两个不相等的实数根，求k的取值范围。",
    options: [],
    answer: "k<1",
    analysis: "有两个不相等实根，则Δ>0，即b²-4ac>0，4-4k>0，所以k<1",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 19,
    original_num: "19",
    type: "选择题",
    chapter: "函数",
    content: "一次函数y=2x-1的图象经过",
    options: ["A. 第一、二、三象限", "B. 第一、二、四象限", "C. 第一、三、四象限", "D. 第二、三、四象限"],
    answer: "C",
    analysis: "k=2>0，b=-1<0，所以经过一、三、四象限",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 20,
    original_num: "20",
    type: "选择题",
    chapter: "函数",
    content: "抛物线y=x²-2x+3的顶点坐标是",
    options: ["A. (1,2)", "B. (-1,2)", "C. (1,4)", "D. (-1,4)"],
    answer: "A",
    analysis: "y=x²-2x+3=(x-1)²+2，顶点坐标为(1,2)",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 21,
    original_num: "21",
    type: "解答题",
    chapter: "函数",
    content: "已知二次函数y=ax²+bx+c的图象过点(-1,0)、(3,0)、(0,-3)，求该二次函数的解析式。",
    options: [],
    answer: "y=x²-2x-3",
    analysis: "由两个零点可设y=a(x+1)(x-3)，代入(0,-3)得a=1，所以y=(x+1)(x-3)=x²-2x-3",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 22,
    original_num: "22",
    type: "选择题",
    chapter: "反比例函数",
    content: "反比例函数y=k/x(k≠0)的图象经过点(2,3)，则k=",
    options: ["A. 6", "B. -6", "C. 3/2", "D. 2/3"],
    answer: "A",
    analysis: "将点(2,3)代入y=k/x，得3=k/2，所以k=6",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 23,
    original_num: "23",
    type: "填空题",
    chapter: "反比例函数",
    content: "已知反比例函数y=6/x，当x>0时，y随x的增大而____",
    options: [],
    answer: "减小",
    analysis: "k=6>0，在第一象限，y随x增大而减小",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 24,
    original_num: "24",
    type: "解答题",
    chapter: "反比例函数",
    content: "已知一次函数y=x+b与反比例函数y=4/x的图象交于点A(1,a)，求b的值和另一个交点B的坐标。",
    options: [],
    answer: "b=3，B(-4,-1)",
    analysis: "A(1,a)在y=4/x上，a=4。代入y=x+b得4=1+b，b=3。联立y=x+3和y=4/x求另一交点",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 25,
    original_num: "25",
    type: "选择题",
    chapter: "统计与概率",
    content: "一组数据2,3,5,5,7的中位数和众数分别是",
    options: ["A. 5和5", "B. 5和3", "C. 4.4和5", "D. 3和5"],
    answer: "A",
    analysis: "数据已按升序排列，中位数是第3个数5，出现最多的数是5（出现2次），所以众数也是5",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 26,
    original_num: "26",
    type: "选择题",
    chapter: "统计与概率",
    content: "从1,2,3,4中随机抽取两个不同的数，这两个数之和为偶数的概率是",
    options: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3"],
    answer: "B",
    analysis: "共有C(4,2)=6种取法。和为偶数需要两个都是奇数或都是偶数：(1,3)和(2,4)共2种。概率=2/6=1/3",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 27,
    original_num: "27",
    type: "解答题",
    chapter: "统计与概率",
    content: "某班40名学生的数学成绩如下：80分以下5人，80~89分15人，90~99分16人，100分4人。求该班数学成绩的平均数（各段取中间值计算）。",
    options: [],
    answer: "88.5分",
    analysis: "取中间值：75,84.5,94.5,100。平均数=(75×5+84.5×15+94.5×16+100×4)/40=88.5",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 28,
    original_num: "28",
    type: "选择题",
    chapter: "三角形",
    content: "在△ABC中，∠A=50°，∠B=60°，则∠C=",
    options: ["A. 60°", "B. 70°", "C. 80°", "D. 90°"],
    answer: "B",
    analysis: "三角形内角和为180°，∠C=180°-50°-60°=70°",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 29,
    original_num: "29",
    type: "选择题",
    chapter: "三角形",
    content: "等腰三角形的一个角是80°，则它的底角是",
    options: ["A. 80°", "B. 50°", "C. 80°或50°", "D. 80°或20°"],
    answer: "C",
    analysis: "若80°是顶角，底角=(180°-80°)/2=50°；若80°是底角，另一底角也是80°",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 30,
    original_num: "30",
    type: "解答题",
    chapter: "三角形",
    content: "在Rt△ABC中，∠C=90°，AC=3，BC=4，求斜边AB的长。",
    options: [],
    answer: "5",
    analysis: "由勾股定理：AB²=AC²+BC²=9+16=25，所以AB=5",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 31,
    original_num: "31",
    type: "选择题",
    chapter: "四边形",
    content: "下列四边形中，对角线一定相等的是",
    options: ["A. 平行四边形", "B. 菱形", "C. 矩形", "D. 梯形"],
    answer: "C",
    analysis: "矩形的对角线相等且互相平分",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 32,
    original_num: "32",
    type: "填空题",
    chapter: "四边形",
    content: "菱形的两条对角线分别为6和8，则菱形的面积为____",
    options: [],
    answer: "24",
    analysis: "菱形面积=对角线乘积的一半=6×8÷2=24",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 33,
    original_num: "33",
    type: "解答题",
    chapter: "四边形",
    content: "如图，在平行四边形ABCD中，AB=6，BC=4，∠B=60°，求平行四边形ABCD的面积。",
    options: [],
    answer: "12√3",
    analysis: "面积=AB×BC×sin60°=6×4×(√3/2)=12√3",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 34,
    original_num: "34",
    type: "选择题",
    chapter: "相似三角形",
    content: "若△ABC∽△DEF，且AB:DE=2:3，则△ABC与△DEF的面积比为",
    options: ["A. 2:3", "B. 4:9", "C. 8:27", "D. 3:2"],
    answer: "B",
    analysis: "相似三角形面积比等于相似比的平方：(2:3)²=4:9",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 35,
    original_num: "35",
    type: "解答题",
    chapter: "相似三角形",
    content: "如图，DE∥BC，AD=2，DB=4，DE=3，求BC的长。",
    options: [],
    answer: "9",
    analysis: "由平行线分线段成比例：AD/AB=DE/BC，即2/6=3/BC，BC=9",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 36,
    original_num: "36",
    type: "选择题",
    chapter: "锐角三角函数",
    content: "在Rt△ABC中，∠C=90°，若tanA=3/4，则sinA=",
    options: ["A. 3/5", "B. 4/5", "C. 3/4", "D. 4/3"],
    answer: "A",
    analysis: "tanA=对边/邻边=3/4，设对边=3k，邻边=4k，斜边=5k，sinA=3k/5k=3/5",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 37,
    original_num: "37",
    type: "填空题",
    chapter: "锐角三角函数",
    content: "sin30°+cos60°=____",
    options: [],
    answer: "1",
    analysis: "sin30°=1/2，cos60°=1/2，所以sin30°+cos60°=1",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 38,
    original_num: "38",
    type: "解答题",
    chapter: "锐角三角函数",
    content: "如图，从山脚A处测得山顶B的仰角为30°，沿山坡向上走100米到达C点，再测得山顶B的仰角为60°。求山的高度BD。",
    options: [],
    answer: "50√3米",
    analysis: "设BD=h，利用正弦定理或构造直角三角形求解",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 39,
    original_num: "39",
    type: "选择题",
    chapter: "圆",
    content: "⊙O的半径为5，点P到圆心O的距离为3，则点P与⊙O的位置关系是",
    options: ["A. 点P在⊙O外", "B. 点P在⊙O上", "C. 点P在⊙O内", "D. 无法确定"],
    answer: "C",
    analysis: "PO=3<5=r，所以点P在圆内",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 40,
    original_num: "40",
    type: "填空题",
    chapter: "圆",
    content: "⊙O的半径为6，弦AB的长为6，则弦AB所对的圆心角为____",
    options: [],
    answer: "60°",
    analysis: "连接OA、OB，△OAB是等边三角形（三边都等于6），所以圆心角=60°",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 41,
    original_num: "41",
    type: "解答题",
    chapter: "圆",
    content: "如图，AB是⊙O的直径，C是⊙O上一点，∠BAC=30°，求∠BOC的度数。",
    options: [],
    answer: "60°",
    analysis: "圆心角等于同弧上圆周角的2倍，∠BOC=2∠BAC=60°",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 42,
    original_num: "42",
    type: "选择题",
    chapter: "图形变换",
    content: "将点A(2,-3)关于x轴对称得到点B，则点B的坐标为",
    options: ["A. (-2,-3)", "B. (-2,3)", "C. (2,3)", "D. (3,-2)"],
    answer: "C",
    analysis: "关于x轴对称，x坐标不变，y坐标变相反数：(2,-3)→(2,3)",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 43,
    original_num: "43",
    type: "填空题",
    chapter: "图形变换",
    content: "将点A(1,2)绕原点O顺时针旋转90°得到点B，则点B的坐标为____",
    options: [],
    answer: "(2,-1)",
    analysis: "顺时针旋转90°：(x,y)→(y,-x)，所以(1,2)→(2,-1)",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 44,
    original_num: "44",
    type: "解答题",
    chapter: "图形变换",
    content: "如图，在坐标系中，△ABC的顶点坐标分别为A(1,1)、B(3,1)、C(2,3)。将△ABC向右平移2个单位，求平移后各顶点的坐标。",
    options: [],
    answer: "A'(3,1)、B'(5,1)、C'(4,3)",
    analysis: "向右平移2个单位，各点x坐标加2，y坐标不变",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 45,
    original_num: "45",
    type: "选择题",
    chapter: "视图与投影",
    content: "如图所示的几何体的俯视图是",
    options: ["A. 圆", "B. 正方形", "C. 长方形", "D. 三角形"],
    answer: "A",
    analysis: "圆锥的俯视图是一个圆（底面）",
    difficulty: 1,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 46,
    original_num: "46",
    type: "填空题",
    chapter: "视图与投影",
    content: "一个几何体的三视图都是全等的正方形，则这个几何体是____",
    options: [],
    answer: "正方体（立方体）",
    analysis: "三视图都是全等正方形，说明长宽高相等，是正方体",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 47,
    original_num: "47",
    type: "解答题",
    chapter: "视图与投影",
    content: "画出如图所示几何体（由4个小正方体组成）的三视图。",
    options: [],
    answer: "主视图、左视图、俯视图各不相同，需画图表示",
    analysis: "从正面、左面、上面分别观察画出视图",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 48,
    original_num: "48",
    type: "选择题",
    chapter: "综合",
    content: "已知|a-2|+√(b+3)=0，则a+b=",
    options: ["A. -1", "B. 1", "C. 5", "D. -5"],
    answer: "A",
    analysis: "|a-2|≥0，√(b+3)≥0，两者和为0则都为0。a=2，b=-3，a+b=-1",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 49,
    original_num: "49",
    type: "解答题",
    chapter: "综合",
    content: "如图，在平面直角坐标系中，抛物线y=x²-2x-3与x轴交于A、B两点（A在B左边），与y轴交于点C。(1)求A、B、C三点坐标；(2)求△ABC的面积。",
    options: [],
    answer: "(1)A(-1,0),B(3,0),C(0,-3) (2)6",
    analysis: "(1)令y=0得x²-2x-3=0，(x+1)(x-3)=0，A(-1,0),B(3,0)；令x=0得C(0,-3)。(2)S=1/2×4×3=6",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 50,
    original_num: "50",
    type: "解答题",
    chapter: "综合",
    content: "某商场销售某种商品，进价为每件40元，售价为每件60元，每天可销售100件。为促销，商场决定降价销售，经调查发现：每件商品降价1元，每天多销售10件。设每件商品降价x元，每天销售利润为y元。(1)写出y与x的函数关系式；(2)每件商品降价多少元时，每天销售利润最大？最大利润是多少？",
    options: [],
    answer: "(1)y=-10x²+100x+2000 (2)降价5元时利润最大，最大利润2250元",
    analysis: "利润=(售价-进价)×销量=(60-40-x)(100+10x)=(20-x)(100+10x)，展开整理得y=-10x²+100x+2000",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 51,
    original_num: "51",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，在等边△ABC中，点D在BC边上，点E在AC的延长线上，且CD=CE。连接DE。(1)求证：BD=DE；(2)若AB=6，BD=2，求DE的长。",
    options: [],
    answer: "(1)证明略 (2)DE=2",
    analysis: "利用等边三角形性质和全等三角形证明",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 52,
    original_num: "52",
    type: "解答题",
    chapter: "图形与几何",
    content: "如图，四边形ABCD是正方形，点E、F分别在BC、CD上，且BE=CF。连接AE、AF。(1)求证：AE=AF；(2)求证：∠EAF=45°。",
    options: [],
    answer: "(1)(2)证明略",
    analysis: "利用正方形性质和全等三角形证明",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 53,
    original_num: "53",
    type: "选择题",
    chapter: "数与式",
    content: "若x²+y²-4x+6y+13=0，则x+y=",
    options: ["A. -1", "B. 1", "C. 5", "D. -5"],
    answer: "A",
    analysis: "配方：(x-2)²+(y+3)²=0，所以x=2,y=-3,x+y=-1",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 54,
    original_num: "54",
    type: "填空题",
    chapter: "数与式",
    content: "化简：(√12-√3)÷√3 = ____",
    options: [],
    answer: "1",
    analysis: "√12=2√3，(2√3-√3)÷√3=√3÷√3=1",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 55,
    original_num: "55",
    type: "解答题",
    chapter: "函数",
    content: "已知二次函数y=ax²+bx+c的图象如图所示，根据图象信息，回答下列问题：(1)写出该二次函数的解析式；(2)求函数值y>0时x的取值范围。",
    options: [],
    answer: "(1)y=x²-2x-3 (2)-1<x<3时y<0,x<-1或x>3时y>0",
    analysis: "根据图象读取顶点坐标和与坐标轴交点，写出解析式",
    difficulty: 3,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 56,
    original_num: "56",
    type: "解答题",
    chapter: "综合",
    content: "如图，在Rt△ABC中，∠ACB=90°，AC=BC=4，点D是AB的中点，点E是AC上的动点（不与A、C重合）。连接DE，将△ADE沿DE折叠，使点A落在点A'处。设AE=x，△A'DE与△BCD重叠部分的面积为S。(1)当点A'恰好落在BC边上时，求AE的长；(2)求S关于x的函数解析式，并求S的最大值。",
    options: [],
    answer: "(1)AE=2 (2)需要分类讨论",
    analysis: "利用折叠性质和分类讨论求解",
    difficulty: 5,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 57,
    original_num: "57",
    type: "选择题",
    chapter: "方程与不等式",
    content: "关于x的方程(x-2)(x+a)=0的一个解是x=2，则a=",
    options: ["A. 2", "B. -2", "C. 任意实数", "D. 0"],
    answer: "C",
    analysis: "当x=2时，(2-2)(2+a)=0恒成立，与a无关，所以a可以是任意实数",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 58,
    original_num: "58",
    type: "填空题",
    chapter: "统计与概率",
    content: "掷一枚质地均匀的硬币两次，两次都是正面朝上的概率是____",
    options: [],
    answer: "1/4",
    analysis: "每次正面朝上的概率是1/2，两次独立事件：P=1/2×1/2=1/4",
    difficulty: 2,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 59,
    original_num: "59",
    type: "解答题",
    chapter: "圆",
    content: "如图，AB是⊙O的直径，PA切⊙O于点A，PO交⊙O于点C，连接BC。若PA=4，AB=6，求tan∠PBC的值。",
    options: [],
    answer: "2/3",
    analysis: "利用切线性质和直角三角形求解",
    difficulty: 4,
    source: "中考数学万能解题法",
    year: 2024
  },
  {
    id: 60,
    original_num: "60",
    type: "解答题",
    chapter: "综合",
    content: "如图，在平面直角坐标系中，抛物线y=-x²+bx+c与x轴交于A(-1,0)、B(3,0)两点，与y轴交于点C。(1)求抛物线的解析式；(2)点P是抛物线上的动点，当△PAB的面积等于△CAB面积的2倍时，求点P的坐标；(3)点M是线段AB上的动点，过点M作x轴的垂线交抛物线于点N，求MN的最大值。",
    options: [],
    answer: "(1)y=-x²+2x+3 (2)P(1,4)或P(1,-8) (3)MN最大值为4",
    analysis: "综合运用二次函数性质、面积公式和配方法求最值",
    difficulty: 5,
    source: "中考数学万能解题法",
    year: 2024
  }
]

// 工具函数
export function getChapters(): string[] {
  const chapters = new Set(questions.map(q => q.chapter))
  return Array.from(chapters)
}

export function getTypes(): string[] {
  const types = new Set(questions.map(q => q.type))
  return Array.from(types)
}

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
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
  const chapterMap = new Map<string, number>()
  questions.forEach(q => {
    chapterMap.set(q.chapter, (chapterMap.get(q.chapter) || 0) + 1)
  })
  return Array.from(chapterMap.entries())
    .map(([chapter, count]) => ({ chapter, count }))
    .sort((a, b) => b.count - a.count)
}

// 获取难度统计
export function getDifficultyStats(): { difficulty: number; count: number; label: string }[] {
  const difficultyLabels: Record<number, string> = {
    1: '简单',
    2: '较易', 
    3: '中等',
    4: '较难',
    5: '困难'
  }
  const difficultyMap = new Map<number, number>()
  questions.forEach(q => {
    difficultyMap.set(q.difficulty, (difficultyMap.get(q.difficulty) || 0) + 1)
  })
  return Array.from(difficultyMap.entries())
    .map(([difficulty, count]) => ({ 
      difficulty, 
      count,
      label: difficultyLabels[difficulty] || '未知'
    }))
    .sort((a, b) => a.difficulty - b.difficulty)
}
