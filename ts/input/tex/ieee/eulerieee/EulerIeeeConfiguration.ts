import {Configuration} from '@mathjax/src/js/input/tex/Configuration.js';
import {CommandMap} from '@mathjax/src/js/input/tex/TokenMap.js';
import BaseMethods from '@mathjax/src/js/input/tex/base/BaseMethods.js';
import {ParseMethod} from '@mathjax/src/js/input/tex/Types.js';

/**
 * The methods that implement the ieee euler package.
 */
let EulerIeeeMethods: Record<string, ParseMethod> = {};

EulerIeeeMethods.Macro = BaseMethods.Macro;
EulerIeeeMethods.MathFont = BaseMethods.MathFont;

new CommandMap('euler_ieee', {
  matheur: ['MathFont','-euler-R'],
  matheuf: ['MathFont','-euler-F'],
  matheus: ['MathFont','-euler-S'],
}, EulerIeeeMethods);

//
//  Define the package for our new environment
//
export const EulerIeeeConfiguration = Configuration.create('eulerieee', {
  handler: {
    macro: ['euler_ieee'],
  }
});

