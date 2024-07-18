#!/usr/bin/env node

import * as engine from '../src/index.js';
import * as brainEven from '../src/games/even.js';

(function main() {
  engine.executeBrainGames(brainEven);
}());
