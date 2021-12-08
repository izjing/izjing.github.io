module.exports = {
    lang: 'zh-CN',
    title: 'izjing的记忆仓库',
    description: '好记性不如烂笔头',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/49363439?v=4',
        // 顶部导航栏
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: [{
                    text: 'Foo',
                    link: '/js/',
                }, '/group/bar.md'],
            },

        ],
        sidebar: {
            '/': [
                {
                    text: 'Guide',
                    children: [{
                        text: 'Foo',
                        link: '/js/',
                    }, '/guide/getting-started.md'],
                },
            ],
            '/js/': [
                {
                    text: 'Guide',
                    children: ['/guide/README.md', '/guide/getting-started.md'],
                },
            ],
            '/reference/': [
                {
                    text: 'Reference',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        },
    },
}