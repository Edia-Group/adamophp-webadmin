"use client"

import ChatInterface from "../components/chat/ChatInterface.tsx"
import { SidebarProvider } from "../components/ui/sidebar"
import UserSidebar from "../components/chat/UserSidebar"
import { useState } from "react"

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)

  return (
    <main className="flex min-h-screen bg-gray-50">
      <SidebarProvider>
        <UserSidebar onSelectUser={setSelectedUser} selectedUser={selectedUser} />
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="w-full max-w-4xl h-[80vh] shadow-xl rounded-xl overflow-hidden border border-gray-200">
            <ChatInterface selectedUser={selectedUser} />
          </div>
        </div>
      </SidebarProvider>
    </main>
  )
}
