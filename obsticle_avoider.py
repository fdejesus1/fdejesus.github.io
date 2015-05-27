from gopigo import *



def move_forward(feet)
  mm= feet * 304.8
  steps=mm / 11.34
  steps= int(math.floor(steps))
    enc_tgt(1,1,steps)
    fwd()
    time.sleep(feet*2)

def turn_right()
    enc_tgt(1,0,18)
    time.sleep(.1)
    right()
    time.sleep(2)

def turn_left()
    enc_tgt(0,1,18)
    time.sleep(.1)
    left()
    time.sleep(2)
while True:
  while us_dist(15) > 15:
    fwd()
  turn_right()


