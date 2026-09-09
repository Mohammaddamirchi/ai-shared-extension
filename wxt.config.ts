import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    name: 'AI Shared',
    description: 'Shared AI access with private virtual conversations and usage credits.',
    version: '0.1.0',
    permissions: ['storage'],
    host_permissions: ['https://chatgpt.com/*', 'https://chat.openai.com/*'],
  },
});
