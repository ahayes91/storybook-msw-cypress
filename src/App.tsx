import reactLogo from './assets/react.svg'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

export const FullPageApp = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/repos/TanStack/query',
      )
      return await response.json()
    },
  })

  if (isPending) return <>'Loading...'</>

  if (error) return <>'An error has occurred: ' + error.message</>

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{data.full_name}</h2>
      <p>{data.description}</p>
      <div>{isFetching ? <p>'Updating...'</p> : ''}</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FullPageApp />
    </QueryClientProvider>
  )
}
