#!/usr/bin/env node

import * as engine from '../src/index.js';
import * as brainGcd from '../src/games/gcd.js';

(function main() {
  engine.executeBrainGames(brainGcd);
}());
