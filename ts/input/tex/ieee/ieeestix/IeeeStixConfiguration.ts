/*************************************************************
 *
 *  Copyright (c) 2018-2023 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview Configuration file for the IEEE Stix package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {Configuration} from '../../Configuration.js';
import './IeeeStixMappings.js';

export const IeeeStixConfiguration = Configuration.create(
  'ieeestix', {
    handler: {
      delimiter: ['ieee-stix-delimiter'],
      macro: ['ieee-stix-mathchar0mi', 'ieee-stix-mathchar0mo', 'ieee-stix-macros', 'ieee-stix-delimiter']
    }
  }
)
