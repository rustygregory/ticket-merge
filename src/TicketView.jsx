import { useState } from 'react'
import styled from 'styled-components'
import MergeModal from './MergeModal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

const TopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ebed;
  flex-shrink: 0;
`

const NextButton = styled.button`
  background: none;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: #f5f5f5;
  }
`

const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

const MainArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid #e9ebed;
`

const ConversationArea = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`

const SidePanel = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
`

const SidePanelContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

const IconNav = styled.div`
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 4px;
  border-left: 1px solid #e9ebed;
  flex-shrink: 0;
`

const NavIcon = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 4px;
  background: ${props => props.$active ? '#e9ebed' : 'transparent'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$active ? '#2f3941' : '#68737d'};

  &:hover {
    background: #e9ebed;
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`

const CountBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
`

const CollapseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  padding: 4px;
  display: flex;
  align-items: center;
`

const SectionDescription = styled.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 16px;
  line-height: 1.4;
`

const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const TicketItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #1f73b7;
  margin-top: 2px;
  flex-shrink: 0;
`

const StatusDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: #e35b51;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  margin-top: 2px;
`

const TicketInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const TicketTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 2px;
`

const TicketSubtitle = styled.div`
  font-size: 13px;
  color: #68737d;
  margin-bottom: 2px;
`

const TicketDate = styled.div`
  font-size: 12px;
  color: #87929d;
`

const EmptyText = styled.p`
  font-size: 13px;
  color: #87929d;
  margin: 0;
`

const Divider = styled.div`
  height: 1px;
  background: #e9ebed;
  margin: 20px 0;
`

const MergeActionBar = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  flex-shrink: 0;
`

const MergeCount = styled.span`
  font-size: 13px;
  color: #2f3941;
  font-weight: 400;
`

const MergeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

const CancelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #2f3941;
  margin-left: auto;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = styled.div`
  border-top: 1px solid #d8dcde;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  flex-shrink: 0;
`

const CloseTabButton = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`

const SubmitButton = styled.button`
  background: #2f3941;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #49545c;
  }
`

const SubmitChevron = styled.button`
  background: #49545c;
  color: #fff;
  border: none;
  border-left: 1px solid rgba(255,255,255,0.2);
  border-radius: 0 4px 4px 0;
  padding: 8px 8px;
  font-size: 13px;
  cursor: pointer;
  margin-left: -8px;

  &:hover {
    background: #5a656d;
  }
