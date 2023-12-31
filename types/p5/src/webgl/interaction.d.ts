// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Allows movement around a 3D sketch using a mouse
         *   or trackpad or touch. Left-clicking and dragging
         *   or swipe motion will rotate the camera position
         *   about the center of the sketch, right-clicking and
         *   dragging or multi-swipe will pan the camera
         *   position without rotation, and using the mouse
         *   wheel (scrolling) or pinch in/out will move the
         *   camera further or closer from the center of the
         *   sketch. This function can be called with
         *   parameters dictating sensitivity to mouse/touch
         *   movement along the X and Y axes. Calling this
         *   function without parameters is equivalent to
         *   calling orbitControl(1,1). To reverse direction of
         *   movement in either axis, enter a negative number
         *   for sensitivity.
         *   @param [sensitivityX] sensitivity to mouse
         *   movement along X axis
         *   @param [sensitivityY] sensitivity to mouse
         *   movement along Y axis
         *   @param [sensitivityZ] sensitivity to scroll
         *   movement along Z axis
         *   @param [options] An optional object that can
         *   contain additional settings, disableTouchActions -
         *   Boolean, default value is true. Setting this to
         *   true makes mobile interactions smoother by
         *   preventing accidental interactions with the page
         *   while orbiting. But if you're already doing it via
         *   css or want the default touch actions, consider
         *   setting it to false. freeRotation - Boolean,
         *   default value is false. By default, horizontal
         *   movement of the mouse or touch pointer rotates the
         *   camera around the y-axis, and vertical movement
         *   rotates the camera around the x-axis. But if
         *   setting this option to true, the camera always
         *   rotates in the direction the pointer is moving.
         *   For zoom and move, the behavior is the same
         *   regardless of true/false.
         *   @chainable
         */
        orbitControl(sensitivityX?: number, sensitivityY?: number, sensitivityZ?: number, options?: object): p5;

        /**
         *   debugMode() helps visualize 3D space by adding a
         *   grid to indicate where the ‘ground’ is in a sketch
         *   and an axes icon which indicates the +X, +Y, and
         *   +Z directions. This function can be called without
         *   parameters to create a default grid and axes icon,
         *   or it can be called according to the examples
         *   above to customize the size and position of the
         *   grid and/or axes icon. The grid is drawn using the
         *   most recently set stroke color and weight. To
         *   specify these parameters, add a call to stroke()
         *   and strokeWeight() just before the end of the
         *   draw() loop. By default, the grid will run through
         *   the origin (0,0,0) of the sketch along the XZ
         *   plane and the axes icon will be offset from the
         *   origin. Both the grid and axes icon will be sized
         *   according to the current canvas size. Note that
         *   because the grid runs parallel to the default
         *   camera view, it is often helpful to use debugMode
         *   along with orbitControl to allow full view of the
         *   grid.
         */
        debugMode(): void;

        /**
         *   debugMode() helps visualize 3D space by adding a
         *   grid to indicate where the ‘ground’ is in a sketch
         *   and an axes icon which indicates the +X, +Y, and
         *   +Z directions. This function can be called without
         *   parameters to create a default grid and axes icon,
         *   or it can be called according to the examples
         *   above to customize the size and position of the
         *   grid and/or axes icon. The grid is drawn using the
         *   most recently set stroke color and weight. To
         *   specify these parameters, add a call to stroke()
         *   and strokeWeight() just before the end of the
         *   draw() loop. By default, the grid will run through
         *   the origin (0,0,0) of the sketch along the XZ
         *   plane and the axes icon will be offset from the
         *   origin. Both the grid and axes icon will be sized
         *   according to the current canvas size. Note that
         *   because the grid runs parallel to the default
         *   camera view, it is often helpful to use debugMode
         *   along with orbitControl to allow full view of the
         *   grid.
         *   @param mode either GRID or AXES
         */
        debugMode(mode: DEBUG_MODE): void;

        /**
         *   debugMode() helps visualize 3D space by adding a
         *   grid to indicate where the ‘ground’ is in a sketch
         *   and an axes icon which indicates the +X, +Y, and
         *   +Z directions. This function can be called without
         *   parameters to create a default grid and axes icon,
         *   or it can be called according to the examples
         *   above to customize the size and position of the
         *   grid and/or axes icon. The grid is drawn using the
         *   most recently set stroke color and weight. To
         *   specify these parameters, add a call to stroke()
         *   and strokeWeight() just before the end of the
         *   draw() loop. By default, the grid will run through
         *   the origin (0,0,0) of the sketch along the XZ
         *   plane and the axes icon will be offset from the
         *   origin. Both the grid and axes icon will be sized
         *   according to the current canvas size. Note that
         *   because the grid runs parallel to the default
         *   camera view, it is often helpful to use debugMode
         *   along with orbitControl to allow full view of the
         *   grid.
         *   @param mode either GRID or AXES
         *   @param [gridSize] size of one side of the grid
         *   @param [gridDivisions] number of divisions in the
         *   grid
         *   @param [xOff] X axis offset from origin (0,0,0)
         *   @param [yOff] Y axis offset from origin (0,0,0)
         *   @param [zOff] Z axis offset from origin (0,0,0)
         */
        debugMode(
            mode: UNKNOWN_P5_CONSTANT,
            gridSize?: number,
            gridDivisions?: number,
            xOff?: number,
            yOff?: number,
            zOff?: number
        ): void;

        /**
         *   debugMode() helps visualize 3D space by adding a
         *   grid to indicate where the ‘ground’ is in a sketch
         *   and an axes icon which indicates the +X, +Y, and
         *   +Z directions. This function can be called without
         *   parameters to create a default grid and axes icon,
         *   or it can be called according to the examples
         *   above to customize the size and position of the
         *   grid and/or axes icon. The grid is drawn using the
         *   most recently set stroke color and weight. To
         *   specify these parameters, add a call to stroke()
         *   and strokeWeight() just before the end of the
         *   draw() loop. By default, the grid will run through
         *   the origin (0,0,0) of the sketch along the XZ
         *   plane and the axes icon will be offset from the
         *   origin. Both the grid and axes icon will be sized
         *   according to the current canvas size. Note that
         *   because the grid runs parallel to the default
         *   camera view, it is often helpful to use debugMode
         *   along with orbitControl to allow full view of the
         *   grid.
         *   @param mode either GRID or AXES
         *   @param [axesSize] size of axes icon
         *   @param [xOff] X axis offset from origin (0,0,0)
         *   @param [yOff] Y axis offset from origin (0,0,0)
         *   @param [zOff] Z axis offset from origin (0,0,0)
         */
        debugMode(mode: UNKNOWN_P5_CONSTANT, axesSize?: number, xOff?: number, yOff?: number, zOff?: number): void;

        /**
         *   debugMode() helps visualize 3D space by adding a
         *   grid to indicate where the ‘ground’ is in a sketch
         *   and an axes icon which indicates the +X, +Y, and
         *   +Z directions. This function can be called without
         *   parameters to create a default grid and axes icon,
         *   or it can be called according to the examples
         *   above to customize the size and position of the
         *   grid and/or axes icon. The grid is drawn using the
         *   most recently set stroke color and weight. To
         *   specify these parameters, add a call to stroke()
         *   and strokeWeight() just before the end of the
         *   draw() loop. By default, the grid will run through
         *   the origin (0,0,0) of the sketch along the XZ
         *   plane and the axes icon will be offset from the
         *   origin. Both the grid and axes icon will be sized
         *   according to the current canvas size. Note that
         *   because the grid runs parallel to the default
         *   camera view, it is often helpful to use debugMode
         *   along with orbitControl to allow full view of the
         *   grid.
         *   @param [gridSize] size of one side of the grid
         *   @param [gridDivisions] number of divisions in the
         *   grid
         *   @param [axesSize] size of axes icon
         */
        debugMode(
            gridSize?: number,
            gridDivisions?: number,
            gridXOff?: number,
            gridYOff?: number,
            gridZOff?: number,
            axesSize?: number,
            axesXOff?: number,
            axesYOff?: number,
            axesZOff?: number
        ): void;

        /**
         *   Turns off debugMode() in a 3D sketch.
         */
        noDebugMode(): void;
    }
}
