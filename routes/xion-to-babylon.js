import { sendToken } from '../utils.js'; // Note .js extension
import { CHAINS } from '../config.js';

// Prompt for private key (if not using .env)
import prompt from 'prompt-sync';
const getKey = prompt({ sigint: true });
const privateKey = getKey('Enter your private key (hidden): ');

const BABYLON_TO_XION = {
  sourceChain: 'BABYLON',
  destChain: 'XION',
  asset: 'ubbn',
  amount: 1,
  privateKey: privateKey
};

sendToken(BABYLON_TO_XION)
  .then(txHash => console.log(`✅ TX Hash: ${txHash}`))
  .catch(console.error);
