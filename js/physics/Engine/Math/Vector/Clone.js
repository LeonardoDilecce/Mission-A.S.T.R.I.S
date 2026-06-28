Vector.prototype.Clone = function()
{
    return new Vector(
        this.x, 
        this.y, 
        this.origine
    );
}