`

const mergeSuggestions = [
  { id: 22, title: 'Refund that merch', subtitle: 'that merch', date: 'May 5, 2026, 14:02:30' },
  { id: 21, title: 'Refund all merch', subtitle: 'All', date: 'May 5, 2026, 14:01:55' },
  { id: 20, title: 'Refund my merch', subtitle: 'Get that refund', date: 'May 5, 2026, 14:01:38' },
  { id: 19, title: 'Refund the merch', subtitle: 'Refund the merch', date: 'May 5, 2026, 14:00:09' },
]

const currentTicket = { id: 23, title: 'Refund merch' }

function TicketView({ onMergeComplete, mergedTicketIds = [] }) {
  const [selectedIds, setSelectedIds] = useState([])
  const [showModal, setShowModal] = useState(false)

  const availableTickets = mergeSuggestions.filter(t => !mergedTicketIds.includes(t.id))

  const toggleTicket = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const handleCancel = () => {
    setSelectedIds([])
  }

  const handleMergeClick = () => {
    setShowModal(true)
  }

  const handleMergeConfirm = () => {
    setShowModal(false)
    onMergeComplete(selectedIds)
    setSelectedIds([])
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  return (
    <Container>
      <TopNav>
        <NextButton>
          Next
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#2f3941" strokeWidth="1.5">
            <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </NextButton>
      </TopNav>

      <Body>
        <MainArea>
          <ConversationArea>
            <span style={{ color: '#1f73b7', fontSize: '13px', fontWeight: 600 }}>CC</span>
          </ConversationArea>
        </MainArea>

        <SidePanel>
          <SidePanelContent>
            <SectionHeader>
              <SectionTitle>
                Merge suggestions
                {availableTickets.length > 0 && <CountBadge>{availableTickets.length}</CountBadge>}
              </SectionTitle>
              <CollapseButton>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                  <path d="M4 10l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CollapseButton>
            </SectionHeader>

            {availableTickets.length > 0 ? (
              <>
                <SectionDescription>
                  Review recent unresolved tickets from the same requester to merge into this ticket.
                </SectionDescription>
                <TicketList>
                  {availableTickets.map(ticket => (
                    <TicketItem key={ticket.id}>
                      <Checkbox
                        type="checkbox"
                        checked={selectedIds.includes(ticket.id)}
                        onChange={() => toggleTicket(ticket.id)}
                      />
                      <StatusDot>O</StatusDot>
                      <TicketInfo>
                        <TicketTitle>{ticket.title}</TicketTitle>
                        <TicketSubtitle>{ticket.subtitle}</TicketSubtitle>
                        <TicketDate>{ticket.date}</TicketDate>
                      </TicketInfo>
                    </TicketItem>
                  ))}
                </TicketList>
              </>
            ) : (
              <EmptyText>No suggestions available</EmptyText>
            )}

            <Divider />

            <SectionHeader>
              <SectionTitle>Similar resolved tickets</SectionTitle>
              <CollapseButton>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                  <path d="M4 10l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CollapseButton>
            </SectionHeader>
            <EmptyText>No suggestions available</EmptyText>
          </SidePanelContent>

          {selectedIds.length > 0 && (
            <MergeActionBar>
              <MergeCount>{selectedIds.length} {selectedIds.length === 1 ? 'ticket' : 'tickets'}</MergeCount>
              <MergeButton onClick={handleMergeClick}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                  <path d="M8 2v10" strokeLinecap="round"/>
                  <path d="M5.5 4.5L8 2l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12c-2 0-3 1-4.5 3" strokeLinecap="round"/>
                  <path d="M8 12c2 0 3 1 4.5 3" strokeLinecap="round"/>
                </svg>
                Merge
              </MergeButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </MergeActionBar>
          )}
        </SidePanel>

        <IconNav>
          <NavIcon>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="6" r="3"/>
              <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
            </svg>
          </NavIcon>
          <NavIcon>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="14" height="14" rx="2"/>
              <path d="M7 7h6M7 10h6M7 13h4"/>
            </svg>
          </NavIcon>
          <NavIcon>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5c0-1 1-2 2-2h2a2 2 0 012 1.5l.5 1.5h5a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>
            </svg>
          </NavIcon>
          <NavIcon $active>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3v11" strokeLinecap="round"/>
              <path d="M7 5.5L10 3l3 2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14c-2.5 0-3.5 1-5 3" strokeLinecap="round"/>
              <path d="M10 14c2.5 0 3.5 1 5 3" strokeLinecap="round"/>
            </svg>
          </NavIcon>
          <NavIcon>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="7"/>
              <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavIcon>
          <NavIcon>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="5" height="5" rx="1"/>
              <rect x="12" y="3" width="5" height="5" rx="1"/>
              <rect x="3" y="12" width="5" height="5" rx="1"/>
              <rect x="12" y="12" width="5" height="5" rx="1"/>
            </svg>
          </NavIcon>
          <NavIcon style={{ marginTop: 'auto' }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3v14M3 10h14" strokeLinecap="round"/>
            </svg>
          </NavIcon>
        </IconNav>
      </Body>

      <Footer>
        <CloseTabButton>
          Close tab
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#2f3941" strokeWidth="1.5">
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </CloseTabButton>
        <SubmitButton>Submit as Open</SubmitButton>
        <SubmitChevron>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SubmitChevron>
      </Footer>

      {showModal && (
        <MergeModal
          sourceTickets={selectedIds}
          destinationTicket={currentTicket}
          onClose={handleModalClose}
          onMerge={handleMergeConfirm}
        />
      )}
    </Container>
  )
}

export default TicketView
