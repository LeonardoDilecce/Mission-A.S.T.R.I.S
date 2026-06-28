Vector.prototype.Divide = function(
    scalar
) 
{
    if (scalar !== 0) 
    {
        this.x /= scalar;
        this.y /= scalar;
    }
    return this;
}