{
  'id':9999,
    'name':'Ray的订阅',
    'version':1,
    'author':'Ray',
    supportUri:'',
    checkUpdateUrl:'',
  {
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '朋友圈-广告',
      activityIds: ['com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI'],
      rules: [
        {
          matches: '[text="关闭广告"，"关闭该广告"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1711444157531',//获取链接的方法在上一步有说明
        },
        {
          matches: '[id="com.tencent.mm:id/jy"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1711444151667',
          ],
        },
      ],
    },
  ],
}
  }
  

