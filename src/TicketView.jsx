import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

const PropertiesPanel = styled.div`
  width: 220px;
  border-right: 1px solid #e9ebed;
  overflow-y: auto;
  padding: 16px;
  flex-shrink: 0;
`

const PropLabel = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 4px;
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }
`

const PropLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 4px;
`

const PropLink = styled.span`
  font-size: 11px;
  color: #1f73b7;
  cursor: pointer;
`

const PropSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;

  &:hover {
    border-color: #c2c8cc;
  }
`

const PropSelectChevron = styled.span`
  margin-left: auto;
  color: #68737d;
  font-size: 10px;
`

const PropInput = styled.div`
  padding: 6px 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 13px;
  color: #68737d;
  min-height: 18px;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #edf7ff;
  border: 1px solid #b1c9e8;
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 11px;
  color: #2f3941;
`

const TagRemove = styled.span`
  cursor: pointer;
  color: #68737d;
  font-size: 10px;
`

const PropRow = styled.div`
  display: flex;
  gap: 12px;
`

const PropHalf = styled.div`
  flex: 1;
`

const BrandDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1f73b7;
  flex-shrink: 0;
`

const ApplyMacro = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: #f5f5f5;
  }
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`

const TicketHeader = styled.div`
  padding: 16px 20px 0;
  flex-shrink: 0;
`

const TicketTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TicketTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #2f3941;
  margin: 0;
`

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const HeaderIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const TicketMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  font-size: 12px;
  color: #68737d;
`

const MetaLink = styled.span`
  color: #1f73b7;
  cursor: pointer;
`

const ViewSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 13px;
  color: #1f73b7;
  cursor: pointer;
`

const ConversationArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

const MessageBlock = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #87929d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const MessageContent = styled.div`
  flex: 1;
`

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`

const MessageAuthor = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
`

const MessageAction = styled.span`
  font-size: 12px;
  color: #1f73b7;
  cursor: pointer;
`

const MessageTime = styled.span`
  font-size: 12px;
  color: #87929d;
`

const MessageBody = styled.p`
  font-size: 14px;
  color: #2f3941;
  margin: 0;
  line-height: 1.4;
`

const MessageMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 14px;
  padding: 2px;
  align-self: flex-start;
`

const ComposerArea = styled.div`
  border-top: 1px solid #e9ebed;
  flex-shrink: 0;
`

const ComposerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  font-size: 13px;
  color: #2f3941;
`

const ComposerReplyType = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const ComposerTo = styled.span`
  color: #68737d;
`

const ComposerRecipient = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`

const ComposerCC = styled.span`
  margin-left: auto;
  color: #1f73b7;
  font-weight: 600;
  cursor: pointer;
`

const ComposerBody = styled.div`
  padding: 0 20px 12px;
  font-size: 14px;
  color: #2f3941;
  min-height: 40px;
`

const ComposerToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 20px;
  border-top: 1px solid #f3f4f6;
`

const ToolbarBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #87929d;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const OnlineDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #228f67;
  position: absolute;
  bottom: 12px;
  right: 12px;
`

const RightSection = styled.div`
  display: flex;
  flex-shrink: 0;
`

const SidePanel = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-left: 1px solid #e9ebed;
  flex-shrink: 0;
`

const SidePanelContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
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
  font-size: 12px;
  color: #68737d;
  margin: 0 0 12px;
  line-height: 1.4;
`

const TicketList = styled.div`
  display: flex;
  flex-direction: column;
`

const TicketItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
  margin-top: 2px;
  flex-shrink: 0;
`

const StatusDot = styled.span`
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
  margin-top: 2px;
`

const TicketInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const TicketItemTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 1px;
`

const TicketSubtitle = styled.div`
  font-size: 12px;
  color: #68737d;
  margin-bottom: 1px;
`

const TicketDate = styled.div`
  font-size: 11px;
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
  margin: 16px 0;
`

const MergeActionBar = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 12px 16px;
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

const DrawerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

const DrawerTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #2f3941;
  margin: 0 0 6px;
`

const DrawerSubtitle = styled.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 24px;
`

