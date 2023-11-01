# webgl-library-v09
a webgl library version 09 - added functionality to load mutiple images and both textures and colour data textures
DO NOT USE BOTH AT THE SAME TIME
There seems to be a problem - it max's out memory. Looks like WebGL's data texture uses push() and never pop()'s.
