import styled from 'styled-components'

const Bar = styled.header`
  height: 48px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  flex-shrink: 0;
`

const ZendeskLogo = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`

const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #2f3941;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const ChevronDown = styled.svg`
  width: 12px;
  height: 12px;
`

const TicketTab = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${props => props.$active ? '#2f3941' : 'transparent'};
  border: 1.5px solid ${props => props.$active ? '#2f3941' : '#87929d'};
  border-radius: 100px;
  padding: 6px 12px;
  margin-left: 8px;
  cursor: pointer;
`

const TicketTabIcon = styled.span`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TicketTabText = styled.span`
  color: ${props => props.$active ? '#fff' : '#2f3941'};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
`

const TicketTabDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #87929d;
`

const TicketTabClose = styled.button`
  background: none;
  border: none;
  color: ${props => props.$active ? '#87929d' : '#68737d'};
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;

  &:hover {
    color: ${props => props.$active ? '#fff' : '#2f3941'};
  }
`

const TabPlus = styled.button`
  background: none;
  border: none;
  color: #68737d;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;

  &:hover {
    color: #2f3941;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const SearchBox = styled.div`
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 220px;
`

const SearchText = styled.span`
  color: #87929d;
  font-size: 13px;
`

const IconButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
`

const ticketNames = {
  23: 'Refund merch', 22: 'Refund that merch', 21: 'Refund all merch',
  20: 'Refund my merch', 19: 'Refund the merch', 18: 'PDF test',
  17: 'Refund on merch', 16: 'PDF preview test', 15: 'Checking in on Dinoco product',
  14: 'Return order', 13: 'Refund issues',
}

function TopBar({ onTabClose, screen, onTabClick, tabOpen, activeTicket }) {
  const tabActive = screen === 'ticket'
  const ticketLabel = activeTicket ? (ticketNames[activeTicket] || `Ticket`) : 'Refund merch'
  const ticketId = activeTicket || 23
  return (
    <Bar>
      <ZendeskLogo viewBox="0 0 26 26" fill="none">
        <path d="M12.7 0.5H0.5v12.2L12.7 0.5z" fill="#2f3941"/>
        <path d="M12.7 25.5V13.3L0.5 25.5h12.2z" fill="#2f3941"/>
        <path d="M13.3 25.5h12.2V13.3L13.3 25.5z" fill="#2f3941"/>
        <path d="M13.3 0.5v12.2l12.2-12.2H13.3z" fill="#2f3941"/>
      </ZendeskLogo>
      <ProductName>
        Support
        <ChevronDown viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5l3 3 3-3" stroke="#2f3941" strokeWidth="1.5" strokeLinecap="round"/>
        </ChevronDown>
      </ProductName>
      {tabOpen && (
        <TicketTab $active={tabActive} onClick={onTabClick}>
          <TicketTabIcon>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={tabActive ? '#87929d' : '#68737d'} strokeWidth="1.5">
              <circle cx="8" cy="8" r="6"/>
              <path d="M8 5v3l2 2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </TicketTabIcon>
          <TicketTabText $active={tabActive}>{ticketLabel}<br/>#{ticketId}</TicketTabText>
          <TicketTabDot />
          <TicketTabClose $active={tabActive} onClick={(e) => { e.stopPropagation(); onTabClose(); }}>×</TicketTabClose>
        </TicketTab>
      )}
      <TabPlus>+</TabPlus>
      <Spacer />
      <SearchBox>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="#87929d">
          <path d="M6.5 1a5.5 5.5 0 014.38 8.82l3.65 3.66a.75.75 0 01-1.06 1.06l-3.66-3.65A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
        <SearchText>Search admin center</SearchText>
      </SearchBox>
      <IconButton>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
          <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#1f73b7"/>
          <path d="M12.5 9.5l.75 1.5 1.5.75-1.5.75-.75 1.5-.75-1.5-1.5-.75 1.5-.75z" fill="#1f73b7"/>
        </svg>
      </IconButton>
      <IconButton>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="#68737d">
          <path d="M1 1h6v6H1V1zm8 0h6v6H9V1zM1 9h6v6H1V9zm8 0h6v6H9V9z"/>
        </svg>
      </IconButton>
      <Avatar />
    </Bar>
  )
}

export default TopBar
