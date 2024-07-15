#!/usr/bin/env node


import * as engine from '../src/index.js';
import * as brainPrime from '../src/games/prime.js';


(function main() {
    engine.executeBrainGames(brainPrime);
}) ();
