window.QUIZ_DATA = {
  "title": "文本与 Web 挖掘刷题网站",
  "subtitle": "100道选择题｜多文件工程版｜带解析",
  "sourceName": "《文本与Web挖掘》深度测评题库（100道选择题）",
  "total": 100,
  "chapters": [
    {
      "id": "ch1",
      "title": "第1部分：文本挖掘基础与数据处理环境",
      "shortTitle": "文本挖掘基础与数据处理环境",
      "questionIds": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "id": "ch2",
      "title": "第2部分：K-最近邻（KNN）算法深度解析",
      "shortTitle": "K-最近邻（KNN）算法深度解析",
      "questionIds": [
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35
      ]
    },
    {
      "id": "ch3",
      "title": "第3部分：文本分类核心概念与应用架构",
      "shortTitle": "文本分类核心概念与应用架构",
      "questionIds": [
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55
      ]
    },
    {
      "id": "ch4",
      "title": "第4部分：文本关联规则分析与 Apriori 算法",
      "shortTitle": "文本关联规则分析与 Apriori 算法",
      "questionIds": [
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80
      ]
    },
    {
      "id": "ch5",
      "title": "第5部分：朴素贝叶斯分类器及概率模型",
      "shortTitle": "朴素贝叶斯分类器及概率模型",
      "questionIds": [
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100
      ]
    }
  ],
  "questions": [
    {
      "id": 1,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "在文本挖掘流程中，数据采集后的第一个关键环节是？",
      "options": [
        {
          "key": "A",
          "text": "特征降维"
        },
        {
          "key": "B",
          "text": "预处理"
        },
        {
          "key": "C",
          "text": "模型训练"
        },
        {
          "key": "D",
          "text": "语义评估"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "根据文本挖掘的标准流程，采集到的原始数据通常是杂乱、非规范的。预处理作为基石，负责对非规范数据进行清理与转化，确保后续挖掘算法有高标准的对象可供建模，没有高质量的预处理，挖掘结果将失去真实性。"
    },
    {
      "id": 2,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "传统数据挖掘主要处理结构化数据，而现代文本挖掘主要面对的对象是？",
      "options": [
        {
          "key": "A",
          "text": "二进制文件"
        },
        {
          "key": "B",
          "text": "关系型数据库表格"
        },
        {
          "key": "C",
          "text": "非结构化数据（如文本、网页）"
        },
        {
          "key": "D",
          "text": "静态Excel报表"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "随着互联网技术发展，挖掘对象已从整齐的行列式结构化数据转向文本、网页等非结构化数据。这类数据由于缺乏固定的模式定义，需要全新的处理理念和算法架构进行深度解析。"
    },
    {
      "id": 3,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "从“结构化处理模式”向“文本挖掘理念”转型的核心意义在于？",
      "options": [
        {
          "key": "A",
          "text": "降低存储设备的硬件成本"
        },
        {
          "key": "B",
          "text": "提升数据的冗余存储率"
        },
        {
          "key": "C",
          "text": "能够解析蕴含在海量非规范文本中的深层语义"
        },
        {
          "key": "D",
          "text": "加快数据的备份速度"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "非结构化数据蕴含了人类社会更丰富的交互信息。转型文本挖掘理念，意味着从单纯的数值统计转向对复杂语义、情感和逻辑关系的自动化抽取与发现，这在传统结构化规则下是无法实现的。"
    },
    {
      "id": 4,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "文本挖掘中，所谓“Web挖掘”的范畴不包括？",
      "options": [
        {
          "key": "A",
          "text": "网页内容的文本分析"
        },
        {
          "key": "B",
          "text": "网页间的链接结构分析"
        },
        {
          "key": "C",
          "text": "用户访问Web站点的日志分析"
        },
        {
          "key": "D",
          "text": "本地离线Excel数据的单元格校对"
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": "Web挖掘侧重于网络环境下的交互数据。离线Excel校对属于传统的、结构化的办公数据处理范畴，不具备Web挖掘典型的非结构化及分布式关联特征。"
    },
    {
      "id": 5,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "为什么传统结构化处理模式不再适用于现代文本挖掘？",
      "options": [
        {
          "key": "A",
          "text": "因为文本数据缺乏固定的行列定义，具有高维度和稀疏性"
        },
        {
          "key": "B",
          "text": "因为结构化处理的算法计算复杂度更低"
        },
        {
          "key": "C",
          "text": "因为文本挖掘不需要考虑数据的采集环节"
        },
        {
          "key": "D",
          "text": "因为文本数据量通常远小于结构化数据"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": "文本数据属于非结构化范畴，不满足传统关系型数据库的范式约束。其特征词构成的空间往往具有极高的维度和严重的稀疏性，必须通过预处理将其转化为向量空间模型（VSM）才能进行后续处理。"
    },
    {
      "id": 6,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "在数据预处理阶段，以下哪项操作的专业描述最为准确？",
      "options": [
        {
          "key": "A",
          "text": "直接生成最终的分类报告"
        },
        {
          "key": "B",
          "text": "对采集到的非规范数据进行清洗、分词及格式转化"
        },
        {
          "key": "C",
          "text": "修改底层硬件配置以适配算法"
        },
        {
          "key": "D",
          "text": "人工对所有采集到的网页进行内容改写"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "预处理是连接数据采集与算法应用的桥梁。其核心任务是将原始文本通过清洗、分词、去除停用词等操作，转化为算法可识别的数值化特征表示。"
    },
    {
      "id": 7,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "文本挖掘理念中，关于采集与预处理的关系，下列说法正确的是？",
      "options": [
        {
          "key": "A",
          "text": "采集是挖掘的终点，预处理是起点"
        },
        {
          "key": "B",
          "text": "采集提供了原始素材，预处理决定了数据资产的可用性"
        },
        {
          "key": "C",
          "text": "预处理仅针对数值型数据，文本数据直接进入训练"
        },
        {
          "key": "D",
          "text": "二者相互独立，互不影响挖掘精度"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "作为数据科学资深专家，我们认为采集是基础，预处理则是对基础的加固与打磨。预处理的质量直接决定了挖掘算法的特征表达效果，是整个流程中最为耗时且关键的一环。"
    },
    {
      "id": 8,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "在现代数据科学环境下，非结构化数据处理的理念更新体现在？",
      "options": [
        {
          "key": "A",
          "text": "强制将所有文本转化为简单的Excel数值"
        },
        {
          "key": "B",
          "text": "采用基于自然语言处理（NLP）的技术链条进行特征抽取"
        },
        {
          "key": "C",
          "text": "放弃对数据质量的要求，单纯追求算法复杂度"
        },
        {
          "key": "D",
          "text": "仅使用人工录入的方式保证数据准确性"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "现代理念强调利用NLP技术链条（如分词、命名实体识别、权重计算等）对非结构化文本进行语义转化，而非简单地将其套入传统数值表格。"
    },
    {
      "id": 9,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "文本挖掘的第一步“数据采集”，通常在Web环境下通过什么手段实现？",
      "options": [
        {
          "key": "A",
          "text": "手工逐条复制网页"
        },
        {
          "key": "B",
          "text": "利用爬虫程序（Spider/Crawler）自动化获取"
        },
        {
          "key": "C",
          "text": "购买实体光盘资料"
        },
        {
          "key": "D",
          "text": "线下问卷调查"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "面对海量的互联网非结构化信息，自动化爬虫技术是高效、实时获取Web挖掘对象的主要手段，也是文本挖掘流程的技术起点。"
    },
    {
      "id": 10,
      "type": "single",
      "module": "文本挖掘基础与数据处理环境",
      "stem": "数据预处理在整个文本挖掘价值链中的战略作用是？",
      "options": [
        {
          "key": "A",
          "text": "提供最终的可视化展示"
        },
        {
          "key": "B",
          "text": "决定了挖掘模型性能的上限（Garbage in, Garbage out）"
        },
        {
          "key": "C",
          "text": "降低服务器的带宽压力"
        },
        {
          "key": "D",
          "text": "替代分类算法的决策过程"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "在数据挖掘界，“垃圾进，垃圾出”是基本准则。预处理的质量直接决定了特征表示的纯度和有效性，进而决定了后续分类、关联规则等算法的表现上限。"
    },
    {
      "id": 11,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法的全称及其核心原理是？",
      "options": [
        {
          "key": "A",
          "text": "K-Neutral Networks，基于神经元权重判别"
        },
        {
          "key": "B",
          "text": "K-Nearest Neighbors，通过距离最近的K个邻居类别进行投票"
        },
        {
          "key": "C",
          "text": "Knowledge-Next Node，基于知识图谱的节点跳转"
        },
        {
          "key": "D",
          "text": "Kernel-Nearest Neighbors，基于核函数的投影映射"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_2]，KNN全称K-Nearest Neighbors，其原理是在预测新点x时，寻找特征空间中距离最近的K个已知点，通过多数表决权决定x的类别。"
    },
    {
      "id": 12,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法被称为“惰性学习”（Lazy Learning）的原因是？",
      "options": [
        {
          "key": "A",
          "text": "算法运行速度极慢，计算效率低"
        },
        {
          "key": "B",
          "text": "不需要对训练样本进行显式的提前建模，仅在预测时才进行计算"
        },
        {
          "key": "C",
          "text": "算法开发者设计时的偷懒行为"
        },
        {
          "key": "D",
          "text": "对硬件性能要求极低"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_16]，KNN在对样本分类结果预测时才对训练样本进行分析，不具备预先训练模型的阶段，因此也被称为基于实例或记忆的学习。"
    },
    {
      "id": 13,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在K=3的邻域判定中，若最近的三个邻居分别为{蓝三角, 红圆, 蓝三角}，新样本被判定为？",
      "options": [
        {
          "key": "A",
          "text": "红圆"
        },
        {
          "key": "B",
          "text": "蓝三角"
        },
        {
          "key": "C",
          "text": "无法判定"
        },
        {
          "key": "D",
          "text": "绿色点"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_2]，KNN遵循多数原则，蓝三角占2/3权重，红圆占1/3，故判定为蓝三角。"
    },
    {
      "id": 14,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "如果K值的取值从3变为5，分类结果发生变化，这说明了？",
      "options": [
        {
          "key": "A",
          "text": "KNN算法不稳定，不适合工业化"
        },
        {
          "key": "B",
          "text": "K值的选取对模型决策边界有显著影响，是核心超参数"
        },
        {
          "key": "C",
          "text": "样本量越大，K值越不重要"
        },
        {
          "key": "D",
          "text": "距离计算公式选择错误"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_3]，K值的变化会改变局部投票的样本构成，从而导致决策偏差，选取合适的K值是KNN应用成功的关键。"
    },
    {
      "id": 15,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "根据[SOURCE_IMAGE_8]，KNN中最常用的欧式距离公式（Euclidean Distance）在二维空间表现为？",
      "options": [
        {
          "key": "A",
          "text": "ρ = |x2 - x1| + |y2 - y1|"
        },
        {
          "key": "B",
          "text": "ρ = sqrt((x2 - x1)² + (y2 - y1)²)"
        },
        {
          "key": "C",
          "text": "ρ = max(|x2 - x1|, |y2 - y1|)"
        },
        {
          "key": "D",
          "text": "ρ = (x2 - x1)² + (y2 - y1)²"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_8]，欧式距离是多维特征空间中两点间的绝对直线距离，计算方式为各维度差值的平方和再开方。"
    },
    {
      "id": 16,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在张三面试Offer的案例[SOURCE_IMAGE_5]中，若K=1，其判定逻辑是？",
      "options": [
        {
          "key": "A",
          "text": "考虑全局所有样本的平均情况"
        },
        {
          "key": "B",
          "text": "仅由距离最近的一个点决定，若最近点为No Offer，则张三判定为No Offer"
        },
        {
          "key": "C",
          "text": "选取所有Offer点进行加权"
        },
        {
          "key": "D",
          "text": "随机从样本库抽取一个结果"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_5]，当K=1时，模型对噪声极其敏感。此时张三的判定完全取决于最近的一个点，若最近点为No Offer，结果即为No Offer。"
    },
    {
      "id": 17,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "接上题案例[SOURCE_IMAGE_6]，当K=3时，距离最近的三个人中有2个Offer，1个No Offer，此时判定为？",
      "options": [
        {
          "key": "A",
          "text": "No Offer"
        },
        {
          "key": "B",
          "text": "Offer"
        },
        {
          "key": "C",
          "text": "重新面试"
        },
        {
          "key": "D",
          "text": "无法判定"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_6]，通过3邻居投票，Offer以2:1的优势胜出，体现了KNN的多数表决机制。"
    },
    {
      "id": 18,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在同样的面试案例中[SOURCE_IMAGE_7]，当K=5时，判定结果为No Offer（3个No Offer vs 2个Offer），这揭示了KNN的什么性质？",
      "options": [
        {
          "key": "A",
          "text": "数据规模越大，判定越容易"
        },
        {
          "key": "B",
          "text": "决策结果会随着邻域范围K的扩大而发生翻转"
        },
        {
          "key": "C",
          "text": "Offer类别在数据中占据主导地位"
        },
        {
          "key": "D",
          "text": "算法出现了死循环"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_7]，K值的选取直接改变了局部统计特性，导致决策从Offer翻转为No Offer。"
    },
    {
      "id": 19,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "如何在实际工程中选取最优的K值？",
      "options": [
        {
          "key": "A",
          "text": "永远选取K=1以保证局部精度"
        },
        {
          "key": "B",
          "text": "通过交叉验证，绘制错误率随K值变化的曲线，寻找平衡点"
        },
        {
          "key": "C",
          "text": "选取K等于样本总数N"
        },
        {
          "key": "D",
          "text": "随机生成一个正整数"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "通常通过交叉验证测试不同K值下的错误率或方差，选择验证集表现最好的平衡点。K等于样本总数会把局部结构抹平，通常不是合理做法。"
    },
    {
      "id": 20,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "曼哈顿距离（Manhattan Distance）的计算逻辑与欧式距离的区别在于？",
      "options": [
        {
          "key": "A",
          "text": "曼哈顿距离取差值的平方"
        },
        {
          "key": "B",
          "text": "曼哈顿距离是各维度差值绝对值的简单求和"
        },
        {
          "key": "C",
          "text": "曼哈顿距离只适用于三维空间"
        },
        {
          "key": "D",
          "text": "曼哈顿距离必须开根号"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_14]，公式显示曼哈顿距离通过类似街区行走的方式计算，即各特征差值的绝对值之和（如|45-15| + |2-3| + |60-10|）。"
    },
    {
      "id": 21,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "电影分类案例[SOURCE_IMAGE_11]中，计算《加勒比海盗》与《宝贝当家》的欧式距离时，搞笑、拥抱、打斗镜头分别作为？",
      "options": [
        {
          "key": "A",
          "text": "样本量"
        },
        {
          "key": "B",
          "text": "类别标签"
        },
        {
          "key": "C",
          "text": "特征向量的维度"
        },
        {
          "key": "D",
          "text": "计算的常数项"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "每个镜头的数量构成了一个三维特征向量，通过计算向量间的欧式距离来量化电影间的相似度。"
    },
    {
      "id": 22,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "参考[SOURCE_IMAGE_11]数据，若《加勒比海盗》到各电影的距离排序为D4<D5<D6<D2...，当K=3时，分类结果为？",
      "options": [
        {
          "key": "A",
          "text": "动作片（若D4, D5, D6均为动作片）"
        },
        {
          "key": "B",
          "text": "喜剧片"
        },
        {
          "key": "C",
          "text": "爱情片"
        },
        {
          "key": "D",
          "text": "无法判定"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": "根据[SOURCE_IMAGE_12]，当K=3时，距离最近的三部电影均为动作片，故判定为动作片。"
    },
    {
      "id": 23,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在[SOURCE_IMAGE_12]中提到，当K=7时判定结果为“无法判定”，其具体原因是？",
      "options": [
        {
          "key": "A",
          "text": "K值太大超出了计算能力"
        },
        {
          "key": "B",
          "text": "动作片与喜剧片的票数相等（各3部），出现平局"
        },
        {
          "key": "C",
          "text": "爱情片占据了主导地位"
        },
        {
          "key": "D",
          "text": "样本特征发生漂移"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考原文，当K=7时，最近邻中包含3部动作片、3部喜剧片和1部爱情片，前两类票数持平，导致决策冲突。"
    },
    {
      "id": 24,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "关于KNN的非线性分类器特征，下列描述正确的是？",
      "options": [
        {
          "key": "A",
          "text": "它只能处理直线划分的分类问题"
        },
        {
          "key": "B",
          "text": "它具备更强的表达能力，能刻画复杂的决策边界，准确率通常高于线性分类器"
        },
        {
          "key": "C",
          "text": "它的计算过程比线性分类器朴素贝叶斯更简单"
        },
        {
          "key": "D",
          "text": "它对噪声干扰完全免疫"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_16]，KNN是非线性分类器，相比表达能力不足的线性分类器（容易受噪声干扰），KNN能更好地拟合复杂数据分布。"
    },
    {
      "id": 25,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法的一个核心优点是天生支持“增量学习”，这意味着？",
      "options": [
        {
          "key": "A",
          "text": "随着数据增加，算法运行速度变快"
        },
        {
          "key": "B",
          "text": "加入新样本时，无需像其他模型那样重新进行繁重的模型训练"
        },
        {
          "key": "C",
          "text": "它可以自动增加特征维度"
        },
        {
          "key": "D",
          "text": "它不需要占用内存空间"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_17]，由于KNN没有显式的训练过程，新加入的数据只需存入内存作为比对样本即可，无需重新训练。"
    },
    {
      "id": 26,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "当样本集出现严重“类别不平衡”时，KNN的表现通常如何？",
      "options": [
        {
          "key": "A",
          "text": "依然能够完美分类"
        },
        {
          "key": "B",
          "text": "对稀有类别的预测准确率会显著降低"
        },
        {
          "key": "C",
          "text": "自动平衡各类别权重"
        },
        {
          "key": "D",
          "text": "运行时间显著缩短"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_17]，在样本不平衡时，投票机制会被大类别主导，导致小类别（稀有类别）很难在K个近邻中占据多数。"
    },
    {
      "id": 27,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在数据量不多但代表性较强时，KNN的分类效果？",
      "options": [
        {
          "key": "A",
          "text": "极差，必须依靠深度学习"
        },
        {
          "key": "B",
          "text": "较好，因为其基于实例的特性能够捕捉代表性规律"
        },
        {
          "key": "C",
          "text": "无法运行，因为数据量不足"
        },
        {
          "key": "D",
          "text": "会产生死循环"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_17]，KNN在小样本但高代表性数据集上表现稳健。"
    },
    {
      "id": 28,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法在预测阶段的计算开销大的原因是？",
      "options": [
        {
          "key": "A",
          "text": "模型文件太大"
        },
        {
          "key": "B",
          "text": "需要对预测点与所有训练样本点计算距离并排序"
        },
        {
          "key": "C",
          "text": "网络传输延迟高"
        },
        {
          "key": "D",
          "text": "特征工程太复杂"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_8]和[SOURCE_IMAGE_17]，KNN是即时计算，每次预测都要遍历所有存储的样本点计算距离，导致时间复杂度较高。"
    },
    {
      "id": 29,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "若在电影预测中，K取值极小（如K=1），最容易产生的问题是？",
      "options": [
        {
          "key": "A",
          "text": "欠拟合"
        },
        {
          "key": "B",
          "text": "过拟合，受噪声点干扰严重"
        },
        {
          "key": "C",
          "text": "计算效率最高"
        },
        {
          "key": "D",
          "text": "内存占用最小"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "K=1意味着只看最近的一个点。如果该点是离群值或噪声点，分类结果将完全偏离，模型变得极不稳定。"
    },
    {
      "id": 30,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法的可解释性如何？",
      "options": [
        {
          "key": "A",
          "text": "非常强，每一步都有严密的数学公式推导"
        },
        {
          "key": "B",
          "text": "不强，难以解释为什么K个近邻就能代表该样本的本质属性"
        },
        {
          "key": "C",
          "text": "完美，优于决策树"
        },
        {
          "key": "D",
          "text": "与逻辑回归一致"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_17]，KNN属于一种基于相似性的启发式判别，缺乏像逻辑回归那样的参数概率解释。"
    },
    {
      "id": 31,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "下列关于欧式距离计算的案例，正确的是？",
      "options": [
        {
          "key": "A",
          "text": "(45, 2, 10) 与 (15, 3, 60) 的距离是 sqrt(30² + (-1)² + (-50)²)"
        },
        {
          "key": "B",
          "text": "距离计算结果一定是整数"
        },
        {
          "key": "C",
          "text": "距离计算不需要考虑维度的单位"
        },
        {
          "key": "D",
          "text": "欧式距离只能在两维使用"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": "参考[SOURCE_IMAGE_11]中的D1计算逻辑，距离是对应坐标差值平方和的开方。"
    },
    {
      "id": 32,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在曼哈顿距离计算中，点A(10, 20)与点B(15, 12)的距离为？",
      "options": [
        {
          "key": "A",
          "text": "5"
        },
        {
          "key": "B",
          "text": "8"
        },
        {
          "key": "C",
          "text": "13"
        },
        {
          "key": "D",
          "text": "sqrt(89)"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "|10-15| + |20-12| = 5 + 8 = 13。"
    },
    {
      "id": 33,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法在处理海量高维文本数据时，最大的挑战在于？",
      "options": [
        {
          "key": "A",
          "text": "无法提取特征"
        },
        {
          "key": "B",
          "text": "维数灾难导致距离计算失效及计算性能瓶颈"
        },
        {
          "key": "C",
          "text": "不支持中文分词"
        },
        {
          "key": "D",
          "text": "分类类别太多"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "高维空间中距离计算不仅极其耗时，且样本点在空间中变得极其稀疏，使得“近邻”的概念不再可靠。"
    },
    {
      "id": 34,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "KNN算法常被称为“基于记忆的学习”，这是因为它？",
      "options": [
        {
          "key": "A",
          "text": "会记住所有用户的姓名"
        },
        {
          "key": "B",
          "text": "本质上是存储所有训练实例并在查询时检索"
        },
        {
          "key": "C",
          "text": "具有很强的逻辑推理能力"
        },
        {
          "key": "D",
          "text": "算法复杂度随时间而降低"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_16]，算法不通过抽象规律来简化数据，而是通过“记住”所有实例来实现判别。"
    },
    {
      "id": 35,
      "type": "single",
      "module": "K-最近邻（KNN）算法深度解析",
      "stem": "在进行KNN分类前，对不同维度的特征进行归一化处理的原因是？",
      "options": [
        {
          "key": "A",
          "text": "减少存储空间"
        },
        {
          "key": "B",
          "text": "防止单位差异（如年收入与年龄）对距离计算产生不合理的权重倾斜"
        },
        {
          "key": "C",
          "text": "算法必须处理0到1之间的数据"
        },
        {
          "key": "D",
          "text": "为了提高分词的速度"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "欧式距离对各维度数值大小敏感，若某一维数值极大（如收入），它将主导平方和结果。归一化确保每个特征对分类决策的贡献在同一量级。"
    },
    {
      "id": 36,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "文本分类（Text Categorization）最核心的任务描述是？",
      "options": [
        {
          "key": "A",
          "text": "对海量文本进行加密和存储"
        },
        {
          "key": "B",
          "text": "将一篇文本分到分类体系中一个或多个预定义类别的过程"
        },
        {
          "key": "C",
          "text": "计算文档中的所有字符总数"
        },
        {
          "key": "D",
          "text": "自动续写新闻内容"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_22]，文本分类本质上是一种标签赋予过程，即将特定文档映射到已有的 taxonomy（分类体系）中。"
    },
    {
      "id": 37,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "在文本分类系统中，“标注集”的封闭性原则是指？",
      "options": [
        {
          "key": "A",
          "text": "标注集中的标签可以无限增加"
        },
        {
          "key": "B",
          "text": "系统无法预测并输出标注集之外的任何新类别"
        },
        {
          "key": "C",
          "text": "所有文档必须同时被打上所有标签"
        },
        {
          "key": "D",
          "text": "分类结果只能由人工审核通过"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_24]，分类器输出的结果一定属于预定义的标注集。若输入属于“旅游”的文档而系统中仅有“财经”和“体育”，结果必然产生偏离，需通过重新定义标注集解决。"
    },
    {
      "id": 38,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "文本分类在电子商务中的典型应用场景是？",
      "options": [
        {
          "key": "A",
          "text": "获取用户的地理位置信息"
        },
        {
          "key": "B",
          "text": "自动统计并划分用户反馈评价的正负情感极性"
        },
        {
          "key": "C",
          "text": "修改商品的库存数量"
        },
        {
          "key": "D",
          "text": "生成随机的商品广告"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_27]，商家利用文本分类（情感分析）对海量评论进行极性划分，以获取精准的用户反馈统计。"
    },
    {
      "id": 39,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "多标签分类（Multi-label Classification）与单标签分类的区别在于？",
      "options": [
        {
          "key": "A",
          "text": "前者需要更多的服务器资源"
        },
        {
          "key": "B",
          "text": "前者允许一篇文档同时属于多个类别标签"
        },
        {
          "key": "C",
          "text": "后者不需要训练数据集"
        },
        {
          "key": "D",
          "text": "后者只能处理二元分类问题"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_24]和[SOURCE_IMAGE_29]，单标签（每篇文档一个类别）是最常见情形，而多标签则允许内容（如“运动+旅游”）被同时归入多个相关类。"
    },
    {
      "id": 40,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "文本分类通常被归类为哪种机器学习模式？",
      "options": [
        {
          "key": "A",
          "text": "无监督学习"
        },
        {
          "key": "B",
          "text": "有监督的学习（Supervised Learning）"
        },
        {
          "key": "C",
          "text": "强化学习"
        },
        {
          "key": "D",
          "text": "生成式对抗网络"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_21]，文本分类依赖于已知的标注体系和训练数据集，通过学习特征与标签间的映射规律来预测新文本。"
    },
    {
      "id": 41,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "关于“分类”与“标签”在逻辑关联上的差异，描述正确的是？",
      "options": [
        {
          "key": "A",
          "text": "分类与内容通常是一对多关系，具有包含性"
        },
        {
          "key": "B",
          "text": "分类与内容通常是一对一关系，且分类之间互相独立、具有排他性"
        },
        {
          "key": "C",
          "text": "标签必须是封闭的，不能新增"
        },
        {
          "key": "D",
          "text": "二者在技术实现上完全没有任何区别"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_29]，在标准体系中，分类具有排他性（如属于政治就不属于经济），而标签则常用于多维度描述。"
    },
    {
      "id": 42,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "在2010年代之前，占主导地位的文本分类模型属于？",
      "options": [
        {
          "key": "A",
          "text": "基于Transformer的预训练模型"
        },
        {
          "key": "B",
          "text": "基于统计的“浅层学习”模型（如NB, SVM, KNN）"
        },
        {
          "key": "C",
          "text": "生成式AI模型"
        },
        {
          "key": "D",
          "text": "纯人工规则匹配模型"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_23]和[SOURCE_IMAGE_30]，早期由于算力和算法限制，浅层学习模型在准确性和稳定性上占据主流地位。"
    },
    {
      "id": 43,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "浅层学习模型（如SVM, NB）在处理文本时最核心的局限性是？",
      "options": [
        {
          "key": "A",
          "text": "计算速度太慢"
        },
        {
          "key": "B",
          "text": "高度依赖于人工设计的特征工程，难以捕捉深层语义和上下文信息"
        },
        {
          "key": "C",
          "text": "无法在Linux系统运行"
        },
        {
          "key": "D",
          "text": "只能处理英文文本"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_23]和[SOURCE_IMAGE_31]，浅层模型依赖BoW或TF-IDF等特征，无法理解单词间的复杂语义关联。"
    },
    {
      "id": 44,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "深度学习模型（如CNN, RNN）在文本分类中的主要优势体现在？",
      "options": [
        {
          "key": "A",
          "text": "不需要任何数据即可运行"
        },
        {
          "key": "B",
          "text": "能自动从原始文本中挖掘出丰富的语义表示，避免了繁琐的人工设计特征"
        },
        {
          "key": "C",
          "text": "消耗的计算资源比浅层模型更少"
        },
        {
          "key": "D",
          "text": "结果具有更强的法律证据效力"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_23]，深度学习方法通过多层网络结构实现了特征的自动学习。"
    },
    {
      "id": 45,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "文本分类在舆情监测中的战略价值主要体现为？",
      "options": [
        {
          "key": "A",
          "text": "增加网络新闻的阅读量"
        },
        {
          "key": "B",
          "text": "实时跟踪、识别并分析公众对特定事件的情感倾向及热点主题"
        },
        {
          "key": "C",
          "text": "封锁所有负面言论"
        },
        {
          "key": "D",
          "text": "自动给用户发送短信通知"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_25]和[SOURCE_IMAGE_46]，分类技术是舆情监测的核心，用于快速、自动地将海量社媒信息结构化。"
    },
    {
      "id": 46,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "一个完善的文本分类流程通常包括：文本采集、预处理、特征表示、分类器学习和？",
      "options": [
        {
          "key": "A",
          "text": "硬件性能压测"
        },
        {
          "key": "B",
          "text": "模型评价与分类预测"
        },
        {
          "key": "C",
          "text": "数据库表结构重组"
        },
        {
          "key": "D",
          "text": "网站前端界面设计"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_28]和[SOURCE_IMAGE_30]，分类预测是最终目的，而评价则是验证模型泛化能力的关键步骤。"
    },
    {
      "id": 47,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "下列哪种算法不属于文本分类中的“浅层学习”范畴？",
      "options": [
        {
          "key": "A",
          "text": "朴素贝叶斯（NB）"
        },
        {
          "key": "B",
          "text": "决策树（DT）"
        },
        {
          "key": "C",
          "text": "随机森林（RF）"
        },
        {
          "key": "D",
          "text": "Transformer"
        }
      ],
      "answer": [
        "D"
      ],
      "explanation": "参考[SOURCE_IMAGE_30]，Transformer是深度学习领域的前沿架构，不属于传统的基于统计的浅层学习模型。"
    },
    {
      "id": 48,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "“垃圾邮件过滤”系统利用文本分类技术的主要贡献是？",
      "options": [
        {
          "key": "A",
          "text": "扩大了邮件的存储容量"
        },
        {
          "key": "B",
          "text": "提高了邮件发送的保密性"
        },
        {
          "key": "C",
          "text": "有效识别过滤垃圾内容，显著提升了用户的使用效率"
        },
        {
          "key": "D",
          "text": "减少了邮件的字符长度"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "参考[SOURCE_IMAGE_27]，垃圾邮件过滤是文本分类最经典、应用最广泛的工程实践之一。"
    },
    {
      "id": 49,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "主题分类（Topic Classification）常见的标注集标签包括？",
      "options": [
        {
          "key": "A",
          "text": "积极、消极、中性"
        },
        {
          "key": "B",
          "text": "金融、体育、军事、社会"
        },
        {
          "key": "C",
          "text": "导出、矛盾、中立"
        },
        {
          "key": "D",
          "text": "是、否"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_26]，主题分类针对的是文章的内容题材范畴。"
    },
    {
      "id": 50,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "浅层学习模型在什么场景下仍具备较强的生命力？",
      "options": [
        {
          "key": "A",
          "text": "算力极端匮乏且对领域适应性有较高要求的小规模任务中"
        },
        {
          "key": "B",
          "text": "处理PB级别的非结构化短视频数据"
        },
        {
          "key": "C",
          "text": "代替人类进行自动文学创作"
        },
        {
          "key": "D",
          "text": "完全不需要数据标注的任务"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": "参考[SOURCE_IMAGE_31]，浅层模型结构简单、参数少，在复杂任务中往往表现出较好的领域适应性。"
    },
    {
      "id": 51,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "在文本表示步骤中，将文本转化为数字向量的常用方法是？",
      "options": [
        {
          "key": "A",
          "text": "字符加密"
        },
        {
          "key": "B",
          "text": "TF-IDF权重计算或词向量嵌入（Word Embedding）"
        },
        {
          "key": "C",
          "text": "像素点阵映射"
        },
        {
          "key": "D",
          "text": "拼音首字母缩写"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_30]，特征表示（Feature Representation）是算法识别文本内容的数学前提。"
    },
    {
      "id": 52,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "下列应用属于“意图识别”分类任务的是？",
      "options": [
        {
          "key": "A",
          "text": "识别一篇文章属于“科技”还是“财经”"
        },
        {
          "key": "B",
          "text": "智能音箱判断用户的请求是“歌曲搜索”还是“天气查询”"
        },
        {
          "key": "C",
          "text": "自动纠正文章中的错别字"
        },
        {
          "key": "D",
          "text": "统计文章中的标点符号比例"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_26]，意图识别是文本分类在人机交互领域的深度应用。"
    },
    {
      "id": 53,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "文本分类系统若要支持一个全新的类别（如从2类扩展到3类），必须？",
      "options": [
        {
          "key": "A",
          "text": "升级主机的CPU"
        },
        {
          "key": "B",
          "text": "重新定义标注集，并重新训练分类模型"
        },
        {
          "key": "C",
          "text": "在原有模型上直接修改代码注释"
        },
        {
          "key": "D",
          "text": "增加数据的存储带宽"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_24]，由于标注集的封闭性，新增类别必须重构分类逻辑和训练数据。"
    },
    {
      "id": 54,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "与浅层学习相比，深度学习对数据的依赖性？",
      "options": [
        {
          "key": "A",
          "text": "更低，几条数据即可"
        },
        {
          "key": "B",
          "text": "更高，通常需要海量标注数据才能发挥其特征挖掘优势"
        },
        {
          "key": "C",
          "text": "完全没有依赖"
        },
        {
          "key": "D",
          "text": "取决于服务器的颜色"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_31]，深度学习模型结构复杂、参数海量，对标注数据的规模和依赖性显著高于浅层模型。"
    },
    {
      "id": 55,
      "type": "single",
      "module": "文本分类核心概念与应用架构",
      "stem": "自动审核投搞内容中的“色情、暴力、违规广告”利用的是？",
      "options": [
        {
          "key": "A",
          "text": "文本摘要技术"
        },
        {
          "key": "B",
          "text": "文本分类技术"
        },
        {
          "key": "C",
          "text": "文本机器翻译"
        },
        {
          "key": "D",
          "text": "文本语义转码"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_27]，内容合规性审核本质上是一个基于负面信息识别的多分类任务。"
    },
    {
      "id": 56,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "关联规则挖掘的核心战略价值在于发现？",
      "options": [
        {
          "key": "A",
          "text": "数据间的逻辑否定关系"
        },
        {
          "key": "B",
          "text": "存在于大型数据集中预先未知的、有趣的、被隐藏的关系"
        },
        {
          "key": "C",
          "text": "服务器的硬件故障点"
        },
        {
          "key": "D",
          "text": "文本数据的加密密钥"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_35]，关联规则的核心在于从“共现”中挖掘出肉眼难以察觉的高价值商业或业务联系。"
    },
    {
      "id": 57,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "关联规则解释的业务逻辑通常可以概括为？",
      "options": [
        {
          "key": "A",
          "text": "A导致了B的产生（因果律）"
        },
        {
          "key": "B",
          "text": "干了A这件事之后，通常还会干B这件事（关联性）"
        },
        {
          "key": "C",
          "text": "A和B绝对不能同时发生"
        },
        {
          "key": "D",
          "text": "A的成本高于B"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_33]，关联规则反映的是项之间的伴生性，例如“看了某文章之后用户还会看什么”。"
    },
    {
      "id": 58,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "在文本关联规则挖掘的定义中，事务集（Transaction Set）通常对应于？",
      "options": [
        {
          "key": "A",
          "text": "单个词汇的集合"
        },
        {
          "key": "B",
          "text": "整个待处理的文档集"
        },
        {
          "key": "C",
          "text": "数据库的字段名称"
        },
        {
          "key": "D",
          "text": "用户的登录密码"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_35]，每一个事务（Transaction）对应一个文档，因此事务集对应文档集。"
    },
    {
      "id": 59,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "Apriori算法的两个主要执行阶段依次是？",
      "options": [
        {
          "key": "A",
          "text": "分词阶段、分类阶段"
        },
        {
          "key": "B",
          "text": "找出所有频繁项集、利用频繁项集产生强关联规则"
        },
        {
          "key": "C",
          "text": "数据加密、数据解密"
        },
        {
          "key": "D",
          "text": "计算均值、计算方差"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_36]和[SOURCE_IMAGE_40]，这是Apriori的两步走战略：先过滤不达标的低频组合，再在剩下的高频组合中寻找逻辑规律。"
    },
    {
      "id": 60,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "所谓“频繁项集”，必须满足下列哪个数学条件？",
      "options": [
        {
          "key": "A",
          "text": "置信度（Confidence）大于0.5"
        },
        {
          "key": "B",
          "text": "支持度（Support）不低于预设的最小支持度阈值（minS）"
        },
        {
          "key": "C",
          "text": "包含的词项数量必须大于10个"
        },
        {
          "key": "D",
          "text": "出现次数等于总事务数"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_36]，支持度是项集出现的频率。只有足够“频繁”的组合才有研究关联的价值。"
    },
    {
      "id": 61,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "根据[SOURCE_IMAGE_42]的示例数据，若总事务数为4，最小支持度minS=50%，则支持度计数至少为多少才能被列入频繁项集L1？",
      "options": [
        {
          "key": "A",
          "text": "1"
        },
        {
          "key": "B",
          "text": "2"
        },
        {
          "key": "C",
          "text": "3"
        },
        {
          "key": "D",
          "text": "4"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "支持度计数 = 总事务数 * 最小支持度 = 4 * 50% = 2。"
    },
    {
      "id": 62,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "参考[SOURCE_IMAGE_42]的Database D表格，项集{A, C}在事务100和300中同时出现，其支持度计数为？",
      "options": [
        {
          "key": "A",
          "text": "1"
        },
        {
          "key": "B",
          "text": "2"
        },
        {
          "key": "C",
          "text": "3"
        },
        {
          "key": "D",
          "text": "4"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "通过扫描D，发现{A, C}共出现了2次，满足最小支持度计数2的要求。"
    },
    {
      "id": 63,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "Apriori算法利用的“先验性质”是指？",
      "options": [
        {
          "key": "A",
          "text": "如果一个项集是频繁的，其子集一定也是频繁的"
        },
        {
          "key": "B",
          "text": "如果一个项集是非频繁的，则其所有超集也一定是非频繁的（可直接剪枝）"
        },
        {
          "key": "C",
          "text": "项集的出现次数与维度成正比"
        },
        {
          "key": "D",
          "text": "规则必须符合人类的常识"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_38]和Apriori剪枝逻辑，如果1-项集中的“模式”不频繁，那么任何包含“模式”的2-项集、3-项集都不可能频繁，从而大幅优化了搜索空间。"
    },
    {
      "id": 64,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "置信度（Confidence）的数学定义是？",
      "options": [
        {
          "key": "A",
          "text": "A和B同时出现的频率"
        },
        {
          "key": "B",
          "text": "在包含项A的事务中，同时包含项B的条件概率 P(B|A)"
        },
        {
          "key": "C",
          "text": "A出现的总次数除以B出现的总次数"
        },
        {
          "key": "D",
          "text": "数据库的总记录数"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_40]，置信度反映了规则的强度。例如“文本=>分析”的置信度，是指在所有包含“文本”的文档中，有多少也包含了“分析”。"
    },
    {
      "id": 65,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "在[SOURCE_IMAGE_40]的计算中，若规则“存储=>文本”的置信度为1.0（100%），其含义是？",
      "options": [
        {
          "key": "A",
          "text": "所有文档都包含“存储”"
        },
        {
          "key": "B",
          "text": "只要文档中出现了“存储”，就一定会同时出现“文本”"
        },
        {
          "key": "C",
          "text": "“存储”和“文本”是同义词"
        },
        {
          "key": "D",
          "text": "该规则没有任何价值"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "置信度为1.0意味着A是B的充分条件。在此数据中，包含“存储”的文档有2个，且这2个文档都包含了“文本”。"
    },
    {
      "id": 66,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "强关联规则（Strong Association Rules）必须同时满足？",
      "options": [
        {
          "key": "A",
          "text": "最小支持度阈值和最大置信度阈值"
        },
        {
          "key": "B",
          "text": "最小支持度阈值和最小置信度阈值"
        },
        {
          "key": "C",
          "text": "任意支持度和最高置信度"
        },
        {
          "key": "D",
          "text": "只能包含一个特征项"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_40]，强规则不仅要发生频率足够高（支持度），还要逻辑联系足够稳固（置信度）。"
    },
    {
      "id": 67,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "在医学研究中，关联规则挖掘的主要贡献是获取？",
      "options": [
        {
          "key": "A",
          "text": "医院大楼的建筑参数"
        },
        {
          "key": "B",
          "text": "“症药”关系，即特定症状与药物使用之间的强关联规则"
        },
        {
          "key": "C",
          "text": "病人的社保卡余额"
        },
        {
          "key": "D",
          "text": "医生的学历背景"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_47]和[SOURCE_IMAGE_48]，通过分析临床记录，可以发现如“水肿=>利尿剂”这类具有临床指导意义的规律。"
    },
    {
      "id": 68,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "根据[SOURCE_IMAGE_48]，高血压案例中规则“头痛=>头晕”的置信度为53.1%，这说明？",
      "options": [
        {
          "key": "A",
          "text": "53.1%的人都有头痛"
        },
        {
          "key": "B",
          "text": "出现头痛症状的患者中，有超过一半的人伴有头晕，暗示脑部血管相关性"
        },
        {
          "key": "C",
          "text": "头痛一定会导致头晕"
        },
        {
          "key": "D",
          "text": "该规则不属于强规则"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "高置信度揭示了症状间的共生关系。规则2和3均为强规则，辅助医生进行辅助诊断。"
    },
    {
      "id": 69,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "关联规则在搜索引擎优化（SEO）中的应用逻辑是？",
      "options": [
        {
          "key": "A",
          "text": "随机增加网页的关键词"
        },
        {
          "key": "B",
          "text": "分析用户搜索行为间的关联趋势，优化关键词布局以提升排名"
        },
        {
          "key": "C",
          "text": "修改网页的背景颜色"
        },
        {
          "key": "D",
          "text": "缩短用户的上网时间"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_45]，SEO通过挖掘用户搜索词项间的关联，使网站内容更贴合搜索习惯。"
    },
    {
      "id": 70,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "内容推荐系统（如某短视频平台）如何利用关联规则？",
      "options": [
        {
          "key": "A",
          "text": "按照字母顺序推送视频"
        },
        {
          "key": "B",
          "text": "根据用户的历史观看行为及偏好关联，推荐可能感兴趣的其他内容"
        },
        {
          "key": "C",
          "text": "仅推送点赞数最高的视频"
        },
        {
          "key": "D",
          "text": "随机打乱推送列表"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_46]，关联规则是个性化推荐引擎的底层逻辑之一（“看了A的人也看了B”）。"
    },
    {
      "id": 71,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "在[SOURCE_IMAGE_42]的计算中，如果最小支持度计数为2，项集{D}的计数为1，那么项集{A, D}？",
      "options": [
        {
          "key": "A",
          "text": "计数值一定大于2"
        },
        {
          "key": "B",
          "text": "一定不是频繁项集，会被Apriori算法在早期剔除"
        },
        {
          "key": "C",
          "text": "是强关联规则的基础"
        },
        {
          "key": "D",
          "text": "需要重新扫描全表"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "根据剪枝性质，{D}不频繁，则包含D的所有组合都不可能频繁。"
    },
    {
      "id": 72,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "在社交媒体分析中，关联规则可以帮助企业发现？",
      "options": [
        {
          "key": "A",
          "text": "竞争对手的内部财务报表"
        },
        {
          "key": "B",
          "text": "当下的热点话题演变趋势及用户情感关联"
        },
        {
          "key": "C",
          "text": "提高员工的打字速度"
        },
        {
          "key": "D",
          "text": "自动生成违规评论"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_44]，文本挖掘通过共现分析发现热点话题（Topic Modeling的延伸）。"
    },
    {
      "id": 73,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "文本关联规则挖掘在法律文书分析中的作用是？",
      "options": [
        {
          "key": "A",
          "text": "代替法官进行宣判"
        },
        {
          "key": "B",
          "text": "快速找到特定法律条款与相关案例间的强关联，降低检索成本"
        },
        {
          "key": "C",
          "text": "增加律师的诉讼费"
        },
        {
          "key": "D",
          "text": "自动修改法律条文"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_45]，关联规则极大提高了法律工作者的信息处理效率。"
    },
    {
      "id": 74,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "在[SOURCE_IMAGE_43]中，规则{CE}=>{B}的置信度计算方式为？",
      "options": [
        {
          "key": "A",
          "text": "Support({B, C, E}) / Support({C, E})"
        },
        {
          "key": "B",
          "text": "Support({C, E}) / Support({B})"
        },
        {
          "key": "C",
          "text": "Support({B}) / Total"
        },
        {
          "key": "D",
          "text": "随机给一个百分比"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": "根据定义，置信度 = A并B的支持度 / A的支持度。图中显示结果为2/2=100%。"
    },
    {
      "id": 75,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "关联规则通常适用于什么特征的业务应用场景？",
      "options": [
        {
          "key": "A",
          "text": "具有严密时间先后顺序的序列"
        },
        {
          "key": "B",
          "text": "没有明显时间序列、侧重于空间伴生关系的场景"
        },
        {
          "key": "C",
          "text": "纯数值型回归任务"
        },
        {
          "key": "D",
          "text": "硬件性能监控任务"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_33]，关联规则的核心是共现（Co-occurrence），非时间序列逻辑。"
    },
    {
      "id": 76,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "舆情监测中利用关联规则及时了解公众反应，其核心目的是？",
      "options": [
        {
          "key": "A",
          "text": "统计网民的上网时长"
        },
        {
          "key": "B",
          "text": "辅助政府和企业制定相应的应对策略，防范危机"
        },
        {
          "key": "C",
          "text": "预测未来的天气变化"
        },
        {
          "key": "D",
          "text": "增加税收收入"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_46]，这属于文本挖掘在公共治理领域的社会化应用。"
    },
    {
      "id": 77,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "包含三个项的频繁项集被简称为？",
      "options": [
        {
          "key": "A",
          "text": "3-项集"
        },
        {
          "key": "B",
          "text": "三维矩阵"
        },
        {
          "key": "C",
          "text": "频繁三元组"
        },
        {
          "key": "D",
          "text": "三级规则"
        }
      ],
      "answer": [
        "A"
      ],
      "explanation": "参考[SOURCE_IMAGE_39]，Apriori从1-项集逐级递推至k-项集。"
    },
    {
      "id": 78,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "关联规则中的“项（Item）”在文本挖掘语境下通常是指？",
      "options": [
        {
          "key": "A",
          "text": "文档的作者"
        },
        {
          "key": "B",
          "text": "文档中的特征词或关键词"
        },
        {
          "key": "C",
          "text": "数据库的主键ID"
        },
        {
          "key": "D",
          "text": "网页的存储大小"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_35]，项是事务中的元素，在文本中即为分词后的关键词。"
    },
    {
      "id": 79,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "关联规则挖掘生成的规则若置信度过低，意味着？",
      "options": [
        {
          "key": "A",
          "text": "数据完全错误"
        },
        {
          "key": "B",
          "text": "A项和B项之间的联系非常松散，不具备逻辑指导意义"
        },
        {
          "key": "C",
          "text": "算法崩溃了"
        },
        {
          "key": "D",
          "text": "必须更换欧式距离计算"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "置信度低说明A发生时B发生的概率不高，这种关联属于随机共现。"
    },
    {
      "id": 80,
      "type": "single",
      "module": "文本关联规则分析与 Apriori 算法",
      "stem": "Apriori算法通过不断产生“候选集”并扫描数据库进行计数，其最大的计算瓶颈在于？",
      "options": [
        {
          "key": "A",
          "text": "特征项太多"
        },
        {
          "key": "B",
          "text": "需要多次完整扫描数据库，且候选集规模可能指数级增长"
        },
        {
          "key": "C",
          "text": "不支持并行计算"
        },
        {
          "key": "D",
          "text": "硬盘转速不够"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_42]的执行过程，每升一级（从C2到C3）都需要重新扫描全表，海量数据下IO压力巨大。"
    },
    {
      "id": 81,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "朴素贝叶斯模型解决的核心机器学习问题是？",
      "options": [
        {
          "key": "A",
          "text": "无监督聚类"
        },
        {
          "key": "B",
          "text": "有监督分类"
        },
        {
          "key": "C",
          "text": "数据降维"
        },
        {
          "key": "D",
          "text": "逻辑回归"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_50]，它是专门用于解决分类问题的有监督模型，具有坚实的概率论基础。"
    },
    {
      "id": 82,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "朴素贝叶斯分类的核心依据是？",
      "options": [
        {
          "key": "A",
          "text": "计算每个邻居的距离"
        },
        {
          "key": "B",
          "text": "计算并比较样本属于各类别（Class）的后验概率，取其最大值"
        },
        {
          "key": "C",
          "text": "查找关联规则中的强规则"
        },
        {
          "key": "D",
          "text": "构建深度神经网络"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_50]和[SOURCE_IMAGE_53]，其决策准则即 argmax P(C_i|X)，选择概率最大的类别作为预测值。"
    },
    {
      "id": 83,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "在贝叶斯公式中，P(C_i) 表示什么？",
      "options": [
        {
          "key": "A",
          "text": "样本X属于类别 C_i 的条件概率"
        },
        {
          "key": "B",
          "text": "类别 C_i 的先验概率（通常取自训练集中该类别的频率）"
        },
        {
          "key": "C",
          "text": "样本X出现的概率"
        },
        {
          "key": "D",
          "text": "全概率公式的分母"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_50]和[SOURCE_IMAGE_53]，先验概率是基于以往经验得到的该类别分布情况。"
    },
    {
      "id": 84,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "根据[SOURCE_IMAGE_52]，条件概率公式 P(B|A) 的正确表达式是？",
      "options": [
        {
          "key": "A",
          "text": "P(A) / P(B)"
        },
        {
          "key": "B",
          "text": "P(AB) / P(A)"
        },
        {
          "key": "C",
          "text": "P(A) + P(B)"
        },
        {
          "key": "D",
          "text": "P(A) * P(B)"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "这是概率论基础，表示在事件A发生的条件下事件B发生的概率。"
    },
    {
      "id": 85,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "朴素贝叶斯之所以称为“朴素”（Naive），是因为它做出了哪项关键假设？",
      "options": [
        {
          "key": "A",
          "text": "假设数据都是简单的"
        },
        {
          "key": "B",
          "text": "假设特征项（x_1, x_2, ...）之间是相互独立的"
        },
        {
          "key": "C",
          "text": "假设分类结果永远准确"
        },
        {
          "key": "D",
          "text": "假设没有噪声数据"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "这是该算法简化的核心。通过独立性假设，将高维联合概率 P(X|C_i) 简化为各维度概率的乘积，极大地降低了计算复杂度。"
    },
    {
      "id": 86,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "在计算后验概率时，分母 P(X) 通常被忽略或视为常数，其原因是？",
      "options": [
        {
          "key": "A",
          "text": "分母永远等于0"
        },
        {
          "key": "B",
          "text": "P(X) 对于所有类别 C_i 都是相同的，不影响最大值的判定"
        },
        {
          "key": "C",
          "text": "分母不需要计算"
        },
        {
          "key": "D",
          "text": "它是全概率公式，计算太复杂"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_53]，决策只需比较分子大小，分母作为归一化因子对判别结果无直接贡献。"
    },
    {
      "id": 87,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "如果分子项（即某个特征在特定类别下的概率）未知，通常采取的假设是？",
      "options": [
        {
          "key": "A",
          "text": "概率为0"
        },
        {
          "key": "B",
          "text": "假设每个类别出现的概率相等"
        },
        {
          "key": "C",
          "text": "随机赋予一个值"
        },
        {
          "key": "D",
          "text": "忽略该样本"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_53]，在缺乏先验信息时，通常采用等概率假设。"
    },
    {
      "id": 88,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "当数据集中的自变量 X 为连续数值型（如年龄、收入）时，应使用哪种朴素贝叶斯？",
      "options": [
        {
          "key": "A",
          "text": "多项式朴素贝叶斯 (MultinomialNB)"
        },
        {
          "key": "B",
          "text": "伯努利朴素贝叶斯 (BernoulliNB)"
        },
        {
          "key": "C",
          "text": "高斯朴素贝叶斯 (GaussianNB)"
        },
        {
          "key": "D",
          "text": "文本朴素贝叶斯"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "参考[SOURCE_IMAGE_51]和[SOURCE_IMAGE_54]，高斯朴素贝叶斯专门用于处理满足正态分布的连续变量。"
    },
    {
      "id": 89,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "高斯朴素贝叶斯在计算条件概率 P(x_j|C_i) 时，其核心数学前提是？",
      "options": [
        {
          "key": "A",
          "text": "假设特征服从均匀分布"
        },
        {
          "key": "B",
          "text": "假设特征服从高斯（正态）分布，并利用均值 \\mu 和标准差 \\sigma 进行概率映射"
        },
        {
          "key": "C",
          "text": "假设特征服从泊松分布"
        },
        {
          "key": "D",
          "text": "采用拉普拉斯平滑"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_54]的公式，该模型通过均值和标准差构建概率密度函数来计算连续值对应的概率。"
    },
    {
      "id": 90,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "在[SOURCE_IMAGE_55]的贷款案例中，类别频率 P(loan=0) = 0.5 是如何得出的？",
      "options": [
        {
          "key": "A",
          "text": "专家的主观规定"
        },
        {
          "key": "B",
          "text": "训练集中 10 个样本中有 5 个样本的 loan 值为 0（5/10）"
        },
        {
          "key": "C",
          "text": "随机生成的"
        },
        {
          "key": "D",
          "text": "贝叶斯公式的分母"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "利用已知类别训练集计算类别的频率，作为先验概率的估计值。"
    },
    {
      "id": 91,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "参考[SOURCE_IMAGE_55]数据，金融公司在评估24岁新客户时，需计算其在 loan=0 情况下的年龄概率。此时应使用的均值 \\mu 是？",
      "options": [
        {
          "key": "A",
          "text": "29.8"
        },
        {
          "key": "B",
          "text": "21.4"
        },
        {
          "key": "C",
          "text": "8.38"
        },
        {
          "key": "D",
          "text": "2.42"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "图中明确给出了 \\mu_{Age0} = 21.40，这是 loan=0 这一组样本的年龄平均值。"
    },
    {
      "id": 92,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "承上题，计算该概率所需的标准差 \\sigma 应该是？",
      "options": [
        {
          "key": "A",
          "text": "734.85"
        },
        {
          "key": "B",
          "text": "2576.81"
        },
        {
          "key": "C",
          "text": "2.42"
        },
        {
          "key": "D",
          "text": "5900"
        }
      ],
      "answer": [
        "C"
      ],
      "explanation": "根据[SOURCE_IMAGE_55]，\\sigma_{Age0} = 2.42。随后需将 x=24, \\mu=21.4, \\sigma=2.42 代入[SOURCE_IMAGE_54]的公式。"
    },
    {
      "id": 93,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "Scikit-learn (sklearn) 工具库在数据科学中的地位是？",
      "options": [
        {
          "key": "A",
          "text": "仅用于画图的库"
        },
        {
          "key": "B",
          "text": "广泛用于统计分析、机器学习建模及深度学习预研的Python核心库"
        },
        {
          "key": "C",
          "text": "一个数据库存储引擎"
        },
        {
          "key": "D",
          "text": "一个操作系统"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_51]，sklearn 是文本挖掘算法（如朴素贝叶斯、SVM）落地最常用的工具。"
    },
    {
      "id": 94,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "在利用 sklearn 进行文本分类时，将原始文本转化为 TF-IDF 权重矩阵应使用？",
      "options": [
        {
          "key": "A",
          "text": "GaussianNB 类"
        },
        {
          "key": "B",
          "text": "TfidfVectorizer 类"
        },
        {
          "key": "C",
          "text": "CountVectorizer 类"
        },
        {
          "key": "D",
          "text": "LogisticRegression 类"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_51]，TfidfVectorizer 整合了词频计算和逆文档频率计算，是特征提取的关键。"
    },
    {
      "id": 95,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "sklearn 中的 MultinomialNB（多项式朴素贝叶斯）主要适用于？",
      "options": [
        {
          "key": "A",
          "text": "连续的收入数据"
        },
        {
          "key": "B",
          "text": "离散的特征词频率计数数据（典型的文本分类数据）"
        },
        {
          "key": "C",
          "text": "图像的像素数据"
        },
        {
          "key": "D",
          "text": "音频的波形数据"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_51]，文本分类通常通过词项出现次数建模，符合多项式分布假设。"
    },
    {
      "id": 96,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "利用 sklearn 进行文本分类的准备阶段，其流程排序正确的是？",
      "options": [
        {
          "key": "A",
          "text": "预测 => 加载停用词 => 模型评估"
        },
        {
          "key": "B",
          "text": "文档分词 => 加载停用词 => 计算单词权重（TF-IDF）"
        },
        {
          "key": "C",
          "text": "模型训练 => 文档分词 => 硬件采购"
        },
        {
          "key": "D",
          "text": "结果展示 => 预处理 => 采集"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_51]，文本数据必须先经过分词、过滤噪声词（停用词）、量化权重后才能送入贝叶斯模型。"
    },
    {
      "id": 97,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "朴素贝叶斯在处理文本分类时，如果某个词在训练集中未出现（概率为0），会导致整个乘积为0。解决此问题的专业技术手段是？",
      "options": [
        {
          "key": "A",
          "text": "模型剪枝"
        },
        {
          "key": "B",
          "text": "拉普拉斯平滑（Laplace Smoothing）或加一平滑"
        },
        {
          "key": "C",
          "text": "重新采集数据"
        },
        {
          "key": "D",
          "text": "将该词直接删除"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "这是资深数据科学家的常识，通过给概率分子分母增加小的平滑项，防止概率零点对整体判别的影响。"
    },
    {
      "id": 98,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "朴素贝叶斯相对于 KNN 的优势在于？",
      "options": [
        {
          "key": "A",
          "text": "不需要任何数学知识"
        },
        {
          "key": "B",
          "text": "预测速度极快（只需进行简单的乘法运算），适合实时性要求高的场景"
        },
        {
          "key": "C",
          "text": "能够发现隐藏的关联规则"
        },
        {
          "key": "D",
          "text": "可以处理图像边缘检测"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "KNN 预测时需扫描全表，而贝叶斯在训练阶段已经算好了各概率值，预测时仅需几步乘法，效率极高。"
    },
    {
      "id": 99,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "文本挖掘中常用的 TF-IDF 值，其中 IDF（逆文档频率）的作用是？",
      "options": [
        {
          "key": "A",
          "text": "增加常用词（如“的”、“了”）的权重"
        },
        {
          "key": "B",
          "text": "降低在所有文档中都高频出现的通用词权重，突出具有类别区分能力的词项"
        },
        {
          "key": "C",
          "text": "统计文档的总长度"
        },
        {
          "key": "D",
          "text": "增加计算复杂度"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "参考[SOURCE_IMAGE_51]概念，IDF 是区分度词项的放大器，通用词的 IDF 值低。"
    },
    {
      "id": 100,
      "type": "single",
      "module": "朴素贝叶斯分类器及概率模型",
      "stem": "贷款案例[SOURCE_IMAGE_55]中，若最终计算出 P(loan=1|X) > P(loan=0|X)，结论应为？",
      "options": [
        {
          "key": "A",
          "text": "拒绝放贷"
        },
        {
          "key": "B",
          "text": "建议给该客户发放贷款"
        },
        {
          "key": "C",
          "text": "该算法失效"
        },
        {
          "key": "D",
          "text": "需要人工审核"
        }
      ],
      "answer": [
        "B"
      ],
      "explanation": "贝叶斯遵循最大后验概率原则，概率大者即为分类决策结果。"
    }
  ]
};
