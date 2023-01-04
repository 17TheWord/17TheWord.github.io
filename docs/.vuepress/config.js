import {defaultTheme} from 'vuepress'
import {docsearchPlugin} from "@vuepress/plugin-docsearch";

module.exports = {
    title: '17 TheWord 文档库',
    description: '17 TheWord',
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [['link', {rel: 'icon', href: '/favicon.jpg'}]],
    plugins: [
        docsearchPlugin({
            appId: '2BHALOOIXH',
            apiKey: 'fef475d7eb2e155d48d59cec831d799b',
            indexName: 'scareye',
        }),
    ],
    theme: defaultTheme({
        notFound: ["404 Not Found，页面丢失。"],
        backToHome: "<-回到首页",
        repo: '17TheWord/17TheWord.github.io',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '主站',
                link: 'https://www.scareye.com',
            },
            {
                text: 'API',
                link: '/api/',
            },
            {
                text: '大佬指北',
                link: '/mchelp/',
            },
            {
                text: 'MGC',
                link: '/mgc/',
            },
            {
                text: 'MC_QQ',
                link: '/mc_qq/',
            },
            {
                text: 'Haruka_Guild',
                link: '/haruka_guild/',
            },
        ],

        //左侧列表
        sidebar: {
            '/api/': [
                'README.md',
                'image',
                'lolrecord',
            ],
            '/mchelp/': [
                {
                    text: '介绍',
                    children: [
                        "/mchelp/README.md",
                        "/mchelp/introduce/README.md"
                    ]
                },
                {
                    text: '安装教程',
                    children: [
                        "/mchelp/install/download",
                        "/mchelp/install/package",
                        "/mchelp/install/mod",
                        "/mchelp/install/shadow"
                    ]
                },
                {
                    text: '联机教程',
                    children: [
                        "/mchelp/online/multiplayer",
                        "/mchelp/online/server",
                    ]
                },
                {
                    text: '资源下载',
                    children: [
                        "/mchelp/resource/launcher",
                        "/mchelp/resource/mod",
                        "/mchelp/resource/material",
                        "/mchelp/resource/shadow",
                        "/mchelp/resource/package",
                        "/mchelp/resource/online",
                    ]
                },
                {
                    text: '其他细节',
                    children: [
                        "/mchelp/other/online",
                        "/mchelp/other/mod",
                        "/mchelp/other/shadow_material",
                        "/mchelp/other/another",
                    ]
                },
            ],
            '/mgc/': [
                '/mgc/README.md',
                {
                    text: '问题集锦',
                    collapsible: true,
                    children: ['/mgc/qas/shadow', '/mgc/qas/texture'],
                },
                '/mgc/mistakes',
                '/mgc/other',
                '/mgc/netease_shader',
                '/mgc/author_says',
            ],
            '/mc_qq/': [
                '/mc_qq/README.md',
                {
                    text: '安装',
                    children: [
                        '/mc_qq/install/README.md',
                        '/mc_qq/install/plugin',
                        '/mc_qq/install/mcrcon_plugin',
                        '/mc_qq/install/mcrcon',
                    ]
                },
                {
                    text: '配置',
                    children: [
                        '/mc_qq/config/README.md',
                        '/mc_qq/config/mcserver.md',
                    ]
                },
                '/mc_qq/about',
                '/mc_qq/update',
            ],
            '/haruka_guild/': [
                'README.md',
                'install',
                'update',
            ],
        },
    }),
}
