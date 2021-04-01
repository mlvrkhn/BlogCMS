/* eslint-disable indent */
/* eslint-disable no-tabs */
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
			Prismic.Predicates.at('document.type', 'category'),
		);
		return categories.results;
	}

    async getID(uid) {
        const cat = await Client.getByUID('category', uid);
        return cat.id;
    }

	async getPostsByCategory(category) {
        const id = await this.getID(category);
		const postsByCategory = await Client.query(
			Prismic.Predicates.at('my.blog-post.category', id)
		);
        console.log('🚀 ~ getPostsByCategory ~ postsByCategory', postsByCategory.results)
        return postsByCategory.results;
	}
}

const api = new PrismicAPI();

export default api;
