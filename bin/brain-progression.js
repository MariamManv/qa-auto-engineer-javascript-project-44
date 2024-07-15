#!/usr/bin/env node


import * as engine from '../src/index.js';
import * as brainProgression from '../src/games/progression.js';


(function main() {
    engine.executeBrainGames(brainProgression);
}) ();
