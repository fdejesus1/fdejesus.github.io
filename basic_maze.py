from gopigo import 
import time
import math

set_speed(100)

enc_tgt(1,1,18)
time.sleep(.1)
fwd()
time.sleep(3)

def move_forward(feet)
  mm= feet * 304.8
  steps=mm / 11.34
  steps= int(math.floor(steps))
    enc_tgt(1,1,steps)
    fwd()
    time.sleep(feet*2)
def turn_right()
  enc_tgt(1,0,steps)
  time.sleep(.1)
  right()
  time.sleep(2)

def turn_left()
  enc_tgt(0,1,steps)
  time.sleep(.1)
  left()
  time.sleep(2)

move_forward(4)
turn_right()
move_forward(3)
turn_left()
move_forward(3)
turn_left()
move_forward(2)
turn_left()
move_forward(4)

