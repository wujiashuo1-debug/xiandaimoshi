window.QUESTION_BANK = [
  {
    "id": "MPR001",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 1,
    "type": "single",
    "question": "模式识别系统的核心基本骨架流程是：",
    "options": [
      {
        "key": "A",
        "text": "预处理 → 数据采集 → 特征提取 → 分类/聚类判定"
      },
      {
        "key": "B",
        "text": "数据采集 → 预处理 → 特征提取 → 分类/聚类判定"
      },
      {
        "key": "C",
        "text": "特征提取 → 数据采集 → 预处理 → 分类/聚类判定"
      },
      {
        "key": "D",
        "text": "数据采集 → 特征提取 → 预处理 → 分类/聚类判定"
      }
    ],
    "answer": "B",
    "explanation": "模式识别的标准流程是先拿到数据，再做清洗/预处理，然后把有用信息提成特征，最后用分类或聚类算法做判定。"
  },
  {
    "id": "MPR002",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 2,
    "type": "single",
    "question": "分类（Classification）与聚类（Clustering）的核心区别在于：",
    "options": [
      {
        "key": "A",
        "text": "分类是无监督学习，聚类是有监督学习"
      },
      {
        "key": "B",
        "text": "分类已知类别标签，聚类不知道类别标签"
      },
      {
        "key": "C",
        "text": "分类不需要特征空间，聚类需要特征空间"
      },
      {
        "key": "D",
        "text": "分类只能处理线性数据，聚类只能处理非线性数据"
      }
    ],
    "answer": "B",
    "explanation": "分类是有监督任务，训练时知道样本标签；聚类是无监督任务，标签未知，只能靠相似性自动分组。"
  },
  {
    "id": "MPR003",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 3,
    "type": "single",
    "question": "在分类器设计中，如果模型过于复杂、包裹了训练集中的每一个点及噪声，通常会导致：",
    "options": [
      {
        "key": "A",
        "text": "欠拟合（Underfitting）"
      },
      {
        "key": "B",
        "text": "过拟合（Overfitting）"
      },
      {
        "key": "C",
        "text": "泛化能力增强"
      },
      {
        "key": "D",
        "text": "训练精度下降"
      }
    ],
    "answer": "B",
    "explanation": "模型把训练集每个点甚至噪声都包住，本质是在记答案，不是在学规律，所以训练好看但泛化差。"
  },
  {
    "id": "MPR004",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 4,
    "type": "single",
    "question": "下列哪项技术不属于模式识别在计算机视觉中的生物特征识别应用？",
    "options": [
      {
        "key": "A",
        "text": "虹膜识别"
      },
      {
        "key": "B",
        "text": "步态识别"
      },
      {
        "key": "C",
        "text": "知识图谱实体抽取"
      },
      {
        "key": "D",
        "text": "触摸动态行为认证"
      }
    ],
    "answer": "C",
    "explanation": "知识图谱实体抽取属于自然语言处理/知识工程方向，不是计算机视觉里的生物特征识别。"
  },
  {
    "id": "MPR005",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 5,
    "type": "single",
    "question": "以特征为坐标轴构成的空间被称为：",
    "options": [
      {
        "key": "A",
        "text": "物理空间"
      },
      {
        "key": "B",
        "text": "样本空间"
      },
      {
        "key": "C",
        "text": "特征空间"
      },
      {
        "key": "D",
        "text": "状态空间"
      }
    ],
    "answer": "C",
    "explanation": "把每个特征当作坐标轴后，样本就变成空间中的点，这个空间就叫特征空间。"
  },
  {
    "id": "MPR006",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 6,
    "type": "single",
    "question": "在特征空间中，用于将不同类别样本分开的边界被称为：",
    "options": [
      {
        "key": "A",
        "text": "判定线/面（Decision Boundary）"
      },
      {
        "key": "B",
        "text": "坐标轴"
      },
      {
        "key": "C",
        "text": "特征向量"
      },
      {
        "key": "D",
        "text": "投影轴"
      }
    ],
    "answer": "A",
    "explanation": "判定边界就是把不同类别区域隔开的线、面或超平面，是分类器真正做决策的位置。"
  },
  {
    "id": "MPR007",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 7,
    "type": "single",
    "question": "下列关于无监督学习的说法中，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "必须依赖人工标注的类别标签"
      },
      {
        "key": "B",
        "text": "经典代表算法包括朴素贝叶斯和SVM"
      },
      {
        "key": "C",
        "text": "靠算法自动发现数据内部的相似性与结构"
      },
      {
        "key": "D",
        "text": "其核心任务是求解最小错误率决策面"
      }
    ],
    "answer": "C",
    "explanation": "无监督学习没有人工标签，典型目标是让算法自己发现数据里的相似性、簇结构或潜在规律。"
  },
  {
    "id": "MPR008",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 8,
    "type": "single",
    "question": "为了提高分类器的泛化能力，在设计判定边界时通常应当选择：",
    "options": [
      {
        "key": "A",
        "text": "极其复杂的完全包裹数据的非线性曲线"
      },
      {
        "key": "B",
        "text": "尽可能平滑且保持合理间隔的优化分类器边界"
      },
      {
        "key": "C",
        "text": "放弃任何边界，直接采用随机猜测"
      },
      {
        "key": "D",
        "text": "迫使所有类别的类内散布矩阵为零的边界"
      }
    ],
    "answer": "B",
    "explanation": "边界太复杂会过拟合。更好的边界通常应平滑、有合理间隔，能兼顾训练效果和泛化能力。"
  },
  {
    "id": "MPR009",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 9,
    "type": "single",
    "question": "模式识别通用模型 $y = f(x)$ 中，符号 $x$ 通常代表：",
    "options": [
      {
        "key": "A",
        "text": "系统输出的类别标签"
      },
      {
        "key": "B",
        "text": "分类器映射关系"
      },
      {
        "key": "C",
        "text": "观测数据（输入的特征向量）"
      },
      {
        "key": "D",
        "text": "先验概率分布"
      }
    ],
    "answer": "C",
    "explanation": "在 y=f(x) 中，x 是输入样本或特征向量，f 是分类/识别模型，y 是输出类别或结果。"
  },
  {
    "id": "MPR010",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别概述与基础概念",
    "number": 10,
    "type": "single",
    "question": "自动驾驶感知系统中，用于获取周围环境3D点云测距的核心传感器是：",
    "options": [
      {
        "key": "A",
        "text": "摄像头"
      },
      {
        "key": "B",
        "text": "激光雷达（LiDAR）"
      },
      {
        "key": "C",
        "text": "毫米波雷达"
      },
      {
        "key": "D",
        "text": "超声波雷达"
      }
    ],
    "answer": "B",
    "explanation": "激光雷达通过激光测距获得三维点云，是自动驾驶获取空间几何结构的核心传感器。"
  },
  {
    "id": "MPR011",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 11,
    "type": "single",
    "question": "聚类流程的5个步骤顺序正确的是：",
    "options": [
      {
        "key": "A",
        "text": "选定特征 → 确定相似度 → 设定聚类准则 → 选择聚类算法 → 聚类结果评估"
      },
      {
        "key": "B",
        "text": "确定相似度 → 选定特征 → 设定聚类准则 → 选择聚类算法 → 聚类结果评估"
      },
      {
        "key": "C",
        "text": "选定特征 → 选择聚类算法 → 确定相似度 → 设定聚类准则 → 聚类结果评估"
      },
      {
        "key": "D",
        "text": "设定聚类准则 → 选定特征 → 确定相似度 → 选择聚类算法 → 聚类结果评估"
      }
    ],
    "answer": "A",
    "explanation": "聚类先明确用哪些特征，再定义相似度，然后设准则、选算法，最后才评价结果是否合理。"
  },
  {
    "id": "MPR012",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 12,
    "type": "single",
    "question": "关于聚类分析的根本局限性，下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "聚类结果绝对唯一，不受特征选择影响"
      },
      {
        "key": "B",
        "text": "聚类具有可逆性，合并后可以完全无损拆分"
      },
      {
        "key": "C",
        "text": "聚类极易陷入局部最优，且其操作过程是不可逆的"
      },
      {
        "key": "D",
        "text": "聚类必须基于类条件概率密度才能进行"
      }
    ],
    "answer": "C",
    "explanation": "聚类没有唯一标准，且许多合并/分裂操作会丢失原始细节；局部最优和不可逆是它的典型问题。"
  },
  {
    "id": "MPR013",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 13,
    "type": "single",
    "question": "在最近邻规则试探法聚类中，若圆的半径阈值 $T$ 设定过大，容易导致：",
    "options": [
      {
        "key": "A",
        "text": "产生大量仅包含单个样本的孤立小类"
      },
      {
        "key": "B",
        "text": "大量本不属于同类的样本被错误归为一类"
      },
      {
        "key": "C",
        "text": "算法无法收敛并死循环"
      },
      {
        "key": "D",
        "text": "聚类中心数量无限增加"
      }
    ],
    "answer": "B",
    "explanation": "阈值 T 太大，相当于圆半径太宽，很多距离较远、原本不相似的样本也会被并到一类。"
  },
  {
    "id": "MPR014",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 14,
    "type": "single",
    "question": "最近邻规则试探法最突出的不足之处是：",
    "options": [
      {
        "key": "A",
        "text": "计算复杂度呈指数级增长"
      },
      {
        "key": "B",
        "text": "结果极度依赖输入样本的先后顺序"
      },
      {
        "key": "C",
        "text": "无法处理在线增量学习"
      },
      {
        "key": "D",
        "text": "必须预先指定固定的类别数 $K$"
      }
    ],
    "answer": "B",
    "explanation": "最近邻试探法通常按样本输入顺序逐个处理，前面的归类会影响后面的结果，所以顺序敏感。"
  },
  {
    "id": "MPR015",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 15,
    "type": "single",
    "question": "层次聚类算法中的融合算法（Agglomerative）采用的是什么方向的构建策略？",
    "options": [
      {
        "key": "A",
        "text": "自顶向下"
      },
      {
        "key": "B",
        "text": "自底向上"
      },
      {
        "key": "C",
        "text": "动态随机调整"
      },
      {
        "key": "D",
        "text": "基于密度两极划分"
      }
    ],
    "answer": "B",
    "explanation": "融合层次聚类从每个样本单独成类开始，逐步把相似类合并，所以是自底向上。"
  },
  {
    "id": "MPR016",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 16,
    "type": "single",
    "question": "与融合算法相比，层次聚类的分解算法（Divisive）在计算量上的特点是：",
    "options": [
      {
        "key": "A",
        "text": "前期计算量巨大（需要考虑所有可能的拆分组合），后期快速下降"
      },
      {
        "key": "B",
        "text": "全程计算量平稳且极小"
      },
      {
        "key": "C",
        "text": "前期计算量极小，后期呈指数级上升"
      },
      {
        "key": "D",
        "text": "计算量与样本总数完全无关"
      }
    ],
    "answer": "A",
    "explanation": "分解法一开始要考虑把整体如何拆成子类，可能组合很多，所以前期计算量大，后面类变小后下降。"
  },
  {
    "id": "MPR017",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 17,
    "type": "single",
    "question": "K-Means（$K$均值）算法的优化核心是最小化准则函数 $E$，该函数代表：",
    "options": [
      {
        "key": "A",
        "text": "类间散布矩阵的特征值之和"
      },
      {
        "key": "B",
        "text": "每个样本到其所属类中心的距离平方和"
      },
      {
        "key": "C",
        "text": "各类别先验概率的熵"
      },
      {
        "key": "D",
        "text": "错分样本的加权错误率之和"
      }
    ],
    "answer": "B",
    "explanation": "K-Means每轮都在让样本离自己的类中心更近，其准则 E 就是类内距离平方和。"
  },
  {
    "id": "MPR018",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 18,
    "type": "single",
    "question": "在实际应用中，确定K-Means算法中 $K$ 值的经典定性/定量结合方法是：",
    "options": [
      {
        "key": "A",
        "text": "拉格朗日乘子法"
      },
      {
        "key": "B",
        "text": "肘部法则（Look for the elbow in E-k curve）"
      },
      {
        "key": "C",
        "text": "伪逆法"
      },
      {
        "key": "D",
        "text": "留一交叉验证法"
      }
    ],
    "answer": "B",
    "explanation": "肘部法看 E 随 K 增大下降的曲线，下降幅度明显变缓的位置就是较合理的 K。"
  },
  {
    "id": "MPR019",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 19,
    "type": "single",
    "question": "当K-Means算法达到收敛状态时，准则函数 $E$ 的变化情况是：",
    "options": [
      {
        "key": "A",
        "text": "持续剧烈震荡"
      },
      {
        "key": "B",
        "text": "保持线性增长"
      },
      {
        "key": "C",
        "text": "不再发生变化或变化量小于给定阈值"
      },
      {
        "key": "D",
        "text": "突变为零"
      }
    ],
    "answer": "C",
    "explanation": "收敛时样本分配和类中心基本稳定，准则函数 E 不再明显变化，继续迭代意义不大。"
  },
  {
    "id": "MPR020",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 20,
    "type": "single",
    "question": "ISODATA算法作为K-Means的升级版，其最核心的突破在于：",
    "options": [
      {
        "key": "A",
        "text": "能够将计算复杂度降低到 $O(1)$"
      },
      {
        "key": "B",
        "text": "可以在迭代过程中自动合并和分裂聚类中心"
      },
      {
        "key": "C",
        "text": "不需要计算任何距离度量"
      },
      {
        "key": "D",
        "text": "绝对不会陷入局部最优解"
      }
    ],
    "answer": "B",
    "explanation": "ISODATA比K-Means灵活，能根据类间距离和类内离散程度自动合并或分裂类中心。"
  },
  {
    "id": "MPR021",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 21,
    "type": "single",
    "question": "在ISODATA算法中，决定两个聚类中心是否应当执行“合并”操作的直接条件是：",
    "options": [
      {
        "key": "A",
        "text": "这两类包含的样本数完全相等"
      },
      {
        "key": "B",
        "text": "它们之间的距离小于预设的阈值 $\\theta_c$"
      },
      {
        "key": "C",
        "text": "某一类的类内标准差大于分裂阈值 $\\theta_s$"
      },
      {
        "key": "D",
        "text": "迭代次数达到了最大上限"
      }
    ],
    "answer": "B",
    "explanation": "ISODATA合并判断看两个中心是否过近；距离小于合并阈值 θc，就说明它们可能应合为一类。"
  },
  {
    "id": "MPR022",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 22,
    "type": "single",
    "question": "ISODATA合并两个旧中心后，新聚类中心的计算方式是：",
    "options": [
      {
        "key": "A",
        "text": "两个旧中心的简单算术平均"
      },
      {
        "key": "B",
        "text": "随机在两个旧中心之间取一点"
      },
      {
        "key": "C",
        "text": "依据各自包含样本数进行加权平均"
      },
      {
        "key": "D",
        "text": "选取包含样本数较少的那个旧中心的值"
      }
    ],
    "answer": "C",
    "explanation": "合并后的中心要考虑两类样本数量，样本多的一类对新中心影响更大，所以用加权平均。"
  },
  {
    "id": "MPR023",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 23,
    "type": "single",
    "question": "基于密度的聚类算法（如DBSCAN）的核心思想是：",
    "options": [
      {
        "key": "A",
        "text": "通过优化样本到类中心的几何距离来划分区域"
      },
      {
        "key": "B",
        "text": "一个点是核心点还是噪声，取决于它在 $\\varepsilon$ 半径邻域内的邻居数"
      },
      {
        "key": "C",
        "text": "假设数据完全服从多元正态分布"
      },
      {
        "key": "D",
        "text": "自底向上建立一棵复杂的聚类树"
      }
    ],
    "answer": "B",
    "explanation": "DBSCAN不追求中心点，而是看一个点附近密度够不够；邻域内点数达到阈值就可能形成簇。"
  },
  {
    "id": "MPR024",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 24,
    "type": "single",
    "question": "DBSCAN算法中，若一个点 $x_i$ 的 $\\varepsilon$ 邻域内包含的样本数大于或等于 $MinPts$，则该点被定义为：",
    "options": [
      {
        "key": "A",
        "text": "边界点"
      },
      {
        "key": "B",
        "text": "核心点（Core Point）"
      },
      {
        "key": "C",
        "text": "噪声点（Noise Point）"
      },
      {
        "key": "D",
        "text": "孤立点"
      }
    ],
    "answer": "B",
    "explanation": "ε 邻域内样本数达到 MinPts 的点就是核心点，它具备向周围扩展出密度簇的能力。"
  },
  {
    "id": "MPR025",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 25,
    "type": "single",
    "question": "相比于K-Means算法，DBSCAN算法最显著的优势是：",
    "options": [
      {
        "key": "A",
        "text": "需要人为指定更为复杂的 $K$ 值"
      },
      {
        "key": "B",
        "text": "对球形簇的聚类效果明显更好"
      },
      {
        "key": "C",
        "text": "能够自动识别并排除噪声点，且能发现任意形状的簇"
      },
      {
        "key": "D",
        "text": "内存消耗与样本数呈线性关系"
      }
    ],
    "answer": "C",
    "explanation": "K-Means偏爱球形簇且怕噪声；DBSCAN能识别噪声点，也能发现环形、弯曲等任意形状簇。"
  },
  {
    "id": "MPR026",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 26,
    "type": "single",
    "question": "下列距离度量公式中，代表曼哈顿距离（L1距离）的是：",
    "options": [
      {
        "key": "A",
        "text": "$d(x,y) = \\sqrt{\\sum (x_i - y_i)^2}$"
      },
      {
        "key": "B",
        "text": "$d(x,y) = \\sum |x_i - y_i|$"
      },
      {
        "key": "C",
        "text": "$d(x,y) = \\max |x_i - y_i|$"
      },
      {
        "key": "D",
        "text": "$d(x,y) = x^T \\Sigma^{-1} y$"
      }
    ],
    "answer": "B",
    "explanation": "曼哈顿距离就是各维度绝对差相加，像在城市网格中沿横竖街道走路，所以是 L1 距离。"
  },
  {
    "id": "MPR027",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 27,
    "type": "single",
    "question": "若要度量两个不同类别中心之间的离散程度，在模式识别中通常使用：",
    "options": [
      {
        "key": "A",
        "text": "类内散布矩阵 $S_w$"
      },
      {
        "key": "B",
        "text": "类间散布矩阵 $S_b$"
      },
      {
        "key": "C",
        "text": "总体散布矩阵 $S_t$"
      },
      {
        "key": "D",
        "text": "模糊矩阵"
      }
    ],
    "answer": "B",
    "explanation": "类间散布矩阵衡量不同类别中心之间分得有多开；类内散布矩阵才衡量同类内部是否紧凑。"
  },
  {
    "id": "MPR028",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 28,
    "type": "single",
    "question": "K-Means算法对下列哪种因素非常敏感，容易导致不同的运行结果？",
    "options": [
      {
        "key": "A",
        "text": "样本特征的物理意义"
      },
      {
        "key": "B",
        "text": "初始聚类中心的选择"
      },
      {
        "key": "C",
        "text": "数据的存储格式"
      },
      {
        "key": "D",
        "text": "是否进行了去中心化"
      }
    ],
    "answer": "B",
    "explanation": "K-Means初始中心不同，后续迭代路径不同，容易落到不同局部最优结果。"
  },
  {
    "id": "MPR029",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 29,
    "type": "single",
    "question": "下列关于聚类评估的说法，错误的是：",
    "options": [
      {
        "key": "A",
        "text": "聚类评估旨在判断分组是否合理"
      },
      {
        "key": "B",
        "text": "可以通过类内紧凑度和类间分离度进行评估"
      },
      {
        "key": "C",
        "text": "聚类评估由于没有绝对的真值标签，通常是完全主观的"
      },
      {
        "key": "D",
        "text": "好的聚类结果通常满足类内高相似、类间低相似"
      }
    ],
    "answer": "C",
    "explanation": "聚类虽然没有天然标签，但仍可用类内紧凑、类间分离、轮廓系数等指标评价，不是完全主观。"
  },
  {
    "id": "MPR030",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 30,
    "type": "single",
    "question": "若一个数据集包含明显的环形多层嵌套条带分布，首选的聚类算法是：",
    "options": [
      {
        "key": "A",
        "text": "K-Means"
      },
      {
        "key": "B",
        "text": "最近邻规则试探法"
      },
      {
        "key": "C",
        "text": "DBSCAN"
      },
      {
        "key": "D",
        "text": "ISODATA"
      }
    ],
    "answer": "C",
    "explanation": "环形嵌套不是球形簇，K-Means会切错；DBSCAN按密度连通性聚类，更适合这类形状。"
  },
  {
    "id": "MPR031",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 31,
    "type": "single",
    "question": "在层次聚类中，一旦两个子类被合并，后续步骤将无法将它们重新拆分，这体现了层次聚类的：",
    "options": [
      {
        "key": "A",
        "text": "高效性"
      },
      {
        "key": "B",
        "text": "健壮性"
      },
      {
        "key": "C",
        "text": "不可逆性"
      },
      {
        "key": "D",
        "text": "收敛性"
      }
    ],
    "answer": "C",
    "explanation": "层次聚类一旦合并就不会再反悔拆开，这种历史决定后续结果的特点就是不可逆。"
  },
  {
    "id": "MPR032",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 32,
    "type": "single",
    "question": "DBSCAN算法中，低于 $MinPts$ 且不落在任何核心点邻域内的点会被标记为：",
    "options": [
      {
        "key": "A",
        "text": "核心点"
      },
      {
        "key": "B",
        "text": "噪声点"
      },
      {
        "key": "C",
        "text": "聚类中心"
      },
      {
        "key": "D",
        "text": "边界点"
      }
    ],
    "answer": "B",
    "explanation": "既不是核心点，又不在任何核心点邻域内，说明它无法被密度簇吸收，因此被标为噪声点。"
  },
  {
    "id": "MPR033",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 33,
    "type": "single",
    "question": "在K-Means迭代过程中，当所有样本的类别分配均不再发生任何改变时，算法：",
    "options": [
      {
        "key": "A",
        "text": "进入死循环"
      },
      {
        "key": "B",
        "text": "达到收敛，停止迭代"
      },
      {
        "key": "C",
        "text": "触发分裂机制"
      },
      {
        "key": "D",
        "text": "必须重新初始化"
      }
    ],
    "answer": "B",
    "explanation": "样本类别分配不再变化，类中心也会稳定，说明K-Means已经达到收敛条件。"
  },
  {
    "id": "MPR034",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 34,
    "type": "single",
    "question": "聚类准则设定的核心作用是：",
    "options": [
      {
        "key": "A",
        "text": "决定原始数据的特征如何提取"
      },
      {
        "key": "B",
        "text": "定义什么是“相似”，从而决定聚类结果的走向与停止条件"
      },
      {
        "key": "C",
        "text": "自动为每个样本分配唯一的文本标签"
      },
      {
        "key": "D",
        "text": "降低原始数据的维度"
      }
    ],
    "answer": "B",
    "explanation": "聚类准则定义了什么叫“好聚类”：类内多近、类间多远，以及何时停止迭代。"
  },
  {
    "id": "MPR035",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 35,
    "type": "single",
    "question": "在没有先验类别知识的前提下，客户细分（价值分群）应当采用哪类算法？",
    "options": [
      {
        "key": "A",
        "text": "支持向量机"
      },
      {
        "key": "B",
        "text": "贝叶斯分类器"
      },
      {
        "key": "C",
        "text": "聚类算法"
      },
      {
        "key": "D",
        "text": "线性判别分析"
      }
    ],
    "answer": "C",
    "explanation": "客户细分事先没有类别标签，目标是自动发现人群结构，所以属于无监督聚类问题。"
  },
  {
    "id": "MPR036",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 36,
    "type": "single",
    "question": "贝叶斯决策理论的核心是用概率语言回答：",
    "options": [
      {
        "key": "A",
        "text": "给定观测数据 $x$，它属于某一类的后验概率是多少"
      },
      {
        "key": "B",
        "text": "样本在物理空间中的几何距离是多少"
      },
      {
        "key": "C",
        "text": "弱分类器在第 $t$ 轮的错误率是多少"
      },
      {
        "key": "D",
        "text": "投影矩阵的最优特征向量是什么"
      }
    ],
    "answer": "A",
    "explanation": "贝叶斯决策的核心就是观测到 x 以后，比较它属于各类别的后验概率，再按概率或风险决策。"
  },
  {
    "id": "MPR037",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 37,
    "type": "single",
    "question": "在贝叶斯公式 $P(\\omega_i|x) = \\frac{p(x|\\omega_i)P(\\omega_i)}{p(x)}$ 中，符合 $p(x|\\omega_i)$ 表达的含义是：",
    "options": [
      {
        "key": "A",
        "text": "先验概率（未观测样本前，某类别占总人群的比例）"
      },
      {
        "key": "B",
        "text": "后验概率（观测到样本 $x$ 后，它属于 $\\omega_i$ 类的概率）"
      },
      {
        "key": "C",
        "text": "类条件概率密度（已知类别为 $\\omega_i$ 的前提下，观测到特征 $x$ 的概率密度）"
      },
      {
        "key": "D",
        "text": "特征全概率（特征空间中产生 $x$ 的总概率）"
      }
    ],
    "answer": "C",
    "explanation": "p(x|ωi) 是在类别已知为 ωi 的条件下出现观测 x 的概率密度，也叫类条件概率密度。"
  },
  {
    "id": "MPR038",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 38,
    "type": "single",
    "question": "若已知人群中正常人和某种疾病患者的先验比例为 $P(\\omega_1) = 0.9, P(\\omega_2) = 0.1$，某项检测的类条件概率为 $p(x|\\omega_1) = 0.2, p(x|\\omega_2) = 0.4$，则根据最小错误率贝叶斯决策，观测到特征 $x$ 的样本应分类为：",
    "options": [
      {
        "key": "A",
        "text": "异常（$\\omega_2$）"
      },
      {
        "key": "B",
        "text": "正常（$\\omega_1$）"
      },
      {
        "key": "C",
        "text": "无法判断"
      },
      {
        "key": "D",
        "text": "同时属于两类"
      }
    ],
    "answer": "B",
    "explanation": "比较 p(x|ω)P(ω)：正常为0.2×0.9=0.18，异常为0.4×0.1=0.04，正常后验更大。"
  },
  {
    "id": "MPR039",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 39,
    "type": "single",
    "question": "最大后验概率（MAP）决策等价于哪一个贝叶斯决策准则？",
    "options": [
      {
        "key": "A",
        "text": "最小风险贝叶斯决策（当损失函数为0-1损失时）"
      },
      {
        "key": "B",
        "text": "最小方差估计"
      },
      {
        "key": "C",
        "text": "最大似然估计"
      },
      {
        "key": "D",
        "text": "最小类内散布准则"
      }
    ],
    "answer": "A",
    "explanation": "0-1损失下，风险最小等价于错误率最小，也等价于选择后验概率最大的类别。"
  },
  {
    "id": "MPR040",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 40,
    "type": "single",
    "question": "设计二分类贝叶斯分类器时，若定义判别函数 $g(x) = P(\\omega_1|x) - P(\\omega_2|x)$，则决策规则为：",
    "options": [
      {
        "key": "A",
        "text": "若 $g(x) < 0$，则 $x \\in \\omega_1$"
      },
      {
        "key": "B",
        "text": "若 $g(x) > 0$，则 $x \\in \\omega_1$"
      },
      {
        "key": "C",
        "text": "若 $g(x) = 0$，则 $x \\in \\omega_1$"
      },
      {
        "key": "D",
        "text": "无论 $g(x)$ 为何值均判定为 $\\omega_2$"
      }
    ],
    "answer": "B",
    "explanation": "g(x)=P(ω1|x)-P(ω2|x)。若 g(x)>0，说明 ω1 的后验概率更大，应判为 ω1。"
  },
  {
    "id": "MPR041",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 41,
    "type": "single",
    "question": "极大似然估计（MLE）的核心思想是：",
    "options": [
      {
        "key": "A",
        "text": "寻找一组参数，使得已发生的训练样本观测数据的联合概率（似然函数）最大"
      },
      {
        "key": "B",
        "text": "最小化所有类别的后验风险"
      },
      {
        "key": "C",
        "text": "寻找方差最大的方向进行投影降维"
      },
      {
        "key": "D",
        "text": "引入松弛变量来处理线性不可分数据"
      }
    ],
    "answer": "A",
    "explanation": "MLE不是先猜参数，而是找一组参数，让已经观察到的训练样本出现概率最大。"
  },
  {
    "id": "MPR042",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 42,
    "type": "single",
    "question": "多元正态分布参数化模型中，描述各个维度之间相关性的参数是：",
    "options": [
      {
        "key": "A",
        "text": "均值向量 $\\mu_i$"
      },
      {
        "key": "B",
        "text": "权重系数 $P_j$"
      },
      {
        "key": "C",
        "text": "协方差矩阵 $\\Sigma_i$"
      },
      {
        "key": "D",
        "text": "判别函数 $g(x)$"
      }
    ],
    "answer": "C",
    "explanation": "协方差矩阵不仅记录每个维度方差，也记录不同维度之间的相关性。"
  },
  {
    "id": "MPR043",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 43,
    "type": "single",
    "question": "高斯混合模型（GMM）的基本出发点是：",
    "options": [
      {
        "key": "A",
        "text": "抛弃一切概率模型，改用超平面分割"
      },
      {
        "key": "B",
        "text": "用多个高斯分布的加权线性组合来逼近并拟合任意复杂的连续概率密度分布"
      },
      {
        "key": "C",
        "text": "假定所有特征变量之间都严格独立"
      },
      {
        "key": "D",
        "text": "串行组合多个弱分类器"
      }
    ],
    "answer": "B",
    "explanation": "GMM用多个高斯分布按权重叠加，能逼近单个高斯无法表达的复杂连续分布。"
  },
  {
    "id": "MPR044",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 44,
    "type": "single",
    "question": "在朴素贝叶斯分类器（Naive Bayes）中，“朴素”一词的根本含义是指：",
    "options": [
      {
        "key": "A",
        "text": "假设所有类别的先验概率完全相等"
      },
      {
        "key": "B",
        "text": "假设数据集没有任何噪声"
      },
      {
        "key": "C",
        "text": "强行假设样本的各个属性/特征之间在给定类别时是条件独立的"
      },
      {
        "key": "D",
        "text": "分类器结构非常简单，不需要进行任何参数学习"
      }
    ],
    "answer": "C",
    "explanation": "“朴素”不是说模型幼稚，而是做了很强的条件独立假设：给定类别后，各特征互不影响。"
  },
  {
    "id": "MPR045",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 45,
    "type": "single",
    "question": "朴素贝叶斯分类器引入“属性条件独立性假设”带来的直接技术优势是：",
    "options": [
      {
        "key": "A",
        "text": "极大地提高了模型的非线性表达能力"
      },
      {
        "key": "B",
        "text": "将高维联合概率密度的估计拆解为多个一维单概率密度的乘积，彻底简化了计算"
      },
      {
        "key": "C",
        "text": "能够自动完成特征提取工作"
      },
      {
        "key": "D",
        "text": "保证分类错误率绝对为零"
      }
    ],
    "answer": "B",
    "explanation": "独立假设把高维联合概率拆成多个一维概率相乘，极大降低了参数估计和计算难度。"
  },
  {
    "id": "MPR046",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 46,
    "type": "single",
    "question": "贝叶斯决策理论中，引入“损失函数（Loss Function）”的目的是为了处理：",
    "options": [
      {
        "key": "A",
        "text": "最小错误率决策"
      },
      {
        "key": "B",
        "text": "最小风险决策（考虑不同错误分类带来的代价差异）"
      },
      {
        "key": "C",
        "text": "特征提取中的维数灾难"
      },
      {
        "key": "D",
        "text": "过拟合问题"
      }
    ],
    "answer": "B",
    "explanation": "不同错误的代价可能不同，比如漏诊比误报严重；损失函数就是把这种代价写进决策。"
  },
  {
    "id": "MPR047",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 47,
    "type": "single",
    "question": "全概率公式在贝叶斯决策中主要用于计算分母，即特征全概率 $p(x)$，其公式形式为：",
    "options": [
      {
        "key": "A",
        "text": "$p(x) = \\sum_{j=1}^c p(x|\\omega_j)$"
      },
      {
        "key": "B",
        "text": "$p(x) = \\sum_{j=1}^c P(\\omega_j)$"
      },
      {
        "key": "C",
        "text": "$p(x) = \\sum_{j=1}^c p(x|\\omega_j)P(\\omega_j)$"
      },
      {
        "key": "D",
        "text": "$p(x) = \\prod_{j=1}^c p(x|\\omega_j)P(\\omega_j)$"
      }
    ],
    "answer": "C",
    "explanation": "全概率 p(x) 要把所有类别产生 x 的可能性加起来，即每类似然乘先验后求和。"
  },
  {
    "id": "MPR048",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 48,
    "type": "single",
    "question": "当各类别的先验概率 $P(\\omega_i)$ 完全相等，且各类的类条件概率密度均呈方差相同的正态分布时，最小错误率贝叶斯边界是：",
    "options": [
      {
        "key": "A",
        "text": "复杂的超球面"
      },
      {
        "key": "B",
        "text": "线性判定面（超平面）"
      },
      {
        "key": "C",
        "text": "抛物面"
      },
      {
        "key": "D",
        "text": "阶跃函数"
      }
    ],
    "answer": "B",
    "explanation": "先验相等且方差相同的正态类会抵消二次项，判别函数只剩线性项，所以边界是超平面。"
  },
  {
    "id": "MPR049",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 49,
    "type": "single",
    "question": "在手算朴素贝叶斯分类器时，如果某个离散特征值在训练集中未曾出现过，导致条件概率为0，通常采用什么技术进行平滑修正？",
    "options": [
      {
        "key": "A",
        "text": "极大似然估计"
      },
      {
        "key": "B",
        "text": "拉普拉斯修正（Laplace Correction / 加1平滑）"
      },
      {
        "key": "C",
        "text": "主成分分析"
      },
      {
        "key": "D",
        "text": "伪逆法"
      }
    ],
    "answer": "B",
    "explanation": "离散特征某取值没出现会让概率为0，乘积直接归零；拉普拉斯加1平滑可避免零概率。"
  },
  {
    "id": "MPR050",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 50,
    "type": "single",
    "question": "最大后验概率（MAP）与最大似然估计（MLE）的主要区别在于，MAP考虑了：",
    "options": [
      {
        "key": "A",
        "text": "样本的几何特征"
      },
      {
        "key": "B",
        "text": "类别的先验概率分布"
      },
      {
        "key": "C",
        "text": "错分样本的动态权重"
      },
      {
        "key": "D",
        "text": "核函数的映射"
      }
    ],
    "answer": "B",
    "explanation": "MLE只看样本似然，MAP在似然之外还乘上先验，因此会把类别或参数的先验信息考虑进去。"
  },
  {
    "id": "MPR051",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 51,
    "type": "single",
    "question": "多元正态分布特征密度函数的指数项中，计算样本点到均值向量的距离被称为：",
    "options": [
      {
        "key": "A",
        "text": "欧氏距离"
      },
      {
        "key": "B",
        "text": "马氏距离"
      },
      {
        "key": "C",
        "text": "切比雪夫距离"
      },
      {
        "key": "D",
        "text": "闵可夫斯基距离"
      }
    ],
    "answer": "B",
    "explanation": "多元高斯指数项中的距离考虑协方差结构和尺度差异，这就是马氏距离。"
  },
  {
    "id": "MPR052",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 52,
    "type": "single",
    "question": "贝叶斯分类器的根本技术弱点在于：",
    "options": [
      {
        "key": "A",
        "text": "缺乏坚实的数学理论支持"
      },
      {
        "key": "B",
        "text": "无法处理二分类问题"
      },
      {
        "key": "C",
        "text": "极度依赖并假定已知或能准确估计数据的概率分布"
      },
      {
        "key": "D",
        "text": "计算速度在所有分类算法中是最慢的"
      }
    ],
    "answer": "C",
    "explanation": "贝叶斯方法强依赖先验和类条件概率密度估计；分布估不准，分类器就容易失真。"
  },
  {
    "id": "MPR053",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 53,
    "type": "single",
    "question": "在贝叶斯风险决策中，若把正确分类的损失设为0，错误分类的损失设为相同正值，则最小风险决策退化为：",
    "options": [
      {
        "key": "A",
        "text": "最小方差决策"
      },
      {
        "key": "B",
        "text": "最小错误率决策"
      },
      {
        "key": "C",
        "text": "最大似然决策"
      },
      {
        "key": "D",
        "text": "判别函数平方和最小决策"
      }
    ],
    "answer": "B",
    "explanation": "正确损失为0、所有错误损失相同，此时最小风险只是在减少犯错概率，即最小错误率。"
  },
  {
    "id": "MPR054",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 54,
    "type": "single",
    "question": "在正态分布假设下，若各类的协方差矩阵不相等（$\\Sigma_i \\ne \\Sigma_j$），则贝叶斯判定边界一般是：",
    "options": [
      {
        "key": "A",
        "text": "直线或超平面"
      },
      {
        "key": "B",
        "text": "二次或高次判定曲面"
      },
      {
        "key": "C",
        "text": "离散点集"
      },
      {
        "key": "D",
        "text": "平行于坐标轴的矩形"
      }
    ],
    "answer": "B",
    "explanation": "协方差矩阵不相等时，判别函数中的二次项不能抵消，边界一般变成二次曲面。"
  },
  {
    "id": "MPR055",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 55,
    "type": "single",
    "question": "贝叶斯公式中，起到将“已有先验知识”和“新观测到的证据”有机结合起来的纽带是：",
    "options": [
      {
        "key": "A",
        "text": "后验概率"
      },
      {
        "key": "B",
        "text": "散布矩阵"
      },
      {
        "key": "C",
        "text": "松弛变量"
      },
      {
        "key": "D",
        "text": "准则函数"
      }
    ],
    "answer": "A",
    "explanation": "后验概率把先验 P(ω) 和新证据 p(x|ω) 结合起来，是贝叶斯更新后的最终判断依据。"
  },
  {
    "id": "MPR056",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 56,
    "type": "single",
    "question": "支持向量机（SVM）的核心思想与贝叶斯完全不同，它在特征空间中追求的是：",
    "options": [
      {
        "key": "A",
        "text": "拟合出精确的特征条件概率密度分布"
      },
      {
        "key": "B",
        "text": "寻找一条离两边数据几何边缘都尽可能远的“最优分割面”（最大化间隔）"
      },
      {
        "key": "C",
        "text": "通过串行学习逐步修正错分样本的权重"
      },
      {
        "key": "D",
        "text": "使得类内散布矩阵和类间散布矩阵的比值最大"
      }
    ],
    "answer": "B",
    "explanation": "SVM不先估计概率分布，而是在几何上找最大间隔超平面，让边界离两类样本都尽量远。"
  },
  {
    "id": "MPR057",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 57,
    "type": "single",
    "question": "在硬间隔支持向量机的标准数学优化问题中，其最终的优化目标可以量化转化为：",
    "options": [
      {
        "key": "A",
        "text": "$\\max \\|w\\|$"
      },
      {
        "key": "B",
        "text": "$\\min \\frac{1}{2}\\|w\\|^2$"
      },
      {
        "key": "C",
        "text": "$\\min \\sum \\xi_i$"
      },
      {
        "key": "D",
        "text": "$\\max w^T x + b$"
      }
    ],
    "answer": "B",
    "explanation": "最大化间隔等价于最小化权重范数，标准形式写成 min 1/2||w||²，便于凸优化求解。"
  },
  {
    "id": "MPR058",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 58,
    "type": "single",
    "question": "硬间隔支持向量机要求所有训练样本必须严格满足的约束条件是：",
    "options": [
      {
        "key": "A",
        "text": "$y_i(w^T x_i + b) \\ge 1$"
      },
      {
        "key": "B",
        "text": "$y_i(w^T x_i + b) \\le 0$"
      },
      {
        "key": "C",
        "text": "$\\sum \\alpha_i = 0$"
      },
      {
        "key": "D",
        "text": "$w^T x_i + b = 0$"
      }
    ],
    "answer": "A",
    "explanation": "硬间隔要求每个样本都被正确分到间隔之外，所以约束为 y_i(w^T x_i+b)≥1。"
  },
  {
    "id": "MPR059",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 59,
    "type": "single",
    "question": "现实中当训练数据线性不可分或者存在噪声时，支持向量机引入了什么机制来构建“软间隔（Soft Margin）”？",
    "options": [
      {
        "key": "A",
        "text": "类条件独立性假设"
      },
      {
        "key": "B",
        "text": "松弛变量 $\\xi_i$ 与惩罚因子 $C$（Hinge Loss）"
      },
      {
        "key": "C",
        "text": "串行弱分类器投票"
      },
      {
        "key": "D",
        "text": "协方差矩阵特征值分解"
      }
    ],
    "answer": "B",
    "explanation": "软间隔允许少量样本违反约束，用松弛变量 ξi 表示违反程度，用 C 控制惩罚强度。"
  },
  {
    "id": "MPR060",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 60,
    "type": "single",
    "question": "软间隔支持向量机优化目标中，参数 $C$（惩罚因子）的作用是：",
    "options": [
      {
        "key": "A",
        "text": "控制投影后特征空间的实际维度"
      },
      {
        "key": "B",
        "text": "调节“最大化几何间隔”与“减少错分样本（违反约束的程度）”之间的折中平衡"
      },
      {
        "key": "C",
        "text": "设定核函数的最高阶数"
      },
      {
        "key": "D",
        "text": "决定最近邻搜索的半径圆大小"
      }
    ],
    "answer": "B",
    "explanation": "C 大更重视训练错误，C 小更重视大间隔和泛化，它控制“拟合训练集”和“容忍错误”的平衡。"
  },
  {
    "id": "MPR061",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 61,
    "type": "single",
    "question": "支持向量机中，决定最终分类超平面边界的样本是：",
    "options": [
      {
        "key": "A",
        "text": "所有的训练集样本"
      },
      {
        "key": "B",
        "text": "远离判定边界的极值样本"
      },
      {
        "key": "C",
        "text": "落在间隔边界上或之内的“支持向量（Support Vectors）”"
      },
      {
        "key": "D",
        "text": "被噪声严重污染的离群点"
      }
    ],
    "answer": "C",
    "explanation": "最终超平面主要由离边界最近的支持向量决定，远离边界的普通样本通常不起决定作用。"
  },
  {
    "id": "MPR062",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 62,
    "type": "single",
    "question": "当面对非线性分类问题时，Kernel SVM（核支持向量机）利用核技巧实现了：",
    "options": [
      {
        "key": "A",
        "text": "自动抛弃非线性特征，只保留线性特征"
      },
      {
        "key": "B",
        "text": "将弱分类器串行集成起来提升性能"
      },
      {
        "key": "C",
        "text": "在低维空间中直接计算高维映射后的内积，从而高效解决非线性可分问题"
      },
      {
        "key": "D",
        "text": "动态更新训练样本的概率密度函数"
      }
    ],
    "answer": "C",
    "explanation": "核技巧不显式计算高维坐标，而是直接算映射后的内积，从而高效处理非线性分类。"
  },
  {
    "id": "MPR063",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 63,
    "type": "single",
    "question": "感知器算法（Perceptron）的核心优化路线是：",
    "options": [
      {
        "key": "A",
        "text": "利用广义特征值分解求解逆矩阵"
      },
      {
        "key": "B",
        "text": "直接定义判别函数 $g(x) = w^T x + b$，利用梯度下降迭代修正错分样本的权重向量"
      },
      {
        "key": "C",
        "text": "自顶向下构建复杂的规则树"
      },
      {
        "key": "D",
        "text": "计算样本到中心的平方和准则"
      }
    ],
    "answer": "B",
    "explanation": "感知器用线性判别函数，对错分样本按梯度方向更新 w 和 b，直到尽量把样本分开。"
  },
  {
    "id": "MPR064",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 64,
    "type": "single",
    "question": "关于感知器算法的收敛性，下列结论绝对正确的是：",
    "options": [
      {
        "key": "A",
        "text": "无论数据分布如何，感知器算法均能在有限步内完美收敛"
      },
      {
        "key": "B",
        "text": "当且仅当训练样本数据是线性可分时，感知器算法保证收敛"
      },
      {
        "key": "C",
        "text": "数据线性不可分时，感知器依然能收敛到全局最优解"
      },
      {
        "key": "D",
        "text": "感知器的收敛速度完全取决于类别先验概率"
      }
    ],
    "answer": "B",
    "explanation": "感知器收敛定理只在线性可分数据上成立；线性不可分时会反复震荡，无法保证收敛。"
  },
  {
    "id": "MPR065",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 65,
    "type": "single",
    "question": "当数据被证实为线性不可分、导致感知器无法收敛时，通常可以改用什么方法来求解线性判别函数？",
    "options": [
      {
        "key": "A",
        "text": "最小平方误差判别（MSE，利用伪逆法或梯度下降求解）"
      },
      {
        "key": "B",
        "text": "肘部法则"
      },
      {
        "key": "C",
        "text": "极大似然估计"
      },
      {
        "key": "D",
        "text": "层次分解算法"
      }
    ],
    "answer": "A",
    "explanation": "MSE把分类问题改写成最小化平方误差，可用伪逆或梯度下降，即便不可分也能给出近似解。"
  },
  {
    "id": "MPR066",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 66,
    "type": "single",
    "question": "在线性判别函数中，若样本被正确分类，则感知器准则函数 $J_p(w)$ 的值应当：",
    "options": [
      {
        "key": "A",
        "text": "趋于无穷大"
      },
      {
        "key": "B",
        "text": "等于零（因为错分样本集为空）"
      },
      {
        "key": "C",
        "text": "持续线性增长"
      },
      {
        "key": "D",
        "text": "变为负数"
      }
    ],
    "answer": "B",
    "explanation": "感知器准则只对错分样本计入损失。若没有错分样本，错分集为空，准则值为0。"
  },
  {
    "id": "MPR067",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 67,
    "type": "single",
    "question": "为了解决多分类问题，将所有类别两两配对训练 $\\frac{c(c-1)}{2}$ 个分类器的SVM扩展策略被称为：",
    "options": [
      {
        "key": "A",
        "text": "OVR（一对多，One-vs-Rest）"
      },
      {
        "key": "B",
        "text": "OVO（一对一，One-vs-One）"
      },
      {
        "key": "C",
        "text": "直接多分类策略"
      },
      {
        "key": "D",
        "text": "层次树状分类"
      }
    ],
    "answer": "B",
    "explanation": "一对一策略把 c 个类别两两组合，每对训练一个分类器，所以数量是 c(c-1)/2。"
  },
  {
    "id": "MPR068",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 68,
    "type": "single",
    "question": "支持向量机（SVM）中，若选用高斯核函数（RBF），其潜在的作用是将特征映射到：",
    "options": [
      {
        "key": "A",
        "text": "零维空间"
      },
      {
        "key": "B",
        "text": "保持原始低维空间不变"
      },
      {
        "key": "C",
        "text": "无穷维空间"
      },
      {
        "key": "D",
        "text": "二维平面"
      }
    ],
    "answer": "C",
    "explanation": "RBF高斯核对应一种无限维特征映射，使原空间非线性问题可能在高维空间线性可分。"
  },
  {
    "id": "MPR069",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 69,
    "type": "single",
    "question": "感知器算法是一种什么样的学习方法？",
    "options": [
      {
        "key": "A",
        "text": "增量式/在线学习算法（每次用错分样本更新）"
      },
      {
        "key": "B",
        "text": "批量全局矩阵分解算法"
      },
      {
        "key": "C",
        "text": "无监督聚类算法"
      },
      {
        "key": "D",
        "text": "非参数化密度估计算法"
      }
    ],
    "answer": "A",
    "explanation": "感知器每次发现错分样本就更新一次权重，符合增量式/在线学习的特点。"
  },
  {
    "id": "MPR070",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 70,
    "type": "single",
    "question": "线性判别函数 $g(x) = w^T x + b = 0$ 几何上代表特征空间中的：",
    "options": [
      {
        "key": "A",
        "text": "一个弯曲的超曲面"
      },
      {
        "key": "B",
        "text": "超平面（Decision Hyperplane）"
      },
      {
        "key": "C",
        "text": "一个闭合的超球面"
      },
      {
        "key": "D",
        "text": "散点集合"
      }
    ],
    "answer": "B",
    "explanation": "w^T x+b=0 是线性方程，在二维中是直线，在高维中就是超平面。"
  },
  {
    "id": "MPR071",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 71,
    "type": "single",
    "question": "在最小平方误差判别（MSE）中，利用伪逆法求解权重向量 $w$ 的核心公式涉及到：",
    "options": [
      {
        "key": "A",
        "text": "广义特征值分解"
      },
      {
        "key": "B",
        "text": "伪逆矩阵 $X^{\\dagger} = (X^T X)^{-1} X^T$ 的计算"
      },
      {
        "key": "C",
        "text": "核函数的内积映射"
      },
      {
        "key": "D",
        "text": "概率密度的乘积"
      }
    ],
    "answer": "B",
    "explanation": "MSE闭式解依赖伪逆矩阵，常见形式是 X†=(X^T X)^(-1)X^T。"
  },
  {
    "id": "MPR072",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 72,
    "type": "single",
    "question": "SVM中的“硬间隔”和“软间隔”最本质的区别在于：",
    "options": [
      {
        "key": "A",
        "text": "是否允许训练样本在一定程度上违反边际约束"
      },
      {
        "key": "B",
        "text": "是否使用了高维非线性核函数"
      },
      {
        "key": "C",
        "text": "优化目标是最小化方差还是最大化方差"
      },
      {
        "key": "D",
        "text": "分类器属于有监督还是无监督学习"
      }
    ],
    "answer": "A",
    "explanation": "硬间隔不允许任何训练点违反边界约束；软间隔允许一定违反，并用惩罚项控制。"
  },
  {
    "id": "MPR073",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 73,
    "type": "single",
    "question": "如果SVM模型在训练集上达到了100%的准确率，但在测试集上表现极差，应当如何调整惩罚参数 $C$？",
    "options": [
      {
        "key": "A",
        "text": "继续无限增大 $C$"
      },
      {
        "key": "B",
        "text": "适当减小 $C$，允许一定的训练误差以增强泛化能力"
      },
      {
        "key": "C",
        "text": "将 $C$ 设为0"
      },
      {
        "key": "D",
        "text": "变换为硬间隔模型"
      }
    ],
    "answer": "B",
    "explanation": "训练集100%但测试差通常是过拟合。减小 C 可以降低对训练错误的执着，增强泛化。"
  },
  {
    "id": "MPR074",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 74,
    "type": "single",
    "question": "支持向量机（SVM）的数学基础来源于：",
    "options": [
      {
        "key": "A",
        "text": "统计学习理论与凸优化理论"
      },
      {
        "key": "B",
        "text": "全概率公式与马尔可夫链"
      },
      {
        "key": "C",
        "text": "模糊数学与图论"
      },
      {
        "key": "D",
        "text": "仿生学与集成进化理论"
      }
    ],
    "answer": "A",
    "explanation": "SVM建立在统计学习理论、最大间隔思想和凸优化/对偶问题求解基础上。"
  },
  {
    "id": "MPR075",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别函数与支持向量机",
    "number": 75,
    "type": "single",
    "question": "感知器算法中，权重更新的方向是沿着准则函数的：",
    "options": [
      {
        "key": "A",
        "text": "梯度正方向"
      },
      {
        "key": "B",
        "text": "负梯度方向（即梯度下降法）"
      },
      {
        "key": "C",
        "text": "正交切线方向"
      },
      {
        "key": "D",
        "text": "随机扰动方向"
      }
    ],
    "answer": "B",
    "explanation": "感知器用梯度下降最小化准则函数，因此权重沿负梯度方向更新。"
  },
  {
    "id": "MPR076",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 76,
    "type": "single",
    "question": "提升学习（Boosting）方法的核心内在逻辑是：",
    "options": [
      {
        "key": "A",
        "text": "让多个完全独立的分类器同时并行计算，最后取平均"
      },
      {
        "key": "B",
        "text": "串行组合多个弱分类器，每轮重点关注并加大前一轮被错分样本的权重"
      },
      {
        "key": "C",
        "text": "自动抛弃表现不好的特征，实现特征选择"
      },
      {
        "key": "D",
        "text": "自底向上将样本逐步合并成一棵大的聚类树"
      }
    ],
    "answer": "B",
    "explanation": "Boosting是串行训练弱分类器，后面的分类器重点处理前面错分的样本。"
  },
  {
    "id": "MPR077",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 77,
    "type": "single",
    "question": "下列关于Boosting方法特点的说法中，错误的是：",
    "options": [
      {
        "key": "A",
        "text": "个体学习器之间存在强依赖关系，必须串行学习"
      },
      {
        "key": "B",
        "text": "每一轮集成后的强分类器性能通常都比前一轮更好"
      },
      {
        "key": "C",
        "text": "新增加的个体学习器重点关注被正确分类的样本"
      },
      {
        "key": "D",
        "text": "个体学习器之间是非独立的"
      }
    ],
    "answer": "C",
    "explanation": "Boosting会提高错分样本权重，而不是重点关注已正确分类的样本；C把方向说反了。"
  },
  {
    "id": "MPR078",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 78,
    "type": "single",
    "question": "在经典的AdaBoost算法中，第 $t$ 轮基分类器的投票权重 $\\alpha_t$ 的计算公式为：",
    "options": [
      {
        "key": "A",
        "text": "$\\alpha_t = \\frac{1}{2} \\ln \\frac{1 - \\varepsilon_t}{\\varepsilon_t}$"
      },
      {
        "key": "B",
        "text": "$\\alpha_t = \\ln \\frac{\\varepsilon_t}{1 - \\varepsilon_t}$"
      },
      {
        "key": "C",
        "text": "$\\alpha_t = \\sqrt{1 - \\varepsilon_t}$"
      },
      {
        "key": "D",
        "text": "$\\alpha_t = \\frac{1}{\\varepsilon_t}$"
      }
    ],
    "answer": "A",
    "explanation": "AdaBoost弱分类器权重由错误率决定，错误率越低权重越大，公式为 1/2 ln((1-ε)/ε)。"
  },
  {
    "id": "MPR079",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 79,
    "type": "single",
    "question": "在AdaBoost权重计算实例中，若第3轮分类器的错误率 $\\varepsilon_3 = 0.17$，则其计算出的投票权重 $\\alpha_3$ 约为：",
    "options": [
      {
        "key": "A",
        "text": "0.17"
      },
      {
        "key": "B",
        "text": "0.50"
      },
      {
        "key": "C",
        "text": "0.793"
      },
      {
        "key": "D",
        "text": "1.25"
      }
    ],
    "answer": "C",
    "explanation": "代入公式：α=0.5×ln((1-0.17)/0.17)=0.5×ln(4.882)≈0.793。"
  },
  {
    "id": "MPR080",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 80,
    "type": "single",
    "question": "根据AdaBoost算法，如果一个弱分类器的分类错误率 $\\varepsilon_t > 0.5$，通常意味着：",
    "options": [
      {
        "key": "A",
        "text": "该分类器极其优秀，应该赋予极高权重"
      },
      {
        "key": "B",
        "text": "它的表现甚至不如随机猜测，需要进行取反或重新训练"
      },
      {
        "key": "C",
        "text": "算法直接完美收敛停止"
      },
      {
        "key": "D",
        "text": "样本权重需要重置为均匀分布"
      }
    ],
    "answer": "B",
    "explanation": "二分类中随机猜测错误率约0.5，若弱分类器大于0.5，说明比乱猜还差，应取反或重训。"
  },
  {
    "id": "MPR081",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 81,
    "type": "single",
    "question": "AdaBoost最终强分类器的输出形式是通过以下哪种方式产生的？",
    "options": [
      {
        "key": "A",
        "text": "所有弱分类器输出结果的简单不加权算术平均"
      },
      {
        "key": "B",
        "text": "剔除所有错误率高的分类器，只保留最后训练的那一个"
      },
      {
        "key": "C",
        "text": "各弱分类器基于其投票权重 $\\alpha_t$ 进行加权多数表决"
      },
      {
        "key": "D",
        "text": "随机抽取一个弱分类器的输出作为最终结果"
      }
    ],
    "answer": "C",
    "explanation": "最终强分类器不是简单平均，而是按每个弱分类器的 α 权重进行加权投票。"
  },
  {
    "id": "MPR082",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 82,
    "type": "single",
    "question": "Bagging方法与Boosting方法在个体学习器生成机制上的根本区别是：",
    "options": [
      {
        "key": "A",
        "text": "Bagging是有监督学习，Boosting是无监督学习"
      },
      {
        "key": "B",
        "text": "Bagging是个体学习器独立并行生成，Boosting是个体学习器串行强依赖生成"
      },
      {
        "key": "C",
        "text": "Bagging基于概率分布，Boosting基于几何超平面"
      },
      {
        "key": "D",
        "text": "Bagging会改变样本空间维度，Boosting不会"
      }
    ],
    "answer": "B",
    "explanation": "Bagging的基学习器可并行、相对独立；Boosting前后轮依赖强，必须串行迭代。"
  },
  {
    "id": "MPR083",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 83,
    "type": "single",
    "question": "在AdaBoost算法的样本权重更新步骤中，若样本 $x_i$ 在第 $t$ 轮被正确分类，则其在下一轮的权重 $D_{t+1}(i)$ 将：",
    "options": [
      {
        "key": "A",
        "text": "保持绝对不变"
      },
      {
        "key": "B",
        "text": "被成倍放大"
      },
      {
        "key": "C",
        "text": "被相应缩小，使其在后续训练中受关注度降低"
      },
      {
        "key": "D",
        "text": "直接归零"
      }
    ],
    "answer": "C",
    "explanation": "AdaBoost会降低正确样本权重，让下一轮少关注它们，把注意力转移给错分样本。"
  },
  {
    "id": "MPR084",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 84,
    "type": "single",
    "question": "随着训练轮数 $T$ 的不断增加，AdaBoost强分类器在训练集上的训练误差通常会：",
    "options": [
      {
        "key": "A",
        "text": "呈指数级快速下降直至趋近于0"
      },
      {
        "key": "B",
        "text": "线性稳步上升"
      },
      {
        "key": "C",
        "text": "保持完全不变"
      },
      {
        "key": "D",
        "text": "呈现出剧烈的随机上下震荡"
      }
    ],
    "answer": "A",
    "explanation": "AdaBoost每轮都集中修正错误样本，训练误差通常会随轮数快速下降，甚至接近0。"
  },
  {
    "id": "MPR085",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与提升方法",
    "number": 85,
    "type": "single",
    "question": "集成学习之所以能够提升分类性能，其底层的哲学思想是：",
    "options": [
      {
        "key": "A",
        "text": "降低数据的采样频率"
      },
      {
        "key": "B",
        "text": "结合多个“三个臭皮匠”式的弱分类器，互补不足，构造出一个“诸葛亮”式的强分类器"
      },
      {
        "key": "C",
        "text": "完全消除特征之间的相关性"
      },
      {
        "key": "D",
        "text": "将非线性分类问题转化为无监督的聚类问题"
      }
    ],
    "answer": "B",
    "explanation": "集成学习靠多个弱学习器互补，单个可能一般，但组合后能形成更强的整体判断。"
  },
  {
    "id": "MPR086",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 86,
    "type": "single",
    "question": "特征选择与特征提取的根本区别在于：",
    "options": [
      {
        "key": "A",
        "text": "特征选择需要先验知识，特征提取完全不需要"
      },
      {
        "key": "B",
        "text": "特征选择是筛选原始特征的子集（保留原貌），特征提取是通过数学变换生成全新的新特征"
      },
      {
        "key": "C",
        "text": "特征选择是生成新的特征组合，特征提取是单纯剔除噪声"
      },
      {
        "key": "D",
        "text": "特征选择适用于线性数据，特征提取适用于非线性数据"
      }
    ],
    "answer": "B",
    "explanation": "特征选择是“挑原特征”，特征提取是“变换出新特征”，这是二者最根本区别。"
  },
  {
    "id": "MPR087",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 87,
    "type": "single",
    "question": "进行特征选择/提取降维的最直接驱动技术动因是为了克服：",
    "options": [
      {
        "key": "A",
        "text": "局部最优解"
      },
      {
        "key": "B",
        "text": "维数灾难（Curse of Dimensionality，维度高导致样本稀疏、计算困难及过拟合）"
      },
      {
        "key": "C",
        "text": "感知器不收敛"
      },
      {
        "key": "D",
        "text": "随机权重的初始化震荡"
      }
    ],
    "answer": "B",
    "explanation": "维度过高会让样本稀疏、计算困难、容易过拟合，降维的直接动因就是缓解维数灾难。"
  },
  {
    "id": "MPR088",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 88,
    "type": "single",
    "question": "特征选择三大判据中，基于类内类间散布距离的代表性判据是：",
    "options": [
      {
        "key": "A",
        "text": "类间平均距离判据 $J_d(x)$"
      },
      {
        "key": "B",
        "text": "基于后验概率推导的熵判据"
      },
      {
        "key": "C",
        "text": "交叉熵损失函数"
      },
      {
        "key": "D",
        "text": "贝叶斯最小风险值"
      }
    ],
    "answer": "A",
    "explanation": "类间平均距离判据直接用类别之间的距离/散布衡量可分性，属于基于类内类间距离的判据。"
  },
  {
    "id": "MPR089",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 89,
    "type": "single",
    "question": "可分性准则 $J_d(x)$ 必须具备的四条优良性质中，包括加特征时判据值“不降”的性质，这被称为：",
    "options": [
      {
        "key": "A",
        "text": "可加性"
      },
      {
        "key": "B",
        "text": "单调性"
      },
      {
        "key": "C",
        "text": "唯一性"
      },
      {
        "key": "D",
        "text": "齐次性"
      }
    ],
    "answer": "B",
    "explanation": "加入新特征后判据值不下降，说明信息不应变差，这种性质叫单调性。"
  },
  {
    "id": "MPR090",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 90,
    "type": "single",
    "question": "特征提取算法PCA（主成分分析）的核心技术目标是：",
    "options": [
      {
        "key": "A",
        "text": "寻找让不同类别之间离得最远的投影轴"
      },
      {
        "key": "B",
        "text": "寻找数据中方差最大的方向做投影，从而在降维同时尽可能保留原始信息"
      },
      {
        "key": "C",
        "text": "利用非线性核函数将数据映射到无穷维空间"
      },
      {
        "key": "D",
        "text": "极大化多类别的后验风险"
      }
    ],
    "answer": "B",
    "explanation": "PCA不看类别标签，而是找总体方差最大的方向投影，尽量保留原始数据主要信息。"
  },
  {
    "id": "MPR091",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 91,
    "type": "single",
    "question": "主成分分析（PCA）计算流程的第一步、也是绝对不可或缺的一步是：",
    "options": [
      {
        "key": "A",
        "text": "求解特征值与特征向量"
      },
      {
        "key": "B",
        "text": "对原始数据进行去中心化（每个样本减去全体均值向量 $\\mu$）"
      },
      {
        "key": "C",
        "text": "计算类间散布矩阵 $S_b$"
      },
      {
        "key": "D",
        "text": "设定软间隔松弛变量"
      }
    ],
    "answer": "B",
    "explanation": "PCA先去中心化，把数据移到以均值为原点，否则协方差和主方向会被整体位置影响。"
  },
  {
    "id": "MPR092",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 92,
    "type": "single",
    "question": "在PCA中，样本去中心化后算得的矩阵 $C_X = \\frac{1}{N}\\sum \\tilde{x}_i \\tilde{x}_i^T$ 被称为：",
    "options": [
      {
        "key": "A",
        "text": "类内散布矩阵"
      },
      {
        "key": "B",
        "text": "协方差矩阵（Covariance Matrix）"
      },
      {
        "key": "C",
        "text": "恒等矩阵"
      },
      {
        "key": "D",
        "text": "转换矩阵"
      }
    ],
    "answer": "B",
    "explanation": "去中心化样本外积求平均得到的就是协方差矩阵，用来描述数据在各方向上的散布。"
  },
  {
    "id": "MPR093",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 93,
    "type": "single",
    "question": "PCA降维时，所获得的“第一主成分”在数学上对应于：",
    "options": [
      {
        "key": "A",
        "text": "协方差矩阵最小特征值对应的特征向量"
      },
      {
        "key": "B",
        "text": "协方差矩阵最大特征值对应的特征向量"
      },
      {
        "key": "C",
        "text": "类内散布矩阵的逆矩阵"
      },
      {
        "key": "D",
        "text": "随机抽取的特征向量"
      }
    ],
    "answer": "B",
    "explanation": "最大特征值方向方差最大，保留信息最多，所以对应第一主成分。"
  },
  {
    "id": "MPR094",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 94,
    "type": "single",
    "question": "在PCA应用中，特征值 $\\lambda_j$ 的物理意义对应于：",
    "options": [
      {
        "key": "A",
        "text": "样本分类的错误率"
      },
      {
        "key": "B",
        "text": "数据在新主成分投影轴方向上的方差（$\\lambda$ 越大保留信息越多）"
      },
      {
        "key": "C",
        "text": "类别中心之间的距离"
      },
      {
        "key": "D",
        "text": "核函数的平滑参数"
      }
    ],
    "answer": "B",
    "explanation": "PCA中特征值就是数据投影到对应主成分方向后的方差，越大说明该方向信息量越大。"
  },
  {
    "id": "MPR095",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 95,
    "type": "single",
    "question": "线性判别分析（LDA / Fisher线性判别）的最核心技术特色是：",
    "options": [
      {
        "key": "A",
        "text": "它是完全无监督的降维方法，不依赖任何类别标签"
      },
      {
        "key": "B",
        "text": "它是强监督的降维方法，利用类别标签寻找让不同类别“分离最好”的投影方向"
      },
      {
        "key": "C",
        "text": "它的目标是最大化投影后的总样本方差"
      },
      {
        "key": "D",
        "text": "它通过计算熵来过滤多余特征"
      }
    ],
    "answer": "B",
    "explanation": "LDA利用类别标签，目标不是保留最大方差，而是让不同类别投影后更容易分开。"
  },
  {
    "id": "MPR096",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 96,
    "type": "single",
    "question": "Fisher线性判别（LDA）量化投影质量的优化目标准则是：",
    "options": [
      {
        "key": "A",
        "text": "让类间离散度 $S_b$ 尽可能小，类内离散度 $S_w$ 尽可能大"
      },
      {
        "key": "B",
        "text": "让类间离散度 $S_b$ 尽可能大，类内离散度 $S_w$ 尽可能小（极大化比值 $\\frac{w^T S_b w}{w^T S_w w}$）"
      },
      {
        "key": "C",
        "text": "最小化样本到类中心的平方和"
      },
      {
        "key": "D",
        "text": "最小化错分样本的加权和"
      }
    ],
    "answer": "B",
    "explanation": "Fisher准则要类间距离大、类内散布小，所以最大化 w^T S_b w / w^T S_w w。"
  },
  {
    "id": "MPR097",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 97,
    "type": "single",
    "question": "LDA（线性判别分析）在数学上最终被转化为求解什么问题？",
    "options": [
      {
        "key": "A",
        "text": "拉格朗日对偶问题"
      },
      {
        "key": "B",
        "text": "广义特征值分解问题（矩阵 $S_w^{-1}S_b$ 的最大特征值对应特征向量）"
      },
      {
        "key": "C",
        "text": "伪逆矩阵的代数乘积"
      },
      {
        "key": "D",
        "text": "肘部拐点的定性分析"
      }
    ],
    "answer": "B",
    "explanation": "LDA优化最终可转化为求 S_w^{-1}S_b 的广义特征值/特征向量问题。"
  },
  {
    "id": "MPR098",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 98,
    "type": "single",
    "question": "关于PCA与LDA的核心区别，下列说法中正确的是：",
    "options": [
      {
        "key": "A",
        "text": "PCA是有监督的，LDA是无监督的"
      },
      {
        "key": "B",
        "text": "PCA关注于数据的“最大方差保持”，LDA关注于类别的“最大可分性投影”"
      },
      {
        "key": "C",
        "text": "PCA只能处理二分类，LDA可以处理任意多分类"
      },
      {
        "key": "D",
        "text": "PCA计算复杂度显著高于LDA"
      }
    ],
    "answer": "B",
    "explanation": "PCA是无监督保方差；LDA是有监督保可分性。一个看总体信息，一个看类别分离。"
  },
  {
    "id": "MPR099",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 99,
    "type": "single",
    "question": "PCA在人脸识别领域的经典实战应用被称为：",
    "options": [
      {
        "key": "A",
        "text": "稀疏人脸"
      },
      {
        "key": "B",
        "text": "特征人脸（Eigenfaces）"
      },
      {
        "key": "C",
        "text": "判别人脸"
      },
      {
        "key": "D",
        "text": "线性人脸"
      }
    ],
    "answer": "B",
    "explanation": "PCA做人脸识别的经典方法叫特征人脸，核心是用主成分表示人脸图像空间。"
  },
  {
    "id": "MPR100",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块6：特征选择与特征提取",
    "number": 100,
    "type": "single",
    "question": "在特征选择搜索策略中，从空集开始、每次引入一个使得可分性判据最优的特征的方法称为：",
    "options": [
      {
        "key": "A",
        "text": "序列向前选择（SFS）"
      },
      {
        "key": "B",
        "text": "序列向后选择（SBS）"
      },
      {
        "key": "C",
        "text": "穷举搜索"
      },
      {
        "key": "D",
        "text": "随机森林筛选"
      }
    ],
    "answer": "A",
    "explanation": "SFS从空特征集开始，每一步加入一个最能提升判据的特征，所以是序列向前选择。"
  },
  {
    "id": "MPR101",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别与基础",
    "number": 101,
    "type": "multiple",
    "question": "一个完整的模式识别系统通常包含下列哪些关键的组成部分？",
    "options": [
      {
        "key": "A",
        "text": "模式采集与数据获取"
      },
      {
        "key": "B",
        "text": "数据预处理"
      },
      {
        "key": "C",
        "text": "特征选择与特征提取"
      },
      {
        "key": "D",
        "text": "分类器设计/聚类判定"
      }
    ],
    "answer": "ABCD",
    "explanation": "模式识别系统的四大通用串行基本骨架模块。"
  },
  {
    "id": "MPR102",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别与基础",
    "number": 102,
    "type": "multiple",
    "question": "下列考点属于模式识别有监督分类（Supervised Classification）范畴的有：",
    "options": [
      {
        "key": "A",
        "text": "贝叶斯决策方法"
      },
      {
        "key": "B",
        "text": "支持向量机（SVM）"
      },
      {
        "key": "C",
        "text": "K-Means算法"
      },
      {
        "key": "D",
        "text": "AdaBoost集成学习"
      }
    ],
    "answer": "ABD",
    "explanation": "有监督分类包含标签已知的所有决策方法；C项K-Means为无监督聚类。"
  },
  {
    "id": "MPR103",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别与基础",
    "number": 103,
    "type": "multiple",
    "question": "在模式识别中，引发过拟合（Overfitting）现象的主要原因包括：",
    "options": [
      {
        "key": "A",
        "text": "训练样本数量过少、缺乏代表性"
      },
      {
        "key": "B",
        "text": "分类器模型过于复杂，参数过多"
      },
      {
        "key": "C",
        "text": "训练过程中过度拟合了数据中的噪声"
      },
      {
        "key": "D",
        "text": "进行了数据的去中心化操作"
      }
    ],
    "answer": "ABC",
    "explanation": "过拟合由样本过少、模型过繁、强记噪声引起；D项去中心化无影响。"
  },
  {
    "id": "MPR104",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别与基础",
    "number": 104,
    "type": "multiple",
    "question": "下列应用领域中，深度融合了模式识别核心算法的有：",
    "options": [
      {
        "key": "A",
        "text": "自动驾驶多传感器融合环境感知"
      },
      {
        "key": "B",
        "text": "大语言模型（LLM）的文本理解与推理"
      },
      {
        "key": "C",
        "text": "生物特征识别（指纹、人脸、虹膜）"
      },
      {
        "key": "D",
        "text": "计算机网络硬件拓扑路由物理架设"
      }
    ],
    "answer": "ABC",
    "explanation": "计算机视觉识别、大语言模型和知识图谱均属于典型应用；D项属于网络纯硬件布线。"
  },
  {
    "id": "MPR105",
    "chapter": "模块1｜模式识别概述与基础概念",
    "originalChapter": "模块1：模式识别与基础",
    "number": 105,
    "type": "multiple",
    "question": "关于特征空间（Feature Space），下列说法正确的有：",
    "options": [
      {
        "key": "A",
        "text": "特征空间的每一个维度对应对象的一个测量属性"
      },
      {
        "key": "B",
        "text": "空间中的每一个点代表一个具体的对象样本"
      },
      {
        "key": "C",
        "text": "维度越高，样本分布越紧密，越有利于贝叶斯估计"
      },
      {
        "key": "D",
        "text": "判定边界的几何形状直接受到特征空间分布的影响"
      }
    ],
    "answer": "ABD",
    "explanation": "特征空间的概念定义与边界几何原理。高维可能引发样本稀疏（维数灾难）。"
  },
  {
    "id": "MPR106",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 106,
    "type": "multiple",
    "question": "聚类分析中，影响最终聚类结果走向的根本决定性因素有：",
    "options": [
      {
        "key": "A",
        "text": "特征的选取与定义"
      },
      {
        "key": "B",
        "text": "相似度（距离度量）的定义"
      },
      {
        "key": "C",
        "text": "聚类准则的设定"
      },
      {
        "key": "D",
        "text": "运行算法时使用的计算机内存大小"
      }
    ],
    "answer": "ABC",
    "explanation": "聚类的三大核心依赖驱动。计算机内存不改变聚类算法本身的数学走向。"
  },
  {
    "id": "MPR107",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 107,
    "type": "multiple",
    "question": "现代模式识别中，常用的四大类基础聚类方法包括：",
    "options": [
      {
        "key": "A",
        "text": "试探法（如最近邻规则）"
      },
      {
        "key": "B",
        "text": "层次法（包括融合与分解）"
      },
      {
        "key": "C",
        "text": "动态法（如K-Means、ISODATA）"
      },
      {
        "key": "D",
        "text": "密度法（如DBSCAN）"
      }
    ],
    "answer": "ABCD",
    "explanation": "期末核心复习大纲强调的聚类分析四大基本分类方法。"
  },
  {
    "id": "MPR108",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 108,
    "type": "multiple",
    "question": "下列关于最近邻规则试探法聚类的叙述，正确的有：",
    "options": [
      {
        "key": "A",
        "text": "算法极其简单直观，具备在线增量学习能力"
      },
      {
        "key": "B",
        "text": "聚类结果严重受到样本输入先后顺序的影响"
      },
      {
        "key": "C",
        "text": "对聚类圆半径阈值 $T$ 的选择极其敏感"
      },
      {
        "key": "D",
        "text": "能够完美识别具有极其复杂几何形状的簇"
      }
    ],
    "answer": "ABC",
    "explanation": "最近邻试探法的基本属性。它使用单一标准，不适合复杂形状。"
  },
  {
    "id": "MPR109",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 109,
    "type": "multiple",
    "question": "关于层次聚类中的“融合算法”，下列步骤正确的有：",
    "options": [
      {
        "key": "A",
        "text": "初始状态将 $n$ 个样本各自独立看作一个类"
      },
      {
        "key": "B",
        "text": "计算各两类之间的类间距离，合并最相似的两个类"
      },
      {
        "key": "C",
        "text": "类别数由 $n$ 逐步递减至满足要求的 $K$"
      },
      {
        "key": "D",
        "text": "具有不可逆性，一旦合并无法在后续步骤中无损拆分"
      }
    ],
    "answer": "ABCD",
    "explanation": "层次聚类自底向上融合算法的标准流程与重要不可逆性质。"
  },
  {
    "id": "MPR110",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 110,
    "type": "multiple",
    "question": "K-Means算法在实际运行中，常见的技术痛点或局限性包括：",
    "options": [
      {
        "key": "A",
        "text": "需要预先人为指定类别数 $K$"
      },
      {
        "key": "B",
        "text": "结果容易受到随机选取的初始聚类中心的影响"
      },
      {
        "key": "C",
        "text": "准则函数 $E$ 容易陷入局部最优解"
      },
      {
        "key": "D",
        "text": "无法处理具有非球形、复杂几何形状的数据分布"
      }
    ],
    "answer": "ABCD",
    "explanation": "K-Means的全部典型缺陷。对初始点敏感、易入局部最优、K值难定、倾向球形簇。"
  },
  {
    "id": "MPR111",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 111,
    "type": "multiple",
    "question": "ISODATA算法在K-Means的基础上进行了大幅升级，它能够动态执行的操作有：",
    "options": [
      {
        "key": "A",
        "text": "当两个中心距离过近时，自动执行“合并”"
      },
      {
        "key": "B",
        "text": "当某一类内标准差过大时，自动执行“分裂”"
      },
      {
        "key": "C",
        "text": "自动调整类别数 $K$，无需指定任何初始控制参数"
      },
      {
        "key": "D",
        "text": "在迭代过程中动态剔除包含样本数过少的“噪声类”"
      }
    ],
    "answer": "ABD",
    "explanation": "ISODATA根据动态阈值指标自动执行合并、分裂和清除噪声小类的机制。"
  },
  {
    "id": "MPR112",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 112,
    "type": "multiple",
    "question": "DBSCAN基于密度的聚类算法中，涉及到的核心技术参数与概念有：",
    "options": [
      {
        "key": "A",
        "text": "邻域半径参数 $\\varepsilon$"
      },
      {
        "key": "B",
        "text": "最小邻居数阈值 $MinPts$"
      },
      {
        "key": "C",
        "text": "核心点与噪声点"
      },
      {
        "key": "D",
        "text": "肘部弯曲拐点"
      }
    ],
    "answer": "ABC",
    "explanation": "DBSCAN密度聚类的两大输入控制参数以及三个核心点定义类别。"
  },
  {
    "id": "MPR113",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 113,
    "type": "multiple",
    "question": "关于DBSCAN算法的优缺点，下列说法正确的有：",
    "options": [
      {
        "key": "A",
        "text": "优点是不需要预先指定聚类的簇数 $K$"
      },
      {
        "key": "B",
        "text": "优点是能够极其敏锐地发现任意形状的簇并隔离噪声"
      },
      {
        "key": "C",
        "text": "缺点是当数据密度极不均匀时，单一的 $\\varepsilon$ 和 $MinPts$ 难以获得理想效果"
      },
      {
        "key": "D",
        "text": "缺点是计算量在任何场景下都显著高于分解层次聚类"
      }
    ],
    "answer": "ABC",
    "explanation": "DBSCAN的优缺点辨析。它计算量前期通常小于自顶向下层次分解。"
  },
  {
    "id": "MPR114",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 114,
    "type": "multiple",
    "question": "下列哪些公式或方法可以用于聚类分析中的样本相似度/距离度量？",
    "options": [
      {
        "key": "A",
        "text": "欧氏距离（L2距离）"
      },
      {
        "key": "B",
        "text": "曼哈顿距离（L1距离）"
      },
      {
        "key": "C",
        "text": "夹角余弦相似度"
      },
      {
        "key": "D",
        "text": "判别函数偏导数"
      }
    ],
    "answer": "ABC",
    "explanation": "相似度度量涵盖欧氏、曼哈顿、余弦等。D项偏导数用于梯度更新。"
  },
  {
    "id": "MPR115",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 115,
    "type": "multiple",
    "question": "在ISODATA算法的合并步骤中，必须同时满足哪些条件或流程？",
    "options": [
      {
        "key": "A",
        "text": "两个中心的几何距离必须小于合并阈值 $\\theta_c$"
      },
      {
        "key": "B",
        "text": "满足条件的配对按距离从小到大严格排列，依次执行合并"
      },
      {
        "key": "C",
        "text": "合并后的新中心必须通过两个旧中心的样本数加权平均算出"
      },
      {
        "key": "D",
        "text": "必须保证合并后的总类别数大于初始设定的Nc"
      }
    ],
    "answer": "ABC",
    "explanation": "ISODATA合并的两大指标限制（距离和样本数加权更新）。"
  },
  {
    "id": "MPR116",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 116,
    "type": "multiple",
    "question": "导致聚类分析被定义为“不可逆”操作的原因包括：",
    "options": [
      {
        "key": "A",
        "text": "层次融合后，原始样本之间的个体特殊独立关系被类统一标签取代"
      },
      {
        "key": "B",
        "text": "层次分解后，子类之间失去了再次直接融合成完全原貌的关联信息"
      },
      {
        "key": "C",
        "text": "聚类准则函数的逼近过程通常是多对一的映射降维"
      },
      {
        "key": "D",
        "text": "聚类算法完全无法在计算机中运行反向迭代"
      }
    ],
    "answer": "ABC",
    "explanation": "聚类不可逆性的底层数学成因：合并后不可分，分解后不可合。"
  },
  {
    "id": "MPR117",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 117,
    "type": "multiple",
    "question": "在K-Means中，判定算法已经成功收敛的科学依据有：",
    "options": [
      {
        "key": "A",
        "text": "准则函数 $E$ 的数值变化量连续低于预设的极小误差限"
      },
      {
        "key": "B",
        "text": "所有的类中心在前后两轮迭代中完全不再移动"
      },
      {
        "key": "C",
        "text": "每个样本所属的类别标签完全固化，不再发生切换"
      },
      {
        "key": "D",
        "text": "迭代次数直接触发了人为设定的最大上限"
      }
    ],
    "answer": "ABC",
    "explanation": "K-Means算法收敛的标准判定指标（中心不移动、标签不切换、误差稳定）。"
  },
  {
    "id": "MPR118",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 118,
    "type": "multiple",
    "question": "下列应用场景中，属于聚类算法典型落地领域的有：",
    "options": [
      {
        "key": "A",
        "text": "电子商务系统对用户购买行为进行自动价值分群"
      },
      {
        "key": "B",
        "text": "搜索引擎根据检索内容的相似性对搜索结果进行自动聚类成组"
      },
      {
        "key": "C",
        "text": "垃圾邮件基于标注库的二分类拦截"
      },
      {
        "key": "D",
        "text": "遥感图像中对未标明地物的区域进行自动光谱谱系分组"
      }
    ],
    "answer": "ABD",
    "explanation": "客户分群、检索结果聚类、未知地物分组均无标签，属于聚类；C项属于有监督分类。"
  },
  {
    "id": "MPR119",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 119,
    "type": "multiple",
    "question": "关于DBSCAN算法中的点分类，下列说法正确的有：",
    "options": [
      {
        "key": "A",
        "text": "核心点的 $\\varepsilon$ 邻域内包含的样本数 $\\ge MinPts$"
      },
      {
        "key": "B",
        "text": "边界点的邻域样本数 $< MinPts$，但它落在某个核心点的 $\\varepsilon$ 邻域内"
      },
      {
        "key": "C",
        "text": "噪声点的邻域样本数 $< MinPts$，且不属于任何核心点的邻域"
      },
      {
        "key": "D",
        "text": "所有未被分配给核心点的点都属于聚类中心"
      }
    ],
    "answer": "ABC",
    "explanation": "DBSCAN基于邻域密度对空间数据点的三大精准定义。"
  },
  {
    "id": "MPR120",
    "chapter": "模块2｜模式聚类分析",
    "originalChapter": "模块2：模式聚类分析",
    "number": 120,
    "type": "multiple",
    "question": "在定义类间距离时，层次聚类常用的度量准则包括：",
    "options": [
      {
        "key": "A",
        "text": "最短距离法（Single Linkage）"
      },
      {
        "key": "B",
        "text": "最长距离法（Complete Linkage）"
      },
      {
        "key": "C",
        "text": "平均距离法（Average Linkage）"
      },
      {
        "key": "D",
        "text": "随机距离法"
      }
    ],
    "answer": "ABC",
    "explanation": "层次聚类在计算两簇之间距离时最常用的三种统计经典准则。"
  },
  {
    "id": "MPR121",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 121,
    "type": "multiple",
    "question": "贝叶斯决策理论三大支柱准则包括：",
    "options": [
      {
        "key": "A",
        "text": "最小错误率准则"
      },
      {
        "key": "B",
        "text": "最小风险准则"
      },
      {
        "key": "C",
        "text": "最大后验概率准则"
      },
      {
        "key": "D",
        "text": "最大似然估计准则"
      }
    ],
    "answer": "ABC",
    "explanation": "贝叶斯统计决策方法的三大经典核心准则（最大似然估计属于参数估计范畴）。"
  },
  {
    "id": "MPR122",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 122,
    "type": "multiple",
    "question": "利用贝叶斯公式进行分类器设计时，为了完整计算后验概率 $P(\\omega_i|x)$，必须已知或估计出的概率参数有：",
    "options": [
      {
        "key": "A",
        "text": "各类别的先验概率 $P(\\omega_i)$"
      },
      {
        "key": "B",
        "text": "对应类别的类条件概率密度 $p(x|\\omega_i)$"
      },
      {
        "key": "C",
        "text": "特征全概率（特征空间的总概率密度） $p(x)$"
      },
      {
        "key": "D",
        "text": "弱分类器的错误率权重 $\\alpha_t$"
      }
    ],
    "answer": "ABC",
    "explanation": "贝叶斯公式的标准代数组成元素（后验 = 似然 × 先验 / 全概率）。"
  },
  {
    "id": "MPR123",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 123,
    "type": "multiple",
    "question": "关于贝叶斯决策中的“先验概率”与“后验概率”，下列辨析正确的有：",
    "options": [
      {
        "key": "A",
        "text": "先验概率是在未看观测样本特征前，基于历史经验或统计得到的类别比例"
      },
      {
        "key": "B",
        "text": "后验概率是在观测到具体样本特征 $x$ 后，更新得到的该样本属于各类的概率"
      },
      {
        "key": "C",
        "text": "先验概率通过后验概率乘以似然函数直接求得"
      },
      {
        "key": "D",
        "text": "后验概率是贝叶斯分类进行最终决策划分的直接依据"
      }
    ],
    "answer": "ABD",
    "explanation": "先验与后验概率的核心时间节点与逻辑辨析。"
  },
  {
    "id": "MPR124",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 124,
    "type": "multiple",
    "question": "朴素贝叶斯分类器（Naive Bayes）之所以被称为“朴素”，其核心假设条件包括：",
    "options": [
      {
        "key": "A",
        "text": "特征与特征之间在给定类别下是条件独立的，没有任何协同关联"
      },
      {
        "key": "B",
        "text": "数据的联合概率密度等于各个特征边缘概率密度的乘积"
      },
      {
        "key": "C",
        "text": "各类别的协方差矩阵必须完全等同于单位矩阵"
      },
      {
        "key": "D",
        "text": "所有的先验概率必须完全相等"
      }
    ],
    "answer": "AB",
    "explanation": "朴素贝叶斯的“朴素”完全体现在特征条件独立性假设和全概率拆解上。"
  },
  {
    "id": "MPR125",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 125,
    "type": "multiple",
    "question": "高斯混合模型（GMM）的组成要素包括：",
    "options": [
      {
        "key": "A",
        "text": "多个独立的高斯（正态）分布成分"
      },
      {
        "key": "B",
        "text": "各个高斯成分对应的权重系数（先验混合比例 $P_j$）"
      },
      {
        "key": "C",
        "text": "每个高斯成分自身的均值向量 $\\mu_j$ 和协方差矩阵 $\\Sigma_j$"
      },
      {
        "key": "D",
        "text": "错分样本的指数级加权系数"
      }
    ],
    "answer": "ABC",
    "explanation": "高斯混合模型（GMM）作为非参数/混合密度估计的三个核心数学参数。"
  },
  {
    "id": "MPR126",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 126,
    "type": "multiple",
    "question": "关于极大似然估计（MLE）与最大后验概率估计（MAP）的叙述，正确的有：",
    "options": [
      {
        "key": "A",
        "text": "MLE不考虑参数自身的先验分布，视参数为未知但固定的常数"
      },
      {
        "key": "B",
        "text": "MAP将参数视为具有某种先验分布的随机变量，结合了先验与似然"
      },
      {
        "key": "C",
        "text": "当参数的先验分布表现为均匀分布时，MAP的求解结果与MLE完全等价"
      },
      {
        "key": "D",
        "text": "MLE和MAP都不需要使用任何训练样本数据"
      }
    ],
    "answer": "ABC",
    "explanation": "MLE（点估计）与MAP（结合先验的随机估计）在参数估计中的本质关联与差异。"
  },
  {
    "id": "MPR127",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 127,
    "type": "multiple",
    "question": "多元正态分布参数化模型中，若假定所有类别共享完全相同的协方差矩阵（$\\Sigma_i = \\Sigma$），则：",
    "options": [
      {
        "key": "A",
        "text": "贝叶斯决策边界会呈现为线性超平面"
      },
      {
        "key": "B",
        "text": "二次项判定边界将彻底退化、消除"
      },
      {
        "key": "C",
        "text": "判别函数变为关于特征 $x$ 的线性函数"
      },
      {
        "key": "D",
        "text": "必须改用支持向量机才能进行分类"
      }
    ],
    "answer": "ABC",
    "explanation": "多元正态分布下，共享协方差矩阵将直接导致判定边界中的二次项抵消，退化为线性超平面。"
  },
  {
    "id": "MPR128",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 128,
    "type": "multiple",
    "question": "在二分类最小错误率贝叶斯决策中，下列哪些表达式等价于“判定样本 $x$ 属于 $\\omega_1$”？",
    "options": [
      {
        "key": "A",
        "text": "$P(\\omega_1|x) > P(\\omega_2|x)$"
      },
      {
        "key": "B",
        "text": "$p(x|\\omega_1)P(\\omega_1) > p(x|\\omega_2)P(\\omega_2)$"
      },
      {
        "key": "C",
        "text": "$\\frac{p(x|\\omega_1)}{p(x|\\omega_2)} > \\frac{P(\\omega_2)}{P(\\omega_1)}$"
      },
      {
        "key": "D",
        "text": "$P(\\omega_1|x) < P(\\omega_2|x)$"
      }
    ],
    "answer": "ABC",
    "explanation": "最小错误率贝叶斯决策规则的三种等价数学代数变换形式。"
  },
  {
    "id": "MPR129",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 129,
    "type": "multiple",
    "question": "统计决策方法中，设计最小风险贝叶斯分类器时必不可少的要素有：",
    "options": [
      {
        "key": "A",
        "text": "完整的类条件概率密度分布"
      },
      {
        "key": "B",
        "text": "明确给定的先验概率"
      },
      {
        "key": "C",
        "text": "量化每种错分后果代价的损失矩阵（Loss Matrix $\\lambda_{ij}$）"
      },
      {
        "key": "D",
        "text": "核函数的内积映射矩阵"
      }
    ],
    "answer": "ABC",
    "explanation": "最小风险决策必须引入损失矩阵 $\\lambda$ 来量化错分类别的实际代价成本。"
  },
  {
    "id": "MPR130",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 130,
    "type": "multiple",
    "question": "朴素贝叶斯分类器在实际工程落地中的核心优势包括：",
    "options": [
      {
        "key": "A",
        "text": "算法结构极其简单，计算速度极快，易于大规模并行扩展"
      },
      {
        "key": "B",
        "text": "在小规模或高维稀疏数据集（如文本垃圾邮件分类）上表现出惊人的健壮性"
      },
      {
        "key": "C",
        "text": "参数估计极其简单，只需分别统计一维特征的概率分布即可"
      },
      {
        "key": "D",
        "text": "能够完美拟合特征之间存在强相互依赖的复杂非线性系统"
      }
    ],
    "answer": "ABC",
    "explanation": "朴素贝叶斯由于假设独立而带来的高速计算和对高维稀疏特征的极强鲁棒性。"
  },
  {
    "id": "MPR131",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 131,
    "type": "multiple",
    "question": "在概率密度函数估计中，参数化估计与非参数化估计的核心区别在于：",
    "options": [
      {
        "key": "A",
        "text": "参数化估计预先假设数据服从某种特定形式的已知分布（如多元正态分布）"
      },
      {
        "key": "B",
        "text": "非参数化估计不强制约束分布的形式，直接从数据样本出发逼近密度函数"
      },
      {
        "key": "C",
        "text": "参数化估计只需要估计少量的参数（如 $\\mu, \\Sigma$）"
      },
      {
        "key": "D",
        "text": "非参数化估计绝对无法用于贝叶斯分类器的构建"
      }
    ],
    "answer": "ABC",
    "explanation": "参数化估计与非参数化估计的本质理论区别。非参数估计依然是为了计算贝叶斯类条件概率。"
  },
  {
    "id": "MPR132",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 132,
    "type": "multiple",
    "question": "由于拉普拉斯修正（Laplace Correction）在朴素贝叶斯中的应用，它可以：",
    "options": [
      {
        "key": "A",
        "text": "防止分子或分母由于样本未出现而出现0概率，导致整个乘积公式失效"
      },
      {
        "key": "B",
        "text": "为每个特征项的频数计数加上一个微小的正数平滑项"
      },
      {
        "key": "C",
        "text": "消除模型的过拟合，提高泛化能力"
      },
      {
        "key": "D",
        "text": "将有监督模型直接自动转换为无监督模型"
      }
    ],
    "answer": "AB",
    "explanation": "拉普拉斯修正（加1平滑）的核心作用是防止频数为0导致整条概率相乘链条坍塌。"
  },
  {
    "id": "MPR133",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 133,
    "type": "multiple",
    "question": "多元正态分布特征概率密度函数中，协方差矩阵 $\\Sigma$ 的性质必须满足：",
    "options": [
      {
        "key": "A",
        "text": "它必须是一个实对称矩阵"
      },
      {
        "key": "B",
        "text": "它必须满足正定性（或半正定），行列式 $|\\Sigma| > 0$"
      },
      {
        "key": "C",
        "text": "矩阵的对角线元素代表各个独立维度的自身方差"
      },
      {
        "key": "D",
        "text": "矩阵的所有元素必须全部为正数"
      }
    ],
    "answer": "ABC",
    "explanation": "协方差矩阵的严格数学性质（实对称、正定、对角线为各自方差）。相关系数可正可负。"
  },
  {
    "id": "MPR134",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 134,
    "type": "multiple",
    "question": "关于贝叶斯公式 $P(\\omega_i|x) = \\frac{p(x|\\omega_i)P(\\omega_i)}{p(x)}$ 的内涵理解，正确的有：",
    "options": [
      {
        "key": "A",
        "text": "分母 $p(x)$ 是全概率，在比较不同类别后验大小时起到相同的归一化常数作用"
      },
      {
        "key": "B",
        "text": "分子是该类别的似然度与先验概率的乘积"
      },
      {
        "key": "C",
        "text": "它完美地将客观观测（似然）与主观先验知识融合在一起"
      },
      {
        "key": "D",
        "text": "它能够直接消除训练集中的所有噪声干扰"
      }
    ],
    "answer": "ABC",
    "explanation": "贝叶斯公式在模式分类应用中的底层哲学内涵与各乘项作用。"
  },
  {
    "id": "MPR135",
    "chapter": "模块3｜统计决策方法与贝叶斯分类",
    "originalChapter": "模块3：统计决策方法与贝叶斯分类",
    "number": 135,
    "type": "multiple",
    "question": "在最小风险贝叶斯决策中，决策条件是选择使期望损失（风险）最小的类别，其数学表达涉及到：",
    "options": [
      {
        "key": "A",
        "text": "条件风险 $R(\\alpha_i|x) = \\sum_{j=1}^c \\lambda_{ij} P(\\omega_j|x)$"
      },
      {
        "key": "B",
        "text": "比较各个可行动作的条件风险值，选择风险最小者"
      },
      {
        "key": "C",
        "text": "必须使用 Hinge Loss 作为唯一的损失函数"
      },
      {
        "key": "D",
        "text": "风险大小直接受到损失矩阵 $\\lambda$ 具体赋值的影响"
      }
    ],
    "answer": "ABD",
    "explanation": "条件风险公式的精确代数定义与计算流程。损失函数不限于Hinge Loss。"
  },
  {
    "id": "MPR136",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 136,
    "type": "multiple",
    "question": "支持向量机（SVM）在处理分类优化问题时，其核心技术路径包括：",
    "options": [
      {
        "key": "A",
        "text": "最大化分类几何间隔（Max Margin）"
      },
      {
        "key": "B",
        "text": "建立拉格朗日函数，将其转化为对偶问题（Dual Problem）进行求解"
      },
      {
        "key": "C",
        "text": "引入KKT条件（Karush-Kuhn-Tucker）以保证全局最优化"
      },
      {
        "key": "D",
        "text": "强行假设特征之间满足条件独立性"
      }
    ],
    "answer": "ABC",
    "explanation": "支持向量机（SVM）硬间隔/软间隔标准二次凸规划问题的核心求解路径。"
  },
  {
    "id": "MPR137",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 137,
    "type": "multiple",
    "question": "关于支持向量（Support Vectors），下列说法正确的有：",
    "options": [
      {
        "key": "A",
        "text": "它们是距离分类判定超平面最近的那些关键边界训练样本"
      },
      {
        "key": "B",
        "text": "它们的拉格朗日乘子 $\\alpha_i > 0$"
      },
      {
        "key": "C",
        "text": "若从数据集中剔除所有非支持向量样本、重新训练，最终获得的超平面完全不变"
      },
      {
        "key": "D",
        "text": "支持向量只存在于硬间隔SVM中，软间隔模型不包含支持向量"
      }
    ],
    "answer": "ABC",
    "explanation": "支持向量的标志性物理意义（边界决定性、拉格朗日乘子非零性）。软间隔中同样存在。"
  },
  {
    "id": "MPR138",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 138,
    "type": "multiple",
    "question": "软间隔支持向量机引入松弛变量 $\\xi_i$ 的核心技术动因包括：",
    "options": [
      {
        "key": "A",
        "text": "现实中训练样本数据几乎不可能绝对线性可分"
      },
      {
        "key": "B",
        "text": "容忍数据中存在一定程度的离群噪声，避免模型产生严重的过拟合"
      },
      {
        "key": "C",
        "text": "能够使SVM分类超平面的求解问题始终保持良态的凸优化性质"
      },
      {
        "key": "D",
        "text": "能够自动降低原始特征空间的物理维度"
      }
    ],
    "answer": "ABC",
    "explanation": "软间隔SVM中引入松弛变量以增强对线性不可分数据和离群噪声的泛化容忍度。"
  },
  {
    "id": "MPR139",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 139,
    "type": "multiple",
    "question": "下列哪些属于支持向量机（SVM）中常用的经典核函数（Kernel Functions）？",
    "options": [
      {
        "key": "A",
        "text": "线性核函数（Linear Kernel）"
      },
      {
        "key": "B",
        "text": "多项式核函数（Polynomial Kernel）"
      },
      {
        "key": "C",
        "text": "高斯径向基核函数（RBF / Gaussian Kernel）"
      },
      {
        "key": "D",
        "text": "贝叶斯全概率核函数"
      }
    ],
    "answer": "ABC",
    "explanation": "SVM在低维直接计算高维内积的三大最经典的标准化核函数。"
  },
  {
    "id": "MPR140",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 140,
    "type": "multiple",
    "question": "关于感知器算法（Perceptron），下列说法正确的有：",
    "options": [
      {
        "key": "A",
        "text": "其目标是寻找一个权重向量 $w$ 和偏置 $b$，建立判别函数 $g(x) = w^T x + b$"
      },
      {
        "key": "B",
        "text": "优化准则函数基于错分样本到超平面的加权距离之和"
      },
      {
        "key": "C",
        "text": "采用负梯度方向进行迭代权重更新（梯度下降）"
      },
      {
        "key": "D",
        "text": "如果数据是线性不可分的，算法将永远处于震荡状态、无法收敛"
      }
    ],
    "answer": "ABCD",
    "explanation": "感知器算法的目标、准则函数构建、负梯度下降更新法则以及不可分时不收敛的本质缺陷。"
  },
  {
    "id": "MPR141",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 141,
    "type": "multiple",
    "question": "为了解决线性不可分导致感知器不收敛的缺陷，最小平方误差（MSE）判别函数：",
    "options": [
      {
        "key": "A",
        "text": "引入了错误分类的残差平方和作为全新准则函数"
      },
      {
        "key": "B",
        "text": "可以直接通过求导并利用伪逆法（广义逆）进行闭式解的一步求解"
      },
      {
        "key": "C",
        "text": "也可以采用梯度下降法进行渐进式迭代求解"
      },
      {
        "key": "D",
        "text": "要求各类别的协方差矩阵必须严格相等"
      }
    ],
    "answer": "ABC",
    "explanation": "最小平方误差判别（MSE）通过伪逆矩阵 $X^{\\dagger}$ 实现一步闭式直接求解的工程方案。"
  },
  {
    "id": "MPR142",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 142,
    "type": "multiple",
    "question": "在SVM多分类扩展中，“一对多（OVR）”策略与“一对一（OVO）”策略的区别包括：",
    "options": [
      {
        "key": "A",
        "text": "OVR需要训练 $c$ 个分类器，OVO需要训练 $\\frac{c(c-1)}{2}$ 个分类器"
      },
      {
        "key": "B",
        "text": "OVR的每个基分类器都使用全体训练样本，OVO的每个基分类器仅使用对应的两类样本"
      },
      {
        "key": "C",
        "text": "OVO容易受到样本类别不平衡的严重干扰，OVR则完全不存在该缺陷"
      },
      {
        "key": "D",
        "text": "OVO在类别数 $c$ 极大时，需要训练的基分类器数量会发生爆发式增长"
      }
    ],
    "answer": "ABD",
    "explanation": "多分类SVM的一对多与一对一机制在分类器数、样本使用量及不平衡性上的对比。"
  },
  {
    "id": "MPR143",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 143,
    "type": "multiple",
    "question": "支持向量机优化目标中的惩罚因子 $C$，其取值对模型性能的影响表现为：",
    "options": [
      {
        "key": "A",
        "text": "$C$ 趋于无穷大时，模型逼近硬间隔SVM，极易过拟合"
      },
      {
        "key": "B",
        "text": "$C$ 取值过小时，模型对错分样本惩罚极弱，间隔可能很大但会导致欠拟合"
      },
      {
        "key": "C",
        "text": "调整 $C$ 能够精细调节模型在“训练集误差”与“测试集泛化能力”之间的折中"
      },
      {
        "key": "D",
        "text": "$C$ 的取值直接决定了高斯核函数的映射维度"
      }
    ],
    "answer": "ABC",
    "explanation": "惩罚因子 $C$ 对SVM模型复杂度和泛化性的决定性控制作用。"
  },
  {
    "id": "MPR144",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 144,
    "type": "multiple",
    "question": "关于线性判别函数中的判定超平面 $w^T x + b = 0$，其几何性质表现为：",
    "options": [
      {
        "key": "A",
        "text": "权重向量 $w$ 垂直于判定超平面，决定了超平面的法线方向"
      },
      {
        "key": "B",
        "text": "偏置 $b$ 决定了超平面相对于坐标原点的位移距离"
      },
      {
        "key": "C",
        "text": "任意样本点 $x$ 到该超平面的代数距离正比于 $|w^T x + b|$"
      },
      {
        "key": "D",
        "text": "超平面将整个特征空间完美切分为正类区域（$g(x)>0$）和负类区域（$g(x)<0$）"
      }
    ],
    "answer": "ABCD",
    "explanation": "线性判别超平面的法线方向、位移、代数距离以及对特征空间的切分布置。"
  },
  {
    "id": "MPR145",
    "chapter": "模块4｜线性判别函数与支持向量机",
    "originalChapter": "模块4：线性判别与支持向量机",
    "number": 145,
    "type": "multiple",
    "question": "感知器算法准则函数 $J_p(w)$ 具有哪些数学特点？",
    "options": [
      {
        "key": "A",
        "text": "它是一个非负的连续函数"
      },
      {
        "key": "B",
        "text": "在错分样本点处是分段线性的"
      },
      {
        "key": "C",
        "text": "它是一个严格的凸函数，因此局部极小值即为全局最小值"
      },
      {
        "key": "D",
        "text": "它的最小值在所有样本分类完全正确时达到，此时函数值严格等于0"
      }
    ],
    "answer": "ABCD",
    "explanation": "感知器准则函数的关键数学性质（连续、分段线性、凸函数、收敛时值为0）。"
  },
  {
    "id": "MPR146",
    "chapter": "模块5｜集成学习与提升方法",
    "originalChapter": "模块5：集成学习与特征选择/提取",
    "number": 146,
    "type": "multiple",
    "question": "提升学习中经典的AdaBoost算法，其每轮迭代完整涉及到的核心步骤包括：",
    "options": [
      {
        "key": "A",
        "text": "初始化训练样本的均匀概率权重分布 $D_1$"
      },
      {
        "key": "B",
        "text": "在当前权重分布下训练基弱分类器，并计算其分类错误率 $\\varepsilon_t$"
      },
      {
        "key": "C",
        "text": "依据错误率计算当前弱分类器的投票权重 $\\alpha_t$"
      },
      {
        "key": "D",
        "text": "更新样本权重分布，大幅提高错分样本权重，缩小正确分类样本权重，并进行归一化"
      }
    ],
    "answer": "ABCD",
    "explanation": "提升学习算法AdaBoost在单轮串行迭代中的完整核心流程。"
  },
  {
    "id": "MPR147",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块5：集成学习与特征选择/提取",
    "number": 147,
    "type": "multiple",
    "question": "关于特征选择与特征提取的底层考点辨析，正确的有：",
    "options": [
      {
        "key": "A",
        "text": "特征选择不改变特征的原始物理意义，仅仅挑出最优子集"
      },
      {
        "key": "B",
        "text": "特征提取通过空间映射/变换，产生全新物理意义的组合特征"
      },
      {
        "key": "C",
        "text": "两者的共同目标都是降低特征维度，克服维数灾难，提升分类性能"
      },
      {
        "key": "D",
        "text": "特征选择最适合非线性结构，特征提取绝对无法处理非线性结构"
      }
    ],
    "answer": "ABC",
    "explanation": "特征选择（挑子集、保原貌）与特征提取（造新特征、失原貌）的根本原理区别。"
  },
  {
    "id": "MPR148",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块5：集成学习与特征选择/提取",
    "number": 148,
    "type": "multiple",
    "question": "主成分分析（PCA）算法之所以能够广泛用于降维与信息保持，其数学保障在于：",
    "options": [
      {
        "key": "A",
        "text": "投影后的第一主成分具有数据重构误差最小的优良性质"
      },
      {
        "key": "B",
        "text": "投影轴方向成功对应了数据样本投影后方差最大的方向"
      },
      {
        "key": "C",
        "text": "各个主成分之间彼此正交，完全消除了原始特征中的冗余相关性"
      },
      {
        "key": "D",
        "text": "它是一种强监督的分类边界查找算法"
      }
    ],
    "answer": "ABC",
    "explanation": "PCA通过协方差矩阵特征值分解实现最大方差保持与最小重构误差的数学内涵。"
  },
  {
    "id": "MPR149",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块5：集成学习与特征选择/提取",
    "number": 149,
    "type": "multiple",
    "question": "Fisher线性判别（LDA）与主成分分析（PCA）的同异点辨析包括：",
    "options": [
      {
        "key": "A",
        "text": "相同点：两者都属于线性降维技术，都通过投影矩阵将高维空间变换到低维空间"
      },
      {
        "key": "B",
        "text": "不同点：PCA是无监督的、关注全局最大方差；LDA是有监督的、关注类别间的最大分离"
      },
      {
        "key": "C",
        "text": "不同点：PCA降维后的维度受原始特征限制，LDA降维后的维度最多为 $c-1$"
      },
      {
        "key": "D",
        "text": "相同点：两者都强制要求属性之间满足朴素贝叶斯的条件独立性假设"
      }
    ],
    "answer": "ABC",
    "explanation": "PCA（无监督保持全局最大方差）与LDA（有监督极大化类间/类内比值）的深度对比。"
  },
  {
    "id": "MPR150",
    "chapter": "模块6｜特征选择与特征提取",
    "originalChapter": "模块5：集成学习与特征选择/提取",
    "number": 150,
    "type": "multiple",
    "question": "特征选择搜索策略中，属于启发式/次优搜索策略的有：",
    "options": [
      {
        "key": "A",
        "text": "序列向前选择（SFS，一前向加特征）"
      },
      {
        "key": "B",
        "text": "序列向后选择（SBS，一后向剔特征）"
      },
      {
        "key": "C",
        "text": "穷举搜索（Exhaustive Search，彻底遍历所有组合）"
      },
      {
        "key": "D",
        "text": "双向搜索（Bidirectional Search）"
      }
    ],
    "answer": "ABD",
    "explanation": "特征选择中启发式搜索策略的典型代表；C项穷举搜索属于全局最优最优搜索。"
  }
];
