import { createFileRoute } from '@tanstack/react-router'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  demoGetGreetingOptions,
  demoGetGreetingQueryKey,
} from '@/heyapi/@tanstack/react-query.gen'

// Aggregation of query keys used in About route -> easy to bulk refresh
export const routeAboutQueryKeys = {
  demoGetGreetingQueryKey,
} as const

const About = observer(() => {
  // Example: Orval
  // const { data, isLoading } = useQuery({
  //   ...getDemoGetGreetingQueryOptions(),
  //   queryKey: routeAboutQueryKeys.getDemoGetGreetingQueryKey(),
  // })

  // Example: HeyAPI
  const { data, isLoading } = useQuery({
    ...demoGetGreetingOptions(),
    queryKey: routeAboutQueryKeys.demoGetGreetingQueryKey(),
  })

  useEffect(() => {
    console.log('=== TEST data', { message: data?.message, isLoading })
  }, [data, isLoading])

  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>

        <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
          A small starter with room to grow.
        </h1>

        <p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
          TanStack Start gives you type-safe routing, server functions, and
          modern SSR defaults. Use this as a clean foundation, then layer in
          your own routes, styling, and add-ons.
        </p>
      </section>
    </main>
  )
})

export const Route = createFileRoute('/about')({
  component: About,
})
