import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';

class PrismicAPI {
    getAllPosts() {
        try {
            const res = Client.query(Prismic.Predicates.at('document.type', 'blog-post'));
            if (res) {
                setBlogData(res.results);
            } else {
                console.warn('Homepage document was not found');
                toggleNotFound();
            }
        } catch (error) {
            console.log(error);
        }
        return 'jej'
    }
}

const api = new PrismicAPI();

export default api;
