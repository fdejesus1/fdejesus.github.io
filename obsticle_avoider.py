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
  stop()
  servo(0)
  distance_left= us_dist(15)
  servo(180)
  distance_right= us_dist(15)
  if distance_right < 15:
    turn_right()
    fwd()
  if distance_left < 15:
    turn_left()
    fwd()
    


