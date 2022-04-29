const { defaultTheme } = require('vuepress')
module.exports = {
    lang: 'zh-CN',
    title: 'izjing的记忆仓库',
    description: '好记性不如烂笔头',
    theme: defaultTheme({
        logo: 'https://avatars.githubusercontent.com/u/49363439?v=4',
        navbar: [
            // NavbarItem
            {
                text: 'JS系列',
                link: '/js/',
            },
            // NavbarGroup
            // {
            //     text: 'Group',
            //     children: [{
            //         text: 'JS系列',
            //         link: '/js/',
            //     }, '/group/bar.md'],
            // },
        ],
        sidebar: {
            '/': [
                {
                    text: 'JS系列',
                    link: '/js/Polyfill/bind',
                },
                // {
                //     text: 'vue系列',
                //     link: '/js/Polyfill/bind',
                // },
                {
                    text: 'webpack系列',
                    link: '/webpack/mianshiti',
                },
                {
                    text: '微前端系列',
                    link: '/singleSpa/',
                },
            ],
            '/js/': [
                {
                    text: 'JS系列',
                    children: [{
                        text: 'JS手写实现',
                        children: [{
                            text: 'call',
                            link: '/js/Polyfill/call',
                        },
                            {
                                text: 'apply',
                                link: '/js/Polyfill/apply',
                            },
                            {
                                text: 'bind',
                                link: '/js/Polyfill/bind',
                            },
                            {
                                text: '模拟new',
                                link: '/js/Polyfill/new',
                            },]
                    },
                        {
                            text: 'event-loop',
                            link: '/js/event-loop',
                        },],
                },
                {
                    text: 'PromiseA+',
                    link: '/js/PromiseA+',
                },
                {
                    text: '正则',
                    link: '/js/RegExp',
                },
            ],
            '/webpack/': [
                {
                    text: 'webpack面试题',
                    link: '/webpack/mianshiti',
                },
                {
                    text: 'webpack原理',
                    children: [{
                        text: 'loader',
                        link: '/webpack/sourceCode/loader',
                    }]
                }
            ],
            '/singleSpa/': [
                {
                    text: '隔离JS',
                    link: '/singleSpa/sandbox',
                }
            ],
        },
    }),
}
