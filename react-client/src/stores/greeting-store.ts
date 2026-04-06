import { makeAutoObservable } from 'mobx'
import type { QueryClient } from '@tanstack/react-query'
import {
  demoPutUpdateGreeting,
  getDemoGetGreetingQueryKey,
} from '@/orval/default'

export class GreetingStore {
  constructor() {
    makeAutoObservable(this)
  }

  // MARK: Actions

  public async updateGreeting(input: { queryClient: QueryClient }) {
    try {
      await demoPutUpdateGreeting({ newGreeting: 'This is a new greeting!' })

      await input.queryClient.refetchQueries({
        queryKey: getDemoGetGreetingQueryKey(),
      })

      // await input.queryClient.invalidateQueries({
      //   queryKey: getDemoGetGreetingQueryKey(),
      // })
    } catch (err) {
      console.error('GreetingStore updateGreeting - error', err)
      throw err
    }
  }
}
