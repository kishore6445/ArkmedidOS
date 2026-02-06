'use client'

import { useState } from 'react'
import { AppShell } from '@/components/app-shell'
import { IndividualDashboard } from '@/components/individual-dashboard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUser } from '@/lib/user-context'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('my-dashboard')
  const { currentUser, isLoading } = useUser()
  const isAdmin = currentUser?.role === 'super_admin'
  const currentUserName = currentUser?.name ?? ''
  const currentUserId = currentUser?.id ?? ''

  if (isLoading) {
    return (
      <AppShell>
        <div className='flex items-center justify-center min-h-[420px]'>
          <p className='text-sm text-stone-500'>Loading dashboard...</p>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='grid w-full max-w-md grid-cols-1 mb-8'>
          <TabsTrigger value='my-dashboard' className='font-bold'>
            My Dashboard_124
          </TabsTrigger>
        </TabsList>

        <TabsContent value='my-dashboard'>
          <IndividualDashboard
            isAdmin={isAdmin}
            currentUserName={currentUserName}
            currentUserId={currentUserId}
          />
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}
