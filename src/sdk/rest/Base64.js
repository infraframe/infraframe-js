// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

// This file is borrowed from lynckia/licode with some modifications.

'use strict';

/* global unescape*/
var INFRAFRAME_REST = INFRAFRAME_REST || {};
INFRAFRAME_REST.Base64 = (function(INFRAFRAME_REST) {
  let END_OF_INPUT;
  let base64Chars;
  let reverseBase64Chars;
  let base64Str;
  let base64Count;
  let i;
  let setBase64Str;
  let readBase64;
  let encodeBase64;
  let readReverseBase64;
  let ntos;
  let decodeBase64;

  END_OF_INPUT = -1;

  base64Chars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '/',
  ];

  reverseBase64Chars = [];

  for (i = 0; i < base64Chars.length; i = i + 1) {
    reverseBase64Chars[base64Chars[i]] = i;
  }

  setBase64Str = function(str) {
    base64Str = str;
    base64Count = 0;
  };

  readBase64 = function() {
    let c;
    if (!base64Str) {
      return END_OF_INPUT;
    }
    if (base64Count >= base64Str.length) {
      return END_OF_INPUT;
    }
    c = base64Str.charCodeAt(base64Count) & 0xff;
    base64Count = base64Count + 1;
    return c;
  };

  encodeBase64 = function(str) {
    let result; let inBuffer; let done;
    setBase64Str(str);
    result = '';
    inBuffer = new Array(3);
    done = false;
    while (!done && (inBuffer[0] = readBase64()) !== END_OF_INPUT) {
      inBuffer[1] = readBase64();
      inBuffer[2] = readBase64();
      result = result + base64Chars[inBuffer[0] >> 2];
      if (inBuffer[1] !== END_OF_INPUT) {
        result =
          result +
          base64Chars[((inBuffer[0] << 4) & 0x30) | (inBuffer[1] >> 4)];
        if (inBuffer[2] !== END_OF_INPUT) {
          result =
            result +
            base64Chars[((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6)];
          result = result + base64Chars[inBuffer[2] & 0x3f];
        } else {
          result = result + base64Chars[(inBuffer[1] << 2) & 0x3c];
          result = result + '=';
          done = true;
        }
      } else {
        result = result + base64Chars[(inBuffer[0] << 4) & 0x30];
        result = result + '=';
        result = result + '=';
        done = true;
      }
    }
    return result;
  };

  readReverseBase64 = function() {
    if (!base64Str) {
      return END_OF_INPUT;
    }
    while (true) {
      if (base64Count >= base64Str.length) {
        return END_OF_INPUT;
      }
      const nextCharacter = base64Str.charAt(base64Count);
      base64Count = base64Count + 1;
      if (reverseBase64Chars[nextCharacter]) {
        return reverseBase64Chars[nextCharacter];
      }
      if (nextCharacter === 'A') {
        return 0;
      }
    }
  };

  ntos = function(n) {
    n = n.toString(16);
    if (n.length === 1) {
      n = '0' + n;
    }
    n = '%' + n;
    return unescape(n);
  };

  decodeBase64 = function(str) {
    let result; let inBuffer; let done;
    setBase64Str(str);
    result = '';
    inBuffer = new Array(4);
    done = false;
    while (
      !done &&
      (inBuffer[0] = readReverseBase64()) !== END_OF_INPUT &&
      (inBuffer[1] = readReverseBase64()) !== END_OF_INPUT
    ) {
      inBuffer[2] = readReverseBase64();
      inBuffer[3] = readReverseBase64();
      result = result + ntos(((inBuffer[0] << 2) & 0xff) | (inBuffer[1] >> 4));
      if (inBuffer[2] !== END_OF_INPUT) {
        result += ntos(((inBuffer[1] << 4) & 0xff) | (inBuffer[2] >> 2));
        if (inBuffer[3] !== END_OF_INPUT) {
          result = result + ntos(((inBuffer[2] << 6) & 0xff) | inBuffer[3]);
        } else {
          done = true;
        }
      } else {
        done = true;
      }
    }
    return result;
  };

  return {
    encodeBase64: encodeBase64,
    decodeBase64: decodeBase64,
  };
})(INFRAFRAME_REST);
