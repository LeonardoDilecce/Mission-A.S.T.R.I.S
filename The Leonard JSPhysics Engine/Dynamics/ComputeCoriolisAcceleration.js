// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Leonardo Dilecce
/**
 * 
 * function ComputeCoriolisAcceleration(
 *     relativeVelocity,
 *     omega
 * )
 * 
 * Computes the Coriolis acceleration experienced by a moving point in a
 * rotating reference frame with angular velocity ω (omega).
 * ------------
 * 
 * Last Update: 2026-06-28
 * -------------
 * 
 * The function implements the classical Coriolis formula:
 *
 *      a_cor = -2 * (ω × v_rel)
 *
 * In 2D, assuming rotation around the Z axis, the cross product becomes:
 *
 *      ω × v = ( -v_y * ω , v_x * ω )
 *
 * Therefore:
 *
 *      a_cor = ( -v_y , v_x ) * (-2 * ω)
 *
 * The Coriolis acceleration is perpendicular to the relative velocity and
 * proportional to both the angular velocity and the speed of the object.
 *
 * Parameters:
 *   relativeVelocity — Vector containing the velocity relative to the rotating frame
 *   omega — angular velocity (rad/s)
 *
 * Returns:
 *   A Vector representing the Coriolis acceleration (m/s²)
 * -------------
 * Usage:
 *   const aCor = physicsEngine.ComputeCoriolisAcceleration(
 *       velocityVector,
 *       angularVelocity
 *   );
 * 
 **/
PhysicsEngine.prototype.ComputeCoriolisAcceleration = function(
    relativeVelocity,
    omega
)
{
    // Build the perpendicular vector:
    //   ( -v_y , v_x )
    // This corresponds to the 2D representation of (ω × v_rel)
    const p = new Vector(
        -relativeVelocity.y, 
        relativeVelocity.x
    );
    // Multiply by -2 * ω to compute:
    //   a_cor = -2 * (ω × v_rel)
    // Coriolis acceleration acts sideways relative to the motion.
    return p.multiply(
        -2 * omega
    );
}