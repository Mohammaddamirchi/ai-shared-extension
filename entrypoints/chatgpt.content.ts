import { createApp, h } from 'vue';
import './chatgpt.css';

interface ChatState {
  conversationId: string | null;
  inputChars: number;
  outputChars: number;
}

const state: ChatState = {
  conversationId: null,
  inputChars: 0,
  outputChars: 0,
};

function getConversationId(): string | null {
  const match = location.pathname.match(/^\/c\/([^/]+)/);
  return match?.[1] ?? null;
}

function App() {
  return h('div', { class: 'ai-shared-widget' }, [
    h('strong', 'AI Shared'),
    h('span', `Chat: ${state.conversationId ? 'active' : 'new'}`),
  ]);
}

export default defineContentScript({
  matches: ['https://chatgpt.com/*', 'https://chat.openai.com/*'],
  runAt: 'document_idle',
  main() {
    state.conversationId = getConversationId();

    const host = document.createElement('div');
    host.id = 'ai-shared-root';
    document.documentElement.appendChild(host);

    const shadow = host.attachShadow({ mode: 'open' });
    const mount = document.createElement('div');
    shadow.appendChild(mount);

    createApp(App).mount(mount);

    const observer = new MutationObserver(() => {
      const nextId = getConversationId();
      if (nextId !== state.conversationId) state.conversationId = nextId;
    });

    observer.observe(document.body, { childList: true, subtree: true });
  },
});
