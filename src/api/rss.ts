import { extract } from '@extractus/feed-extractor'

interface Feed {
    title: string
    description: string
    entries: {
        title: string
        published: string
        enclosure: {
            url: string
        }
        description: string
        summary: string
    }[]
}

export const getEpisodes = () => extract('https://anchor.fm/s/81f880f0/podcast/rss', {
    getExtraEntryFields: (feedEntry: any) => {
        const {
            enclosure,
        } = feedEntry
        return {
            enclosure: {
                url: enclosure['@_url'],
                type: enclosure['@_type'],
                length: enclosure['@_length']
            },
            summary: feedEntry['itunes:summary']
        }
    }
}) as any as Promise<Feed>

export const getEpisode = (slug: string) =>
    getEpisodes()
        .then(({ entries }) =>
            entries
                .find((ep: { title: string }) =>
                    ep.title.toLowerCase().replaceAll(' ', '-') === slug
                ))