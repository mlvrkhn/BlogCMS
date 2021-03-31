/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable class-methods-use-this */
import Prismic from '@prismicio/client';
import { Client } from '../../prismic-config';

class PrismicAPI {
	async getAllPosts() {
		const posts = await Client.query(
			Prismic.Predicates.at('document.type', 'blog-post')
		);
		return posts.results;
	}

	async getCategories() {
		const categories = await Client.query(
			Prismic.Predicates.at('document.type', 'category')
		);
		return categories.results;
		// return categories.results.map((cat) => cat.uid);
	}

    async getID(category) {
        const cat = await Client.getByUID('category', category)
        return cat.id;
    }

	async getPostsByCategory(category) {
        const id = await this.getID(category);

		const postsByCategory = await Client.query(
			Prismic.Predicates.at('my.blog-post.category', id)
		);
        console.log('🚀 ~ getPostsByCategory ~ postsByCategory', postsByCategory)
	}
}

const api = new PrismicAPI();

export default api;
