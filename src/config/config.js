
const listData = []
for (let i = 0; i < 4; i++) {
    listData.push({
      id:`${i}`,
      href: "http://ant.design",
      name: `用户名 ${i}`,
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      title:
        "原标题：时政微纪录丨决战决胜——习近平指挥脱贫攻坚进行时，决战脱贫攻坚收官之年，如何做好疫情这一道“加试题”"+`${i}`,
      content:
        "17条支持粤港澳大湾区金融措施已落地深圳，深圳口述史工作总结会召开 融媒体时代让政协文史资料,截至5月15日24时，深圳累计报告新冠肺炎病例462例。深圳90天本地感染病例零报告，正在医学观察的无症状感染者清零，在院治疗仅有1例。78名密切",
    });
  }
const draft = []

global.listData = listData;
global.draft = draft;