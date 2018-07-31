var local_database = [
  {
    id:1,
    types:'数学类',
    title: "天上10个太阳后裔射下来9个还有几个？10-1=9！",
    answer: [
      {
        id:1,
        answertext:'2',
        typekey:false
      },
      {
        id: 2,
        answertext: '3',
        typekey: false
      },
      {
        id: 3,
        answertext: '4',
        typekey: false
      },
      {
        id: 4,
        answertext: '对',
        typekey: true
      }
    ],
  },
  {
    id: 2,
    types: '童话类',
    title: "美丽的公主结婚以后就不挂蚊帐了，为什么？",
    answer: [
      {
        id: 1,
        answertext: '公主爱吃大蒜',
        typekey: false
      },
      {
        id: 2,
        answertext: '王子是蚊子大王',
        typekey: false
      },
      {
        id: 3,
        answertext: '她嫁给了青蛙王子',
        typekey: true
      },
      {
        id: 4,
        answertext: '她嫁给了白马王子',
        typekey: false
      },
    ],
  },
  {
    id: 3,
    types: '亲属类',
    title: "娇娇的爸爸在一次难度很大的考试中非常从容，为什么",
    answer: [
      {
        id: 1,
        answertext: '他爸是监考老师',
        typekey: false
      },
      {
        id: 2,
        answertext: '因为考试的是娇娇',
        typekey: false
      },
      {
        id: 3,
        answertext: '因为她爸是校长',
        typekey: false
      },
      {
        id: 4,
        answertext: '以上全对',
        typekey: true
      },
    ],
  },
  {
    id: 4,
    types: '天文类',
    title: "弗兰克林在雷雨中放风筝时说了什么?",
    answer: [
      {
        id: 1,
        answertext: '让暴风雨来的更猛烈些吧',
        typekey: false
      },
      {
        id: 2,
        answertext: '什么也没有说当时他被电麻了',
        typekey: true
      },
      {
        id: 3,
        answertext: '操，今儿他妈风真大',
        typekey: false
      },
      {
        id: 4,
        answertext: '老天爷！还我风筝',
        typekey: false
      },
    ],
  },
  {
    id: 5,
    types: '生物类',
    title: "貂皮、象皮、老虎皮、狮子皮，哪一个比较差？",
    answer: [
      {
        id: 1,
        answertext: '貂皮',
        typekey: false
      },
      {
        id: 2,
        answertext: '象皮',
        typekey: true
      },
      {
        id: 3,
        answertext: '老虎皮',
        typekey: false
      },
      {
        id: 4,
        answertext: '狮子皮',
        typekey: false
      },
    ],
  },
]
module.exports = {
  battlesList: local_database
}