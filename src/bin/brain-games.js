#!/usr/bin/env node
import { getName } from '../functions';

console.log('Welcome to the Brain Games!');
const nameUser = getName();
console.log(`Hello, ${nameUser}`);
