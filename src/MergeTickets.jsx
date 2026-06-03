import { useState, useRef } from 'react'
import styled from 'styled-components'
import { Alert } from '@zendeskgarden/react-notifications'
import { Tooltip } from '@zendeskgarden/react-tooltips'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: #fff;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 16px;
  flex-shrink: 0;
`

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 20px;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: #2f3941;
  }
`

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 20px;
`

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

const StepText = styled.span`
  font-size: 13px;
  color: #2f3941;
  font-weight: 400;
`

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
`

const ProgressSegment = styled.div`
  width: 40px;
  height: 3.5px;
  border-radius: 2px;
  background: ${props => props.$active ? '#2f3941' : '#d8dcde'};
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #2f3941;
  margin: 0 0 8px;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 28px;
`

const SectionLabel = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 8px;
`

const SourceTicketRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
`

const TicketBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const SourceTicketName = styled.span`
  font-size: 14px;
  color: #2f3941;
`

const MoreLinkWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 4px;
`

const MoreLink = styled.span`
  font-size: 13px;
  color: #1f73b7;
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`

const MoreTooltip = styled.div`
  position: absolute;
  top: 50%;
  right: calc(100% + 12px);
  transform: translateY(-50%);
  background: #2f3941;
  border-radius: 8px;
  padding: 16px;
  z-index: 50;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #2f3941;
  }
`

const MoreTooltipTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
`

const MoreTooltipGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column;
  gap: 6px 24px;
`

const MoreTooltipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const MoreTooltipBadge = styled.span`
  background: #49545c;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
`

const MoreTooltipName = styled.span`
  font-size: 13px;
  color: #fff;
`

const FieldLabel = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 24px 0 4px;
`

const FieldHint = styled.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 10px;
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

const InputWrapper = styled.div`
  width: 100%;
  padding: 0 12px;
  border: 1px solid ${props => props.$error ? '#cc3340' : '#c2c8cc'};
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  cursor: text;
  box-sizing: border-box;

  &:focus-within {
    border-color: ${props => props.$error ? '#cc3340' : '#1f73b7'};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(204, 51, 64, 0.15)' : 'rgba(31, 115, 183, 0.15)'};
  }
`

const InputBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
`

const InputTicketName = styled.span`
  font-size: 14px;
  color: #2f3941;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 16px;
  padding: 0 4px;
  margin-left: auto;
  flex-shrink: 0;

  &:hover {
    color: #2f3941;
  }
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  min-width: 60px;
  padding: 0;
`

const Dropdown = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;

  &:hover {
    background: #edf7ff;
  }
`

const DropdownBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  flex-shrink: 0;
`

const InputError = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #cc3340;
  margin-top: 8px;
`

const SuggestionsLabel = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #2f3941;
  margin-top: 20px;
  margin-bottom: 12px;
`

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const SuggestionCard = styled.div`
  border: 1.5px solid ${props => props.$active ? '#1f73b7' : '#d8dcde'};
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  background: ${props => props.$active ? '#edf7ff' : '#fff'};
  transition: border-color 0.15s, background 0.15s;

  &:hover {
    border-color: #1f73b7;
  }
`

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`

const CardStatusDot = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background: #e35b51;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`

const CardTitle = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 4px;
`

const CardMeta = styled.span`
  font-size: 12px;
  color: #68737d;
`

const AlertWrapper = styled.div`
  margin-bottom: 16px;
`

const Footer = styled.div`
  border-top: 1px solid #d8dcde;
  background: #fff;
  padding: 16px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`

const CancelBtn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  padding: 10px 16px;

  &:hover {
    text-decoration: underline;
  }
`

const NextButton = styled.button`
  background: #2f3941;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #49545c;
  }
`

