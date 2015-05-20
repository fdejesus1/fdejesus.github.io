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


def move_right(feet)
enc_tgt(1,0,steps)
time.sleep(.1)
right()
time.sleep(feet*2)

def move_left(feet)
enc_tgt(0,1,steps)
time.sleep(.1)
right()
time.sleep(feet*2)

move_forward(4)
move_right(3)
move_left(3)
move_left(2)
move_left(4)

