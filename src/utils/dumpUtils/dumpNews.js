export default function dumpNews(res) {
    const { results, num_results } = res;

    const list = results.map(({
        id,
        abstract,
        byline,
        media,
        published_date,
        section,
        title,
        url,
        views
    }) => ({
        id,
        abstract,
        byline,
        published_date,
        section,
        title,
        url,
        views,
        thumbnail : media && media[0]['media-metadata'][0].url,
        img       : media && media[0]['media-metadata'][2].url
    }));

    const meta = {
        totalCount : num_results
    };

    return {
        list,
        meta
    };
}