const allTickets = [
  { id: 29, subject: 'Refund for duplicate charge', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 28, subject: 'Refund pending over 2 weeks', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 27, subject: 'Partial refund not received', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 26, subject: 'Refund went to wrong card', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 25, subject: 'Refund request for gift order', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 24, subject: 'Refund denied but item returned', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 23, subject: 'Refund merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 22, subject: 'Refund that merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 21, subject: 'Refund all merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 20, subject: 'Refund my merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 19, subject: 'Refund the merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 18, subject: 'PDF test', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 17, subject: 'Refund on merch', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 16, subject: 'PDF preview test', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 15, subject: 'Checking in on Dinoco product', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 14, subject: 'Return order', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 13, subject: 'Refund issues', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 12, subject: 'Shipping delay inquiry', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 11, subject: 'Account login issue', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 10, subject: 'Cancel subscription request', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 9, subject: 'Billing discrepancy', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 8, subject: 'Product not as described', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 7, subject: 'Exchange request for wrong size', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 6, subject: 'Missing item in order', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 5, subject: 'Warranty claim question', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 4, subject: 'Discount code not working', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 3, subject: 'Update shipping address', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 2, subject: 'Order confirmation not received', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 1, subject: 'General inquiry about services', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 39, subject: 'Lightning McQueen bobblehead broke day 1', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 38, subject: 'Where is my Piston Cup replica', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 37, subject: 'Pit crew outfit came in wrong size', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 36, subject: 'Sponsor decal peeling off already', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 35, subject: 'Refund subscription', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 34, subject: 'Ka-chow energy drink tastes weird', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 33, subject: 'Radiator Springs tour was underwhelming', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 32, subject: 'Mater tow hook keychain rusted', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 31, subject: 'Cozy Cone motel booking glitch', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 30, subject: 'Doc Hudson poster never arrived', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 44, subject: 'Refund for canceled event tickets', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 43, subject: 'Refund not showing on statement', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 42, subject: 'Overcharged on last order', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 41, subject: 'Refund for damaged package', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 40, subject: 'Double charged need refund', brand: 'Rusteze', org: 'Piston Cup Racing' },
]

const suggestions = [
  { id: 19, title: 'Refund the merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 20, title: 'Refund my merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 21, title: 'Refund all merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 22, title: 'Refund that merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 23, title: 'Refund merch', requester: 'Rodrigo De Conceição', date: 'May 5, 2026' },
  { id: 24, title: 'Refund denied but item returned', requester: 'Rodrigo De Conceição', date: 'May 5, 2026' },
  { id: 25, title: 'Refund request for gift order', requester: 'Rodrigo De Conceição', date: 'May 5, 2026' },
  { id: 40, title: 'Double charged need refund', requester: 'Rodrigo De Conceição', date: 'May 7, 2026' },
  { id: 41, title: 'Refund for damaged package', requester: 'Rodrigo De Conceição', date: 'May 7, 2026' },
  { id: 42, title: 'Overcharged on last order', requester: 'Rodrigo De Conceição', date: 'May 7, 2026' },
  { id: 43, title: 'Refund not showing on statement', requester: 'Rodrigo De Conceição', date: 'May 8, 2026' },
  { id: 44, title: 'Refund for canceled event tickets', requester: 'Rodrigo De Conceição', date: 'May 8, 2026' },
]

function MergeTickets({ sourceTickets, onBack, onNext }) {
  const [selected, setSelected] = useState(null)
  const [selectedCustom, setSelectedCustom] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [inputError, setInputError] = useState(null)
  const [showAlert, setShowAlert] = useState(null)
  const [showMoreTooltip, setShowMoreTooltip] = useState(false)
  const inputRef = useRef(null)

  const sourceBrands = sourceTickets.map(id => allTickets.find(t => t.id === id)?.brand).filter(Boolean)
  const sourceBrand = sourceBrands[0]

  const selectedTicket = selected
    ? suggestions.find(t => t.id === selected) || { id: selected, title: selectedCustom }
    : null

  const checkBrandMismatch = (ticketId) => {
    const ticket = allTickets.find(t => t.id === ticketId)
    return ticket && sourceBrand && ticket.brand !== sourceBrand
  }

  const getFilteredTickets = () => {
    const val = searchValue.trim()
    if (!val) return allTickets.filter(t => t.id >= 13 && t.id <= 18 && !sourceTickets.includes(t.id))

    const available = allTickets.filter(t => !sourceTickets.includes(t.id))

    if (val.startsWith('#')) {
      const numPart = val.slice(1)
      if (!numPart) return available.slice(0, 8)
      return available.filter(t => String(t.id).startsWith(numPart)).slice(0, 8)
    }

    const lower = val.toLowerCase()
    const scored = available
      .map(t => {
        const subjectLower = t.subject.toLowerCase()
        let score = 0
        if (subjectLower === lower) score = 100
        else if (subjectLower.startsWith(lower)) score = 80
        else if (subjectLower.includes(lower)) score = 60
        else {
          const words = lower.split(' ')
          const matchCount = words.filter(w => subjectLower.includes(w)).length
          score = (matchCount / words.length) * 40
        }
        if (String(t.id).includes(val)) score = Math.max(score, 50)
        return { ...t, score }
      })
      .filter(t => t.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    return scored
  }

  const filteredTickets = getFilteredTickets()

  const handleCardClick = (id) => {
    if (selected === id) {
      setSelected(null)
      setSelectedCustom(null)
      setInputError(null)
      setShowAlert(null)
    } else {
      setSelected(id)
      setSelectedCustom(null)
      setSearchValue('')
      setShowDropdown(false)
      setInputError(null)
      setShowAlert(null)
      if (checkBrandMismatch(id)) {
        setInputError('brand')
        setShowAlert('brand')
      }
    }
  }

  const handleDropdownSelect = (ticket) => {
    setSelected(ticket.id)
    setSelectedCustom(ticket.subject)
    setSearchValue('')
    setShowDropdown(false)
    setInputError(null)
    setShowAlert(null)
    if (checkBrandMismatch(ticket.id)) {
      setInputError('brand')
      setShowAlert('brand')
    }
  }

  const handleClear = () => {
    setSelected(null)
    setSelectedCustom(null)
    setSearchValue('')
    setShowDropdown(false)
    setInputError(null)
    setShowAlert(null)
    inputRef.current?.focus()
  }

  const visibleSource = sourceTickets.slice(0, 5)
  const remainingCount = sourceTickets.length - 5
  const availableSuggestions = suggestions.filter(t => !sourceTickets.includes(t.id)).slice(0, 4)

  return (
    <Container>
      <Header>
        <HeaderTitle>Merge tickets</HeaderTitle>
        <CloseBtn onClick={onBack}>×</CloseBtn>
      </Header>

      <Content>
        <StepIndicator>
          <StepText>Step 1 of 2</StepText>
          <ProgressBar>
            <ProgressSegment $active />
            <ProgressSegment />
          </ProgressBar>
        </StepIndicator>

        <Title>Merge tickets</Title>
        <Subtitle>Consolidate related tickets into a primary or suggested ticket.</Subtitle>

        <SectionLabel>Source tickets</SectionLabel>
          {visibleSource.map(id => {
            const ticket = allTickets.find(t => t.id === id)
            if (!ticket) return null
            return (
              <SourceTicketRow key={id}>
                <TicketBadge>#{id}</TicketBadge>
                <SourceTicketName>{ticket.subject}</SourceTicketName>
              </SourceTicketRow>
            )
          })}
          {remainingCount > 0 && (
            <MoreLinkWrapper>
              <MoreLink onClick={() => setShowMoreTooltip(!showMoreTooltip)}>+{remainingCount} more</MoreLink>
              {showMoreTooltip && (
                <MoreTooltip>
                  <MoreTooltipTitle>Source tickets</MoreTooltipTitle>
                  <MoreTooltipGrid>
                    {sourceTickets.slice(5).map(id => {
                      const ticket = allTickets.find(t => t.id === id)
                      if (!ticket) return null
                      return (
                        <MoreTooltipRow key={id}>
                          <MoreTooltipBadge>#{id}</MoreTooltipBadge>
                          <MoreTooltipName>{ticket.subject}</MoreTooltipName>
                        </MoreTooltipRow>
                      )
                    })}
                  </MoreTooltipGrid>
                </MoreTooltip>
              )}
            </MoreLinkWrapper>
          )}

          {showAlert === 'empty' && (
            <AlertWrapper style={{ marginTop: 16 }}>
              <Alert type="error">
                <Alert.Title>Can't advance</Alert.Title>
                <Alert.Paragraph>Search for a destination ticket or choose a suggestion to continue.</Alert.Paragraph>
                <Alert.Close aria-label="Close" onClick={() => setShowAlert(null)} />
              </Alert>
            </AlertWrapper>
          )}

          {showAlert === 'brand' && (
            <AlertWrapper style={{ marginTop: 16 }}>
              <Alert type="error">
                <Alert.Title>Can't merge different brands</Alert.Title>
                <Alert.Paragraph>Select a ticket from the same brand.</Alert.Paragraph>
                <Alert.Close aria-label="Close" onClick={() => setShowAlert(null)} />
              </Alert>
            </AlertWrapper>
          )}

          <FieldLabel>Destination ticket* (required)</FieldLabel>
          <FieldHint>Search for a specific ticket or select a suggested ticket</FieldHint>
          <InputContainer>
            <InputWrapper $error={!!inputError} onClick={() => !selected && inputRef.current?.focus()}>
              {selectedTicket ? (
                <>
                  <InputBadge>#{selectedTicket.id}</InputBadge>
                  <InputTicketName>{selectedTicket.title || selectedCustom}</InputTicketName>
                  <ClearButton onClick={handleClear}>×</ClearButton>
                </>
              ) : (
                <SearchInput
                  ref={inputRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => { setSearchValue(e.target.value); setShowDropdown(e.target.value.trim().length > 0) }}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  placeholder=""
                />
              )}
            </InputWrapper>
            {showDropdown && filteredTickets.length > 0 && (
              <Dropdown>
                {filteredTickets.map(ticket => (
                  <DropdownItem key={ticket.id} onMouseDown={() => handleDropdownSelect(ticket)}>
                    <DropdownBadge>#{ticket.id}</DropdownBadge>
                    {ticket.subject}
                  </DropdownItem>
                ))}
              </Dropdown>
            )}
            {inputError === 'empty' && (
              <InputError>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke="#cc3340" strokeWidth="1.5"/>
                  <path d="M10 6v5" stroke="#cc3340" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="10" cy="14" r="1" fill="#cc3340"/>
                </svg>
                Search for a ticket or select a suggested ticket
              </InputError>
            )}
            {inputError === 'brand' && (
              <InputError>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke="#cc3340" strokeWidth="1.5"/>
                  <path d="M10 6v5" stroke="#cc3340" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="10" cy="14" r="1" fill="#cc3340"/>
                </svg>
                Can't merge different brands
              </InputError>
            )}
          </InputContainer>

          <SuggestionsLabel>{availableSuggestions.length} Suggestions</SuggestionsLabel>
          <SuggestionsGrid>
            {availableSuggestions.map(ticket => (
              <SuggestionCard
                key={ticket.id}
                $active={selected === ticket.id}
                onClick={() => handleCardClick(ticket.id)}
              >
                <CardTopRow>
                  <CardStatusDot>O</CardStatusDot>
                  <TicketBadge>#{ticket.id}</TicketBadge>
                </CardTopRow>
                <CardTitle>{ticket.title}</CardTitle>
                <CardMeta>{ticket.requester}<br/>{ticket.date}</CardMeta>
              </SuggestionCard>
            ))}
          </SuggestionsGrid>
      </Content>

      <Footer>
        <CancelBtn onClick={onBack}>Cancel</CancelBtn>
        <NextButton onClick={() => {
          if (!selectedTicket) {
            setInputError('empty')
            setShowAlert('empty')
            return
          }
          if (inputError === 'brand') {
            setShowAlert('brand')
            return
          }
          onNext({ id: selectedTicket.id, title: selectedTicket.title || selectedCustom })
        }}>Next</NextButton>
      </Footer>
    </Container>
  )
}

export default MergeTickets
