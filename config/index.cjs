/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'wechat-test',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx01fd1b704abe02bf',
  
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '62c57bf1b19eb3bb603c553f7667dbe8',

  PROVINCE: '深圳',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小陈',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'otWEY6q3mUYetXs3dekKon0LHIaI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UQnXPNp2jnY2TuXgkqQlc-SwwawOnzPNhDoMT6UfITA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'CYL', year: '1999', date: '06-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'MZJ', year: '1995', date: '01-11',
        },
        {
          type: '节日', name: '纪念日', year: '2023', date: '02-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-14' },
//         // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	687J9s11d7Ym-M7z0IwxRzEdq7zHCp34wbxdhNilC1o',

  CALLBACK_USERS: [
    {
      name: 'myself',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'otWEY6ktqEzaK9h8m5iwLmBXMXMc',
    }
  ],

}

module.exports = USER_CONFIG

