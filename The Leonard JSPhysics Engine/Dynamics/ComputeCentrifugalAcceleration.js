// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Leonardo Dilecce
/**
 * 
 * function ComputeCentrifugalAcceleration(
 *     relativePositionX,
 *     relativePositionY,
 *     omega
 * )
 * 
 * Computes the centrifugal acceleration vector experienced by a point
 * rotating around an axis with angular velocity ω (omega).
 * ------------
 * 
 * Last Update: 2026-06-28
 * -------------
 * 
 * The function performs:
 *
 *      a_c = r * ω²
 *
 * where:
 *   - r is the radial position vector (x, y)
 *   - ω is the angular velocity (rad/s)
 *
 * The direction of the acceleration is radially outward from the axis
 * of rotation, and its magnitude is proportional to the square of ω.
 *
 * Parameters:
 *   relativePositionX — X coordinate of the point relative to the rotation axis
 *   relativePositionY — Y coordinate of the point relative to the rotation axis
 *   omega — angular velocity (rad/s)
 *
 * Returns:
 *   A Vector representing the centrifugal acceleration (m/s²)
 * -------------
 * Usage:
 *   const aC = physicsEngine.ComputeCentrifugalAcceleration(
 *       posX, posY, angularVelocity
 *   );
 * 
 **/
PhysicsEngine.prototype.ComputeCentrifugalAcceleration = function(
    relativePositionX,
    relativePositionY,
    omega
)
{
    // Create the radial position vector r = (x, y)
    // This represents the distance and direction from the rotation axis.
    const r = new Vector(
        relativePositionX, 
        relativePositionY
    );
    // Multiply the vector by ω² to compute:
    //   a_c = r * ω²
    // Centrifugal acceleration grows with the square of angular velocity.
    return r.multiply(
        omega * omega
    );
}