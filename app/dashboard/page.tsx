'use client'

import { useState } from 'react'
import { AppShell } from '@/components/app-shell'
import { IndividualDashboard } from '@/components/individual-dashboard'
import { Vision2026 } from '@/components/vision-2026'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUser } from '@/lib/user-context'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('my-dashboard')
  const { currentUser } = useUser()
  const isAdmin = currentUser?.role === 'super_admin'
  const currentUserName = currentUser?.name ?? ''
  const currentUserId = currentUser?.id ?? ''

  return (
    <AppShell>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='grid w-full max-w-md grid-cols-2 mb-8'>
          <TabsTrigger value='vision-2026' className='font-bold'>
            2026 Vision
          </TabsTrigger>
          <TabsTrigger value='my-dashboard' className='font-bold'>
            My Dashboard_124
          </TabsTrigger>
        </TabsList>

        <TabsContent value='vision-2026'>
          <Vision2026 isAdmin={isAdmin} />
        </TabsContent>

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
