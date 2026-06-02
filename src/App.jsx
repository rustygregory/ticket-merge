import { useState, useEffect } from 'react'
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import Views from './Views'
import TicketView from './TicketView'
import Notification from './Notification'
import Shell from './Shell'
import './App.css'

function App() {
  const [screen, setScreen] = useState('views')
  const [showNotification, setShowNotification] = useState(false)
  const [lastMergeCount, setLastMergeCount] = useState(0)
  const [mergedTicketIds, setMergedTicketIds] = useState([])

  const handleMergeComplete = (ticketIds) => {
    setMergedTicketIds(prev => [...prev, ...ticketIds])
    setLastMergeCount(ticketIds.length)
    setShowNotification(true)
  }

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Shell>
        {screen === 'views' && (
          <Views
            onTicketClick={() => setScreen('ticket')}
          />
        )}
        {screen === 'ticket' && (
          <TicketView
            onMergeComplete={handleMergeComplete}
            mergedTicketIds={mergedTicketIds}
          />
        )}
        {showNotification && (
          <Notification ticketCount={lastMergeCount} onClose={() => setShowNotification(false)} />
        )}
      </Shell>
    </ThemeProvider>
  )
}

export default App
