import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export async function useRequest<T>(
	url: string | (() => string),
	options: UseFetchOptions<T> = {}
) {
	const config = useRuntimeConfig()

	const defaults: UseFetchOptions<T> = {
		baseURL: config.public.apiBase ?? 'https://www.omdbapi.com/',
		query: {
			apiKey: config.public.apiKey,
		},
	}

	const params = defu(options, defaults)

	return await useFetch(url, params)
}
