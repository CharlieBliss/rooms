import { useQuery, queryCache } from 'react-query'
import apiRequest from 'api/apiRequest'

export default (queryKey, queryParams) => {

	const { data = {}, status, error } = useQuery(
		[queryKey, { queryParams }],
		apiRequest({path: queryKey, queryParams }),
		{
			initialData: queryCache.getQueryData(queryKey),
			refetchOnWindowFocus: false,
		}
	)
	return {
		data: data.results,
		status,
		error,
		total: data.total,
	}
}