const DrawerSection = styled.div`
  margin-bottom: 24px;
`

const DrawerSectionTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 6px;
`

const DrawerBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 6px;
`

const DrawerBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
`

const DrawerHint = styled.p`
  font-size: 12px;
  color: #68737d;
  margin: 0 0 8px;
`

const DrawerComposer = styled.div`
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
`

const DrawerComposerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: ${props => props.$variant === 'note' ? '#fff8ed' : '#fff'};
  cursor: pointer;
  position: relative;
  font-size: 13px;
  color: #2f3941;
`

const DrawerComposerBody = styled.textarea`
  width: 100%;
  min-height: 60px;
  padding: 0 12px 10px;
  border: none;
  outline: none;
  font-size: 12px;
  font-family: inherit;
  resize: none;
  color: #2f3941;
  background: ${props => props.$variant === 'note' ? '#fff8ed' : '#fff'};
  box-sizing: border-box;
`

const DrawerComposerToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: ${props => props.$variant === 'note' ? '#fff8ed' : '#fff'};
`

const DrawerToolbarBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #87929d;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const DrawerFooter = styled.div`
  border-top: 1px solid #d8dcde;
  padding: 12px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

const DrawerBackButton = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  padding: 8px 12px;

  &:hover {
    text-decoration: underline;
  }
`

const DrawerMergeButton = styled.button`
  background: #2f3941;
  color: #fff;
  border: none;
  border-radius: 100px;
  padding: 8px 24px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #49545c;
  }
`

const DrawerDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 12px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 140px;
`

const DrawerDropdownItem = styled.div`
  padding: 8px 12px;
  font-size: 12px;
  color: #2f3941;
  cursor: pointer;

  &:hover {
    background: #edf7ff;
  }
`

const Footer = styled.div`
  border-top: 1px solid #d8dcde;
  padding: 10px 20px;
  display: flex;
  align-items: center;
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
  margin-left: -1px;

  &:hover {
    background: #5a656d;
  }
`

const TicketContextBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #d8dcde;
  flex-shrink: 0;
  font-size: 13px;
  color: #2f3941;
  gap: 16px;
`

const ContextTab = styled.span`
  color: #68737d;
  cursor: pointer;

  &:hover {
    color: #2f3941;
  }
`

const ContextName = styled.span`
  color: #2f3941;
`

const ContextBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const StatusTag = styled.span`
  background: #e35b51;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
`

const TicketNumber = styled.span`
  font-size: 13px;
  color: #2f3941;
`

const NextButton = styled.button`
  background: none;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;

  &:hover {
    background: #f5f5f5;
  }
