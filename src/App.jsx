import { useState, useEffect } from 'react'
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import Views from './Views'
import TicketView from './TicketView'
import MergeTickets from './MergeTickets'
import MergeModal from './MergeModal'
import Notification from './Notification'
import Shell from './Shell'
import './App.css'

function App() {
  const [screen, setScreen] = useState('views')
  const [selectedTickets, setSelectedTickets] = useState([])
  const [mergedTickets, setMergedTickets] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [lastMergeCount, setLastMergeCount] = useState(0)
  const [mergedTicketIds, setMergedTicketIds] = useState([])
  const [showMergeStep1, setShowMergeStep1] = useState(false)
  const [mergeDestination, setMergeDestination] = useState(null)

  const handleViewsMerge = () => {
    setShowMergeStep1(true)
  }

  const handleMergeNext = (dest) => {
    setMergeDestination(dest)
  }

  const handleMergeConfirm = () => {
    setLastMergeCount(selectedTickets.length)
    setMergedTickets(prev => [...prev, ...selectedTickets])
    setMergedTicketIds(prev => [...prev, ...selectedTickets])
    setSelectedTickets([])
    setShowMergeStep1(false)
    setMergeDestination(null)
    setShowNotification(true)
  }

  const handleMergeBack = () => {
    if (mergeDestination) {
      setMergeDestination(null)
    } else {
      setShowMergeStep1(false)
    }
  }

  const handleTicketMergeComplete = (ticketIds) => {
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
      <Shell onTabClose={() => setScreen('views')}>
        {screen === 'views' && (
          <Views
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            mergedTickets={mergedTickets}
            onMerge={handleViewsMerge}
            onTicketClick={() => setScreen('ticket')}
          />
        )}
        {screen === 'ticket' && (
          <TicketView
            onMergeComplete={handleTicketMergeComplete}
            mergedTicketIds={mergedTicketIds}
          />
        )}
        {showNotification && (
          <Notification ticketCount={lastMergeCount} onClose={() => setShowNotification(false)} />
        )}
      </Shell>

      {showMergeStep1 && !mergeDestination && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 100, display: 'flex', justifyContent: 'flex-end' }} onClick={handleMergeBack}>
          <div style={{ width: 380, height: '100%', background: '#fff', boxShadow: '-4px 0 16px rgba(0,0,0,0.1)' }} onClick={(e) => e.stopPropagation()}>
            <MergeTickets
              sourceTickets={selectedTickets}
              onBack={handleMergeBack}
              onNext={handleMergeNext}
            />
          </div>
        </div>
      )}

      {showMergeStep1 && mergeDestination && (
        <MergeModal
          sourceTickets={selectedTickets}
          destinationTicket={mergeDestination}
          onClose={() => setMergeDestination(null)}
          onMerge={handleMergeConfirm}
        />
      )}
    </ThemeProvider>
  )
}

export default App
