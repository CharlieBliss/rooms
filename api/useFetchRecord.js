import { useQuery, queryCache } from 'react-query'
import apiRequest from 'api/apiRequest'

export default (queryKey, id, queryParams = {}) => useQuery(
	[queryKey, id],
	apiRequest({path: `${queryKey}/${id}`,}),
	{
		initialData: () => {
			console.log(queryCache)
			console.log(queryCache.getQueryData([queryKey, queryParams]), queryKey)
			return queryCache.getQueryData([queryKey, queryParams])?.results?.find(data => String(data.id) === id)
		},
		refetchOnWindowFocus: false,

	}
)