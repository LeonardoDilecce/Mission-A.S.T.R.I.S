function ComputeRadialOrbitalDistance(
    a, 
    e, 
    anomaly) 
{
    return a * (1 - e * e) / (1 + e * Math.cos(anomaly));
}
function ComputeOrbitalVelocity(
    radialDistance,
    mass,
    a
) 
{
    return Math.sqrt(G * mass * (2 / radialDistance - 1 / a)); 
}
function ComputeAngularVelocity(
    speed,
    radialDistance
)
{
    return speed / radialDistance;
}
function ComputeCentrifugalAcceleration(
    relativePositionX,
    relativePositionY,
    omega
)
{
    return new Vector(relativePositionX, relativePositionY).multiply(omega * omega);
}
function ComputeCoriolisAcceleration(
    relativeVelocity,
    omega
)
{
    return new Vector(-relativeVelocity.y, relativeVelocity.x).multiply(-2 * omega);
}
function reloadCoriolisAcceleration(star,chronometer,starship,targetA,BaseMass,targetE,TargetCenter,TargetEpochAnomaly,deltaTime){
    if(starship.TypeRelObj == "planet"||starship.TypeRelObj == "moon"){
        const anomaly = calculateTrueAnomaly(star,chronometer,targetA,targetE,chronometer.time,TargetEpochAnomaly,BaseMass,null,deltaTime,false); 
        const tr = ComputeRadialOrbitalDistance(targetA, targetE, anomaly);
        const TSpeed = ComputeOrbitalVelocity(tr, BaseMass, targetA);
        const Ncdx = starship.position.x - TargetCenter.x;
        const Ncdy = starship.position.y - TargetCenter.y;
        const Ndistanza = Math.sqrt(Ncdx * Ncdx + Ncdy * Ncdy);
        const omega = ComputeAngularVelocity(TSpeed, Ndistanza);
        const aCentrifuga = ComputeCentrifugalAcceleration(Ncdx, Ncdy, omega);
        const aTotale = aCentrifuga.clone();
        const vRel = starship.velocity;
        const aCoriolis = ComputeCoriolisAcceleration(vRel, omega);
        aTotale.add(aCoriolis);
        if(isNaN(aTotale.x)||isNaN(aTotale.y)){
            console.error("NaN rilevato! nell'accellerazione di coriolis");
        }else starship.acceleration.add(aTotale);
    }      
}