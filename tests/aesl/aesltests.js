AeslTests = [
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="238" y="13"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#000000</field></block></next></block></next></block></statement></block><block type="thymio_onevent_button" x="237" y="163"><field name="BUTTON">RIGHT</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#33cc00</field></block></statement></block><block type="thymio_onevent_button" x="488" y="163"><field name="BUTTON">FORWARD</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#cc33cc</field></block></statement></block><block type="thymio_onevent_button" x="237" y="263"><field name="BUTTON">LEFT</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#ff6600</field></block></statement></block><block type="thymio_onevent_button" x="488" y="263"><field name="BUTTON">BACKWARD</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#6633ff</field></block></statement></block></xml>',
'onevent button.center\n' + 
'	call leds.top(0,0,0)\n' +
'	call leds.bottom.left(0,0,0)\n' +
'	call leds.bottom.right(0,0,0)\n\n\n' +
'onevent button.right\n' +
'	call leds.bottom.right(6,26,0)\n\n\n' +
'onevent button.forward\n' +
'	call leds.top(26,6,26)\n\n\n' +
'onevent button.left\n' +
'	call leds.bottom.left(32,13,0)\n\n\n' +
'onevent button.backward\n' +
'	call leds.top(13,6,32)\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_buttons" x="188" y="63"><statement name="HANDLER"><block type="controls_if"><mutation elseif="1" else="1"></mutation><value name="IF0"><block type="thymio_button_pressed"><field name="BUTTON">FORWARD</field></block></value><statement name="DO0"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field></block></statement><value name="IF1"><block type="thymio_button_pressed"><field name="BUTTON">BACKWARD</field></block></value><statement name="DO1"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#33ff33</field></block></statement><statement name="ELSE"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#000000</field></block></statement></block></statement></block></xml>',
'onevent buttons\n' +
'	if button.forward == 1 then\n' +
'		call leds.top(32,0,0)\n' +
'	elseif button.backward == 1 then\n' +
'		call leds.top(6,32,6)\n' +
'	else\n' +
'		call leds.top(0,0,0)\n' +
'	end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" x="113" y="63"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="thymio_get_sensor_state"><field name="SENSOR">motor.left.speed</field></block></value><value name="B"><block type="math_number"><field name="NUM">100</field></block></value></block></value><statement name="DO0"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#33ff33</field></block></statement><statement name="ELSE"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field></block></statement></block></xml>',
'if motor.left.speed > 100 then\n' +
'	call leds.top(6,32,6)\n' +
'else\n' +
'	call leds.top(32,0,0)\n' +
'end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="138" y="38"><field name="BUTTON">FORWARD</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#33ff33</field><next><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">500</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_number"><field name="NUM">500</field></block></value></block></next></block></next></block></statement></block><block type="thymio_onevent_button" x="138" y="163"><field name="BUTTON">BACKWARD</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field><next><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></next></block></statement></block></xml>',
'onevent button.forward\n' +
'	call leds.top(6,32,6)\n' +
'	motor.left.target = 500\n' +
'	motor.right.target = 500\n\n\n' +
'onevent button.backward\n' +
'	call leds.top(32,0,0)\n' +
'	motor.left.target = 0\n' +
'	motor.right.target = 0\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="63" y="63"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_number"><field name="NUM">200</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></statement></block></xml>',
'onevent button.center\n' +
'	motor.left.target = (200 + 50) * (2 * 1)\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_buttons" x="38" y="63"><statement name="HANDLER"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="thymio_button_pressed"><field name="BUTTON">FORWARD</field></block></value><value name="B"><block type="thymio_button_pressed"><field name="BUTTON">BACKWARD</field></block></value></block></value><value name="B"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="thymio_button_pressed"><field name="BUTTON">LEFT</field></block></value><value name="B"><block type="thymio_button_pressed"><field name="BUTTON">RIGHT</field></block></value></block></value></block></value><statement name="DO0"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#33ff33</field></block></statement><statement name="ELSE"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field></block></statement></block></statement></block></xml>',
'onevent buttons\n' +
'	if (button.forward == 1) and (button.backward == 1) or (button.left == 1) and (button.right == 1) then\n' +
'		call leds.top(6,32,6)\n' +
'	else\n' +
'		call leds.top(32,0,0)\n' +
'	end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_buttons" x="38" y="63"><statement name="HANDLER"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="thymio_button_pressed"><field name="BUTTON">FORWARD</field></block></value><value name="B"><block type="thymio_button_pressed"><field name="BUTTON">BACKWARD</field></block></value></block></value><value name="B"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="thymio_button_pressed"><field name="BUTTON">LEFT</field></block></value><value name="B"><block type="thymio_button_pressed"><field name="BUTTON">RIGHT</field></block></value></block></value></block></value><statement name="DO0"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#33ff33</field></block></statement><statement name="ELSE"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field></block></statement></block></statement></block></xml>',
'onevent buttons\n' +
'	if (button.forward == 1 or button.backward == 1) and (button.left == 1 or button.right == 1) then\n' +
'		call leds.top(6,32,6)\n' +
'	else\n' +
'		call leds.top(32,0,0)\n' +
'	end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_buttons" x="138" y="37"><statement name="HANDLER"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_negate"><value name="BOOL"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></value><statement name="DO0"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#33ff33</field></block></statement><statement name="ELSE"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field></block></statement></block></statement></block></xml>',
'onevent buttons\n' +
'	if not 0 == 1 then\n' +
'		call leds.top(6,32,6)\n' +
'	else\n' +
'		call leds.top(32,0,0)\n' +
'	end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" x="213" y="88"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value><value name="B"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value></block></value></block></xml>',
'if 0 == 1 then\n' +
'end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="88" y="38"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="thymio_button_pressed"><field name="BUTTON">CENTER</field></block></value><statement name="DO"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field><next><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#3366ff</field></block></next></block></statement><next><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#000000</field></block></next></block></statement></block></xml>',
'onevent button.center\n' +
'	while button.center == 1 do\n' +
'		call leds.top(32,0,0)\n' +
'		call leds.top(6,13,32)\n' +
'	end\n' +
'	call leds.top(0,0,0)\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="188" y="88"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="controls_repeat"><field name="TIMES">10</field><statement name="DO"><block type="controls_repeat"><field name="TIMES">10</field><statement name="DO"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field></block></statement></block></statement></block></statement></block></xml>',
'var i\n' +
'var i2\n\n\n' +
'onevent button.center\n' +
'	for i2 in 1:10 do\n' +
'		for i in 1:10 do\n' +
'			call leds.top(32,0,0)\n' +
'		end\n' +
'	end\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_buttons" x="38" y="-187"><statement name="HANDLER"><block type="controls_if"><mutation elseif="2"></mutation><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="thymio_button_pressed"><field name="BUTTON">BACKWARD</field></block></value><value name="B"><block type="thymio_button_pressed"><field name="BUTTON">RIGHT</field></block></value></block></value><statement name="DO0"><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">500</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></statement><value name="IF1"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="thymio_button_pressed"><field name="BUTTON">BACKWARD</field></block></value><value name="B"><block type="thymio_button_pressed"><field name="BUTTON">LEFT</field></block></value></block></value><statement name="DO1"><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_number"><field name="NUM">200</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_number"><field name="NUM">1</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></next></block></statement><value name="IF2"><block type="thymio_button_pressed"><field name="BUTTON">BACKWARD</field></block></value><statement name="DO2"><block type="controls_repeat"><field name="TIMES">10</field><statement name="DO"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#ff0000</field><next><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#000000</field></block></next></block></statement></block></statement></block></statement></block><block type="thymio_onevent_button" x="738" y="-187"><field name="BUTTON">FORWARD</field><statement name="HANDLER"><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">500</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_number"><field name="NUM">500</field></block></value></block></next></block></statement></block><block type="thymio_onevent_button" x="737" y="-87"><field name="BUTTON">LEFT</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#33ff33</field></block></statement></block><block type="thymio_onevent_button" x="737" y="-12"><field name="BUTTON">RIGHT</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#33ff33</field></block></statement></block><block type="thymio_onevent_button" x="737" y="63"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#000000</field></block></next></block></next></block></next></block></statement></block></xml>',
'var i\n\n\n' +
'onevent buttons\n' +
'	if (button.backward == 1) and (button.right == 1) then\n' +
'		motor.left.target = 500\n' +
'		motor.right.target = 0\n' +
'	elseif (button.backward == 1) and (button.left == 1) then\n' +
'		motor.left.target = 0\n' +
'		motor.right.target = (200 + 50) * (1 + 1)\n' +
'	elseif button.backward == 1 then\n' +
'		for i in 1:10 do\n' +
'			call leds.top(32,0,0)\n' +
'			call leds.top(0,0,0)\n' +
'		end\n' +
'	end\n\n\n' +
'onevent button.forward\n' +
'	motor.left.target = 500\n' +
'	motor.right.target = 500\n\n\n' +
'onevent button.left\n' +
'	call leds.bottom.left(6,32,6)\n\n\n' +
'onevent button.right\n' +
'	call leds.bottom.right(6,32,6)\n\n\n' +
'onevent button.center\n' +
'	motor.left.target = 0\n' +
'	motor.right.target = 0\n' +
'	call leds.bottom.left(0,0,0)\n' +
'	call leds.bottom.right(0,0,0)\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="88" y="38"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="thymio_leds"><field name="LED">TOP</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMLEFT</field><field name="COLOR">#000000</field><next><block type="thymio_leds"><field name="LED">BOTTOMRIGHT</field><field name="COLOR">#000000</field></block></next></block></next></block></statement></block><block type="thymio_onevent_button" x="87" y="187"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></statement></block></xml>',
'onevent button.center\n' +
'	call leds.top(0,0,0)\n' +
'	call leds.bottom.left(0,0,0)\n' +
'	call leds.bottom.right(0,0,0)\n\n' +
'	motor.left.target = 0\n' +
'	motor.right.target = 0\n'],
['<xml xmlns="http://www.w3.org/1999/xhtml"><block type="thymio_onevent_button" x="163" y="112"><field name="BUTTON">CENTER</field><statement name="HANDLER"><block type="variables_set"><field name="VAR">speed</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="variables_get"><field name="VAR">speed</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="variables_get"><field name="VAR">speed</field></block></value></block></next></block></next></block></statement></block><block type="thymio_onevent_button" x="163" y="262"><field name="BUTTON">FORWARD</field><statement name="HANDLER"><block type="variables_set"><field name="VAR">speed</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR">speed</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="variables_get"><field name="VAR">speed</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="variables_get"><field name="VAR">speed</field></block></value></block></next></block></next></block></statement></block><block type="thymio_onevent_button" x="163" y="412"><field name="BUTTON">BACKWARD</field><statement name="HANDLER"><block type="variables_set"><field name="VAR">speed</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR">speed</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.left.target</field><value name="VALUE"><block type="variables_get"><field name="VAR">speed</field></block></value><next><block type="thymio_set_variable"><field name="VARIABLE">motor.right.target</field><value name="VALUE"><block type="variables_get"><field name="VAR">speed</field></block></value></block></next></block></next></block></statement></block></xml>',
'var speed\n\n\n' +
'onevent button.center\n' +
'	speed = 0\n' +
'	motor.left.target = speed\n' +
'	motor.right.target = speed\n\n\n' +
'onevent button.forward\n' +
'	speed = speed + 50\n' +
'	motor.left.target = speed\n' +
'	motor.right.target = speed\n\n\n' +
'onevent button.backward\n' +
'	speed = speed - 50\n' +
'	motor.left.target = speed\n' +
'	motor.right.target = speed\n'],
];