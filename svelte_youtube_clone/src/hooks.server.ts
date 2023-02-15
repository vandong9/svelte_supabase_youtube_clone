import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
 
function getUserInformation(param: any) {
    return null
}

export const checkCustomPage = async function ({event, resolve}) {
    if (event.url.pathname.startsWith("/custom")) {
        return new Response('custom page')
    }

    const response = await resolve(event);
    return response
}
export const first = async function ({ event, resolve }) {
    console.log('first pre-processing')
    const result = await resolve(event, {
        transformPageChunk: ({html}) =>{
            console.log('first tranform');
            return html
        }
    })
    return result
};

 export const handle = sequence(checkCustomPage, first);