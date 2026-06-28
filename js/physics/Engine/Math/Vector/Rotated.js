Vector.prototype.Rotated = function(
    angle
)
{
    const cos = Math.cos(
        angle
    );
    const sin = Math.sin(
        angle
    );
    return new Vector(
        this.x * cos - this.y * sin,
        this.x * sin + this.y * cos,
        this.origine
    );
}