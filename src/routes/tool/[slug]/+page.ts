import { error } from '@sveltejs/kit';
import tools from '$lib/data/tools.json';
import { compareLinksFor } from '$lib/data/compare';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
    const tool = tools.find((t) => t.slug === params.slug);

    if (!tool) {
        throw error(404, 'Tool not found');
    }

    const relatedTools = tools
        .filter((t) => t.category === tool.category && t.id !== tool.id)
        .slice(0, 3);

    return {
        tool,
        relatedTools,
        // Driven by `compareWith` on the record: one link per researched pair, so a new
        // pair shows up on both profiles without touching this page.
        compareLinks: compareLinksFor(tool.slug)
    };
};

export const entries: EntryGenerator = () => {
    return tools.map((tool) => ({ slug: tool.slug }));
};