`

const mergeSuggestions = [
  { id: 22, title: 'Refund that merch', subtitle: 'that merch', date: 'May 5, 2026, 14:02:30' },
  { id: 21, title: 'Refund all merch', subtitle: 'All', date: 'May 5, 2026, 14:01:55' },
  { id: 20, title: 'Refund my merch', subtitle: 'Get that refund', date: 'May 5, 2026, 14:01:38' },
  { id: 19, title: 'Refund the merch', subtitle: 'Refund the merch', date: 'May 5, 2026, 14:00:09' },
]

const currentTicket = { id: 23, title: 'Refund merch' }

function DrawerComposerDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const icon = value === 'public' ? (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
      <path d="M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
      <rect x="3" y="3" width="14" height="14" rx="2"/>
      <path d="M7 7h6M7 10h6M7 13h4"/>
    </svg>
  )

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => setOpen(!open)}>
      {icon}
      <span>{value === 'public' ? 'Public reply' : 'Internal note'}</span>
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
        <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {open && (
        <DrawerDropdownMenu>
          <DrawerDropdownItem onClick={(e) => { e.stopPropagation(); onChange('public'); setOpen(false); }}>
            Public reply
          </DrawerDropdownItem>
          <DrawerDropdownItem onClick={(e) => { e.stopPropagation(); onChange('internal'); setOpen(false); }}>
            Internal note
          </DrawerDropdownItem>
        </DrawerDropdownMenu>
      )}
    </div>
  )
}

function TicketView({ onMergeComplete, mergedTicketIds = [] }) {
  const [selectedIds, setSelectedIds] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)
  const [closeComment, setCloseComment] = useState('')
  const [destComment, setDestComment] = useState('')
  const [closeType, setCloseType] = useState('public')
  const [destType, setDestType] = useState('internal')

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
    setCloseComment(`Merged into #${currentTicket.id} ${currentTicket.title}. This ticket is now closed.`)
    setDestComment(`This ticket now includes merged content from ${selectedIds.map(id => `#${id}`).join(', ')}.`)
    setShowDrawer(true)
  }

  const handleMergeConfirm = () => {
    setShowDrawer(false)
    onMergeComplete(selectedIds)
    setSelectedIds([])
  }

  const handleDrawerBack = () => {
    setShowDrawer(false)
  }

  return (
    <Container>
      <TicketContextBar>
        <ContextTab>Email (create)</ContextTab>
        <ContextName>Rodrigo De Conceição</ContextName>
        <ContextBadge>
          <StatusTag>Open</StatusTag>
          <TicketNumber>Ticket #23</TicketNumber>
        </ContextBadge>
        <NextButton>
          Next
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#2f3941" strokeWidth="1.5">
            <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </NextButton>
      </TicketContextBar>

      <Body>
        <PropertiesPanel>
          <PropLabel>Brand</PropLabel>
          <PropSelect>
            <BrandDot />
            Rusteze
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <PropLabel>Requester</PropLabel>
          <PropSelect>
            Rodrigo De Conceição
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <PropLabelRow>
            <PropLabel style={{ margin: 0 }}>Assignee*</PropLabel>
            <PropLink>take it</PropLink>
          </PropLabelRow>
          <PropSelect>
            Support
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <PropLabelRow>
            <PropLabel style={{ margin: 0 }}>Followers</PropLabel>
            <PropLink>follow</PropLink>
          </PropLabelRow>
          <PropInput />

          <PropLabel>Tags</PropLabel>
          <TagsContainer>
            <Tag>intent__billing__refund__request <TagRemove>×</TagRemove></Tag>
            <Tag>intent_confidence__high <TagRemove>×</TagRemove></Tag>
            <Tag>language__en <TagRemove>×</TagRemove></Tag>
            <Tag>language_confidence__high <TagRemove>×</TagRemove></Tag>
            <Tag>sentiment__neutral <TagRemove>×</TagRemove></Tag>
            <Tag>sentiment_confidence__high <TagRemove>×</TagRemove></Tag>
          </TagsContainer>

          <PropRow style={{ marginTop: 16 }}>
            <PropHalf>
              <PropLabel style={{ marginTop: 0 }}>Type</PropLabel>
              <PropSelect><span style={{ color: '#68737d' }}>-</span><PropSelectChevron>▾</PropSelectChevron></PropSelect>
            </PropHalf>
            <PropHalf>
              <PropLabel style={{ marginTop: 0 }}>Priority</PropLabel>
              <PropSelect><span style={{ color: '#68737d' }}>-</span><PropSelectChevron>▾</PropSelectChevron></PropSelect>
            </PropHalf>
          </PropRow>

          <PropLabel>Summary</PropLabel>
          <PropInput />

          <PropLabel>Summary agent ID</PropLabel>
          <PropInput />

          <PropLabel>Summary date and time</PropLabel>
          <PropInput />

          <PropLabel>Summary locale</PropLabel>
          <PropInput />

          <PropLabel>Intent ⓘ</PropLabel>
          <PropSelect>
            Refund request
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <PropLabel>Intent confidence ⓘ</PropLabel>
          <PropSelect>
            High
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <PropLabel>Language ⓘ</PropLabel>
          <PropSelect>
            English
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <PropLabel>Language confidence ⓘ</PropLabel>
          <PropSelect>
            High
            <PropSelectChevron>▾</PropSelectChevron>
          </PropSelect>

          <ApplyMacro>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
              <path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z" transform="scale(0.8)"/>
            </svg>
            Apply macro
            <PropSelectChevron style={{ marginLeft: 'auto' }}>▾</PropSelectChevron>
          </ApplyMacro>
        </PropertiesPanel>

        <MainContent>
          <TicketHeader>
            <TicketTitleRow>
              <TicketTitle>Refund merch</TicketTitle>
              <HeaderIcons>
                <HeaderIcon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round"/>
                  </svg>
                </HeaderIcon>
                <HeaderIcon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 2l4 4M14 2l-4 4M2 14l4-4M14 14l-4-4" strokeLinecap="round"/>
                    <path d="M6 6h4v4H6z"/>
                  </svg>
                </HeaderIcon>
                <HeaderIcon>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="6"/>
                    <path d="M8 5v3l2 2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </HeaderIcon>
                <HeaderIcon>⋮</HeaderIcon>
              </HeaderIcons>
            </TicketTitleRow>
            <TicketMeta>
              <span>Via web form</span>
              <span>·</span>
              <span>Topic</span>
              <MetaLink>Refund request</MetaLink>
              <span>·</span>
              <span>☺ Neutral</span>
            </TicketMeta>
            <ViewSummary>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                <rect x="2" y="2" width="12" height="12" rx="2"/>
                <path d="M5 6h6M5 8h6M5 10h4"/>
              </svg>
              View ticket summary
            </ViewSummary>
          </TicketHeader>

          <ConversationArea>
            <MessageBlock>
              <Avatar>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#c2c8cc"/>
                  <circle cx="10" cy="8" r="3" fill="#fff"/>
                  <path d="M4 16c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" fill="#fff"/>
                </svg>
              </Avatar>
              <MessageContent>
                <MessageHeader>
                  <MessageAuthor>Rusty Admin</MessageAuthor>
                  <span style={{ fontSize: '11px', color: '#68737d' }}>✧</span>
                  <MessageAction>Assign</MessageAction>
                  <span style={{ fontSize: '12px', color: '#68737d' }}>·</span>
                  <MessageTime>May 05 14:03</MessageTime>
                </MessageHeader>
                <MessageBody>Yip</MessageBody>
              </MessageContent>
              <MessageMenu>⋮</MessageMenu>
            </MessageBlock>
          </ConversationArea>

          <ComposerArea>
            <ComposerHeader>
              <ComposerReplyType>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
                  <path d="M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z" strokeLinejoin="round"/>
                </svg>
                Public reply
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ComposerReplyType>
              <ComposerTo>To</ComposerTo>
              <ComposerRecipient>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#e35b51"/>
                  <circle cx="8" cy="6" r="2" fill="#fff"/>
                  <path d="M4 13c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" fill="#fff"/>
                </svg>
                Rodrigo De Conceição
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                  <path d="M11 5l-6 6M5 5l6 6" strokeLinecap="round"/>
                </svg>
              </ComposerRecipient>
              <ComposerCC>CC</ComposerCC>
            </ComposerHeader>
            <ComposerBody>Hi there</ComposerBody>
            <ComposerToolbar>
              <ToolbarBtn>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5"/>
                  <path d="M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9"/>
                </svg>
              </ToolbarBtn>
              <ToolbarBtn>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5" strokeWidth="2"/>
                </svg>
              </ToolbarBtn>
              <ToolbarBtn>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="7"/>
                  <circle cx="7.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>
                  <circle cx="12.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>
                  <path d="M7 12.5c1 1.5 5 1.5 6 0"/>
                </svg>
              </ToolbarBtn>
              <ToolbarBtn>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10l-5 7V10H5l5-7v7h5z"/>
                </svg>
              </ToolbarBtn>
              <ToolbarBtn>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/>
                  <path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/>
                </svg>
              </ToolbarBtn>
              <ToolbarBtn>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/>
                  <path d="M4 13l2 2 8-8"/>
                </svg>
              </ToolbarBtn>
            </ComposerToolbar>
            <OnlineDot style={{ position: 'relative', bottom: 'auto', right: 'auto', marginLeft: 'auto', marginRight: 12, marginBottom: 8 }} />
          </ComposerArea>
        </MainContent>

        <RightSection>
          <SidePanel>
            {showDrawer ? (
              <>
                <DrawerContent>
                  <DrawerTitle>Review merge</DrawerTitle>
                  <DrawerSubtitle>Review and add comments before merging.</DrawerSubtitle>

                  <DrawerSection>
                    <DrawerSectionTitle>Source ticket{selectedIds.length > 1 ? 's' : ''}</DrawerSectionTitle>
                    <DrawerBadgeRow>
                      {selectedIds.map(id => (
                        <DrawerBadge key={id}>#{id}</DrawerBadge>
                      ))}
                    </DrawerBadgeRow>
                    <DrawerHint>{selectedIds.length > 1 ? 'These tickets' : 'This ticket'} will close with this comment</DrawerHint>
                    <DrawerComposer>
                      <DrawerComposerHeader $variant={closeType === 'internal' ? 'note' : null}>
                        <DrawerComposerDropdown value={closeType} onChange={setCloseType} />
                      </DrawerComposerHeader>
                      <DrawerComposerBody
                        $variant={closeType === 'internal' ? 'note' : null}
                        value={closeComment}
                        onChange={(e) => setCloseComment(e.target.value)}
                      />
                      <DrawerComposerToolbar $variant={closeType === 'internal' ? 'note' : null}>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><path d="M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5"/><path d="M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9"/></svg></DrawerToolbarBtn>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><circle cx="10" cy="10" r="7"/><circle cx="7.5" cy="8.5" r="1" fill="#87929d" stroke="none"/><circle cx="12.5" cy="8.5" r="1" fill="#87929d" stroke="none"/><path d="M7 12.5c1 1.5 5 1.5 6 0"/></svg></DrawerToolbarBtn>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/><path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/></svg></DrawerToolbarBtn>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/><path d="M4 13l2 2 8-8"/></svg></DrawerToolbarBtn>
                      </DrawerComposerToolbar>
                    </DrawerComposer>
                  </DrawerSection>

                  <DrawerSection>
                    <DrawerSectionTitle>Destination ticket</DrawerSectionTitle>
                    <DrawerBadgeRow>
                      <DrawerBadge>#{currentTicket.id}</DrawerBadge>
                    </DrawerBadgeRow>
                    <DrawerHint>This ticket will receive this comment</DrawerHint>
                    <DrawerComposer>
                      <DrawerComposerHeader $variant={destType === 'internal' ? 'note' : null}>
                        <DrawerComposerDropdown value={destType} onChange={setDestType} />
                      </DrawerComposerHeader>
                      <DrawerComposerBody
                        $variant={destType === 'internal' ? 'note' : null}
                        value={destComment}
                        onChange={(e) => setDestComment(e.target.value)}
                      />
                      <DrawerComposerToolbar $variant={destType === 'internal' ? 'note' : null}>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><path d="M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5"/><path d="M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9"/></svg></DrawerToolbarBtn>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><circle cx="10" cy="10" r="7"/><circle cx="7.5" cy="8.5" r="1" fill="#87929d" stroke="none"/><circle cx="12.5" cy="8.5" r="1" fill="#87929d" stroke="none"/><path d="M7 12.5c1 1.5 5 1.5 6 0"/></svg></DrawerToolbarBtn>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/><path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/></svg></DrawerToolbarBtn>
                        <DrawerToolbarBtn><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5"><path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/><path d="M4 13l2 2 8-8"/></svg></DrawerToolbarBtn>
                      </DrawerComposerToolbar>
                    </DrawerComposer>
                  </DrawerSection>
                </DrawerContent>
                <DrawerFooter>
                  <DrawerBackButton onClick={handleDrawerBack}>Back</DrawerBackButton>
                  <DrawerMergeButton onClick={handleMergeConfirm}>Merge tickets</DrawerMergeButton>
                </DrawerFooter>
              </>
            ) : (
              <>
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
                              <TicketItemTitle>{ticket.title}</TicketItemTitle>
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
              </>
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
        </RightSection>
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

    </Container>
  )
}

export default TicketView
