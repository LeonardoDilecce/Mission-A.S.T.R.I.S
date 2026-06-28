Vector.prototype.Magnitude = function()
{
    return Math.hypot(
        this.x, 
        this.y
    );
}