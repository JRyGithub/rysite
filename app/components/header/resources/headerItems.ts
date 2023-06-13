export type HeaderItem = {
    title: string,
    location: string,
    children?: HeaderItem[]
}

export const HeaderItems: HeaderItem[] = [
    {
        title: 'Timeline',
        location: 'timeline'
    },
    {
        title: 'Blog',
        location: 'blog',
        children: [
            {
                title: 'All Blogs',
                location: 'all'
            },
            {
                title: 'UseMemo',
                location: 'useMemo'
            }
        ]
    },
    {
        title: 'Contact',
        location: 'contact'
    }
]
