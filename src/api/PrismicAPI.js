/* eslint-disable class-methods-use-this */
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';

class PrismicAPI {
    async getAllPosts() {
        const posts = await Client.query(
            Prismic.Predicates.at('document.type', 'blog-post'),
        );
        return posts.results;
    }

    async getCategories() {
    	const categories = await Client.query(
    		Prismic.Predicates.at('document.type', 'category')
    	);
    	return categories.results.map(cat => cat.uid);
    }
}

const api = new PrismicAPI();

export default api;
