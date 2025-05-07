import { useEffect, useState } from "react"

import ChatInterface from "../components/chat/ChatInterface"
import UserSidebar from "../components/chat/UserSidebar"
import { useParams } from "react-router-dom"

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const params = useParams()
  
  useEffect(() => {
    if (params.userId) {
      setSelectedUser(params.userId)
    }
  }, [params.userId])

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-8rem)] overflow-hidden rounded-xl border border-gray-200 shadow-xl">
      <div className="hidden md:block w-72 h-full border-r border-gray-200">
        <UserSidebar onSelectUser={setSelectedUser} selectedUser={selectedUser} />
      </div>
      
      <div className="flex-1 h-full">
        <ChatInterface selectedUser={selectedUser} />
      </div>
    </div>
  )
}