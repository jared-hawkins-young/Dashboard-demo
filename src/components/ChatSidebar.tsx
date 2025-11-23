import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconSend, IconChevronRight, IconChevronLeft } from "@tabler/icons-react"

type Message = {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
}

type ChatSidebarProps = {
  isOpen: boolean
  onToggle: () => void
  messages: Message[]
  inputValue: string
  onInputChange: (value: string) => void
  onSendMessage: () => void
  examplePrompts?: Array<{
    id: number
    text: string
  }>
  onExamplePromptClick?: (prompt: any) => void
}

export function ChatSidebar({
  isOpen,
  onToggle,
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  examplePrompts = [],
  onExamplePromptClick,
}: ChatSidebarProps) {
  return (
    <div className="relative">
      {/* Toggle Button - Always visible */}
      <Button
        size="icon"
        className="absolute -left-10 top-1/2 -translate-y-1/2 shadow-md bg-primary text-primary-foreground hover:bg-primary/90 z-50"
        onClick={onToggle}
      >
        {isOpen ? (
          <IconChevronRight className="h-4 w-4" />
        ) : (
          <IconChevronLeft className="h-4 w-4" />
        )}
      </Button>

      <aside
        className={`border-l bg-background transition-all duration-300 ease-in-out h-screen ${
          isOpen ? "w-[400px]" : "w-0"
        }`}
      >
        <div className="w-[400px] h-screen flex flex-col">
          {/* Header - Fixed */}
          <div className="p-4 border-b flex-shrink-0 bg-background">
            <h2 className="font-semibold text-lg">Chat Assistant</h2>
            <p className="text-sm text-muted-foreground">
              Ask questions about your data
            </p>
          </div>

          {/* Messages - Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Example Prompts - Always visible above input */}
          {examplePrompts.length > 0 && (
            <div className="p-4 border-t bg-muted/30 flex-shrink-0 max-h-[250px] overflow-y-auto">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                EXAMPLE PROMPTS
              </p>
              <div className="space-y-2">
                {examplePrompts.map((prompt) => (
                  <Button
                    key={prompt.id}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto py-2 px-3"
                    onClick={() => onExamplePromptClick?.(prompt)}
                  >
                    <span className="text-xs line-clamp-2">{prompt.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input - LOCKED at bottom */}
          <div className="p-4 border-t flex-shrink-0 bg-background">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
                placeholder="Ask a question..."
                className="flex-1"
              />
              <Button size="icon" onClick={onSendMessage}>
                <IconSend className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
