;(function() {
    
    var deps = [];
    
    deps.push('src/engine/Class');
    deps.push('src/engine/events/EventSet');
    deps.push('src/engine/globals/Window');
    deps.push('src/engine/storage/Container');
    deps.push('src/engine/input/Output');
    
    define(deps, function(Class, EventSet, Window, Container, Output) {
        
        var Keyboard = new Class('Keyboard', function() {
            Keyboard.super.constructor.call(this);
            
            Window.addEventListener('keydown', this.input.bind(this, true), false);
            Window.addEventListener('keyup', this.input.bind(this, false), false);
            
            this.outputs = new Container();
        });
        
        Keyboard.extend(EventSet);
        
        Keyboard.prototype.input = function(state, e) {
            var which = Keyboard.$$map[e.keyCode];
            this.fire(Output.EVENT_NAME, new Output(state, which));
        };
        
        Keyboard.$$map = {
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            3: 'CANCEL',
            6: 'HELP',
            8: 'BACK_SPACE',
            9: 'TAB',
            12: 'CLEAR',
            13: 'RETURN',
            14: 'ENTER',
            16: 'SHIFT',
            17: 'CONTROL',
            18: 'ALT',
            19: 'PAUSE',
            20: 'CAPS_LOCK',
            21: 'KANA/HANGUL',
            23: 'JUNJA',
            24: 'FINAL',
            25: 'HANJA/KANJI',
            27: 'ESCAPE',
            28: 'CONVERT',
            29: 'NONCONVERT',
            30: 'ACCEPT',
            31: 'MODECHANGE',
            32: 'SPACE',
            33: 'PAGE_UP',
            34: 'PAGE_DOWN',
            35: 'END',
            36: 'HOME',
            37: 'LEFT',
            38: 'UP',
            39: 'RIGHT',
            40: 'DOWN',
            41: 'SELECT',
            42: 'PRINT',
            43: 'EXECUTE',
            44: 'PRINTSCREEN',
            45: 'INSERT',
            46: 'DELETE',
            59: 'SEMICOLON',
            61: 'EQUALS',
            65: 'A',
            66: 'B',
            67: 'C',
            68: 'D',
            69: 'E',
            70: 'F',
            71: 'G',
            72: 'H',
            73: 'I',
            74: 'J',
            75: 'K',
            76: 'L',
            77: 'M',
            78: 'N',
            79: 'O',
            80: 'P',
            81: 'Q',
            82: 'R',
            83: 'S',
            84: 'T',
            85: 'U',
            86: 'V',
            87: 'W',
            88: 'X',
            89: 'Y',
            90: 'Z',
            93: 'CONTEXT_MENU',
            95: 'SLEEP',
            96: 'NUMPAD0',
            97: 'NUMPAD1',
            98: 'NUMPAD2',
            99: 'NUMPAD3',
            100: 'NUMPAD4',
            101: 'NUMPAD5',
            102: 'NUMPAD6',
            103: 'NUMPAD7',
            104: 'NUMPAD8',
            105: 'NUMPAD9',
            106: 'MULTIPLY',
            107: 'ADD',
            108: 'SEPARATOR',
            109: 'SUBTRACT',
            110: 'DECIMAL',
            111: 'DIVIDE',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            124: 'F13',
            125: 'F14',
            126: 'F15',
            127: 'F16',
            128: 'F17',
            129: 'F18',
            130: 'F19',
            131: 'F20',
            132: 'F21',
            133: 'F22',
            134: 'F23',
            135: 'F24',
            144: 'NUM_LOCK',
            145: 'SCROLL_LOCK',
            188: 'COMMA',
            190: 'PERIOD',
            191: 'SLASH',
            192: 'BACK_QUOTE',
            219: 'OPEN_BRACKET',
            220: 'BACK_SLASH',
            221: 'CLOSE_BRACKET',
            222: 'QUOTE',
            224: 'META'
        };
        
        return Keyboard;
    });
})();