import { useClickOutside } from "@kaioken-core/hooks"
import { useRef, Derive, For, useSignal } from "kaioken"

import { username, otherUsers } from "$/state"
import { CircleIcon } from "$/icons/CircleIcon"
import { Button } from "../Button"
import { addUserRefToTextArea } from "./utils"

export function UsersList() {
  const showUsersList = useSignal(false)
  const usersListRef = useRef<HTMLDivElement>(null)
  const userButtonRef = useRef<HTMLButtonElement>(null)
  useClickOutside(usersListRef, () => (showUsersList.value = false), {
    ignore: [userButtonRef],
  })

  return (
    <div className="relative">
      <Button
        ref={userButtonRef}
        onclick={() => (showUsersList.value = !showUsersList.peek())}
        title={`Connected as ${username}`}
        className="flex gap-1"
        style="view-transition-name: user-button;"
      >
        <CircleIcon fill="currentColor" className="text-green-500 w-3" />
        {username}
      </Button>
      <Derive from={showUsersList}>
        {(show) =>
          !show ? null : (
            <div
              ref={usersListRef}
              className="absolute right-0 bottom-0-0 z-10 min-w-full max-h-[calc(100dvh-168px)] overflow-y-auto"
            >
              <ul className="bg-neutral-800 p-1 shadow shadow-neutral-900 rounded text-neutral-300 text-sm">
                <For
                  each={otherUsers}
                  fallback={
                    <li className="text-xs p-2">
                      <i className="text-neutral-400">No users online</i>
                    </li>
                  }
                >
                  {(user) =>
                    user === username.peek() ? null : (
                      <li>
                        <button
                          onclick={() => addUserRefToTextArea(user)}
                          className="p-2 text-xs hover:text-blue-500 w-full text-left"
                          title={`@ ${user}`}
                        >
                          @{user}
                        </button>
                      </li>
                    )
                  }
                </For>
              </ul>
            </div>
          )
        }
      </Derive>
    </div>
  )
}
